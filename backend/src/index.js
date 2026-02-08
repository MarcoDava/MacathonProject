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

const PERSONAS = {
  'JBFqnCBsd6RMkjVDRZzb': "Skibidi Toilet (Brainrot king, uses gyatt, rizz, sigma. A chaotic genius coach)",
  'ErXwobaYiN019PkySvjV': "Donald Trump (Confident, uses 'huge', 'tremendous', focuses on winning and 67 deals)",
  'EXAVITQu4vr4xnSDxMaL': "Tung Tung Sahur (High energy, energetic drumming sounds like 'Tung Tung', sincere but loud)"
};



// In your backend/index.js
app.post('/api/ask-question', async (req, res) => {
  const { question, voiceId } = req.body; // Receive the voiceId from frontend
  
  try {
    const audio = await elevenlabs.textToSpeech.convert(voiceId || 'JBFqnCBsd6RMkjVDRZzb', {
      text: question,
      modelId: 'eleven_turbo_v2_5',
    });

    res.setHeader('Content-Type', 'audio/mpeg');
    for await (const chunk of audio) {
      res.write(chunk);
    }
    res.end();
  } catch (error) {
    console.error("ElevenLabs Error:", error);
    res.status(500).send('Audio failed');
  }
});

// 1. Generate Questions
// --- ROUTE 1: GENERATE QUESTIONS ---
app.post('/api/generate-questions', async (req, res) => {
  const { jobDescription, voiceId } = req.body;
  const currentPersona = PERSONAS[voiceId] || "a professional interviewer";

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
    
    const prompt = `You are ${currentPersona}. 
    Based on this job description: ${jobDescription}, generate exactly 3 interview questions. mix some behavioural and technical questions, not all technical. 
    Return ONLY a JSON array: [{"question": "text", "type": "technical"}]
    Speak in your character's voice using your specific slang and personality.
    Do not make the questions too hard, but make them specific to the job description.`;

    const result = await model.generateContent(prompt);
    const text = result.response.text().replace(/```json|```/g, "").trim();
    res.json({ questions: JSON.parse(text) });
  } catch (error) {
    console.error("Question Gen Error:", error);
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
  const { sessionData, voiceId } = req.body;
  // Define persona context based on voiceId
  const personas = {
    'JBFqnCBsd6RMkjVDRZzb': "Skibidi Toilet (Brainrot king, uses gyatt/rizz/sigma, but secretly a genius coach)",
    'ErXwobaYiN019PkySvjV': "Donald Trump (Confident, uses 'huge/tremendous', focuses on winning, says 67 often)",
    'EXAVITQu4vr4xnSDxMaL': "Tung Tung Sahur (High energy, energetic drumming sounds, sincere but loud)"
  };

  const currentPersona = personas[voiceId] || "Professional Interviewer";

  

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
    const prompt = `You are ${currentPersona}. Review these interview answers: ${JSON.stringify(sessionData)}.
  1. Be professional and sincere. 
  2. Be specific about what words or phrases were weak.
  3. Speak in your character's voice (add slang or personality).
  4. Return a JSON array: [{"score": 0-10, "critique": "Detailed text..."}]`;
    
    const result = await model.generateContent(prompt);
    const text = result.response.text().replace(/```json|```/g, "").trim();
    res.json({ feedback: JSON.parse(text) });
  } catch (error) {
    res.status(500).json({ error: 'Feedback failed' });
  }
});

app.listen(3000, () => console.log('🚀 Backend: http://localhost:3000'));