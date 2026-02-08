// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import { GoogleGenerativeAI } from "@google/generative-ai";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// // Generate interview questions endpoint
// app.post('/api/generate-questions', async (req, res) => {
//   const { jobDescription } = req.body;

//   if (!jobDescription) {
//     return res.status(400).json({ error: 'Job description is required' });
//   }

//   try {
//     const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
    
//     const prompt = `You are an expert interviewer. Based on this job description, generate exactly 3 interview questions (mix of technical and behavioral).

// Job Description:
// ${jobDescription}

// Return ONLY a JSON array with this exact format (no markdown, no backticks):
// [{"question": "question text here", "type": "technical"}, {"question": "question text here", "type": "behavioral"}]`;

//     const result = await model.generateContent(prompt);
//     const text = result.response.text().replace(/```json|```/g, "").trim();
//     const questions = JSON.parse(text);

//     res.json({ questions });
//   } catch (error) {
//     console.error('Error generating questions:', error);
//     res.status(500).json({ error: 'Failed to generate questions' });
//   }
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });