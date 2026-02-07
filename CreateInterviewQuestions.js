import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env') });

import { GoogleGenAI } from "@google/genai";

  // The client gets the API key from the environment variable `GEMINI_API_KEY`.
  console.log('API Key loaded:', process.env.GEMINI_API_KEY ? 'YES' : 'NOT FOUND');
  const ai = new GoogleGenAI({});

  async function generateInterviewQuestions() {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Create a list of 10 interview questions, each seperated by a new line"
    });

    //console.log(response.text);
    return response.text;
  }

  async function main() {
    var interviewQuestions = await generateInterviewQuestions();
    interviewQuestions = interviewQuestions.split('\n');
    console.log(interviewQuestions);
    return interviewQuestions;
  }

main();

