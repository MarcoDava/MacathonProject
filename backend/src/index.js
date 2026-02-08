import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js';

dotenv.config();

const app = express();
app.use(cors()); // Allows your React frontend to talk to this server
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const elevenlabs = new ElevenLabsClient({ apiKey: process.env.ELEVENLABS_API_KEY });

const VOICE_ID = 'JBFqnCBsd6RMkjVDRZzb'; 

// 1. Generate Questions
app.post('/api/generate-questions', async (req, res) => {
  const { jobDescription } = req.body;
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
    const prompt = `Based on this job description: ${jobDescription}, generate exactly 3 interview questions. 
    Return ONLY a JSON array: [{"question": "text", "type": "technical"}]`;
    
    const result = await model.generateContent(prompt);
    const text = result.response.text().replace(/```json|```/g, "").trim();
    res.json({ questions: JSON.parse(text) });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate questions' });
  }
});

// 2. Stream AI Voice
app.post('/api/ask-question', async (req, res) => {
  const { question } = req.body;
  try {
    const audio = await elevenlabs.textToSpeech.convert(VOICE_ID, {
      text: question,
      modelId: 'eleven_turbo_v2_5',
    });
    res.setHeader('Content-Type', 'audio/mpeg');
    for await (const chunk of audio) { res.write(chunk); }
    res.end();
  } catch (error) {
    res.status(500).send('Audio failed');
  }
});

// 3. Generate Final Feedback
app.post('/api/get-feedback', async (req, res) => {
  const { sessionData } = req.body;
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
    const prompt = `Review these interview answers: ${JSON.stringify(sessionData)}. 
    Return ONLY a JSON array: [{"score": 8, "critique": "text"}]`;
    
    const result = await model.generateContent(prompt);
    const text = result.response.text().replace(/```json|```/g, "").trim();
    res.json({ feedback: JSON.parse(text) });
  } catch (error) {
    res.status(500).json({ error: 'Feedback failed' });
  }
});

app.listen(3000, () => console.log('🚀 Backend: http://localhost:3000'));