import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env') });

import { GoogleGenAI } from "@google/genai";

  // The client gets the API key from the environment variable `GEMINI_API_KEY`.
  //console.log('API Key loaded:', process.env.GEMINI_API_KEY ? 'YES' : 'NOT FOUND');
  const ai = new GoogleGenAI({});

  async function generateInterviewQuestions(jobDescription) {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Create a list of 10 interview questions for a ${jobDescription}, each separated by a new line`
    });

    //console.log(response.text);
    return response.text;
  }

  async function main(jobDescription) {
    var interviewQuestions = await generateInterviewQuestions(jobDescription);
    interviewQuestions = interviewQuestions.split('\n');
    //console.log(interviewQuestions);
    return interviewQuestions;
  }

const jobDescription = ["Software Engineer", "Data Scientist", "Product Manager", "UX Designer", "Marketing Specialist", "Sales Representative", "Financial Analyst", "Human Resources Manager", "Operations Manager", "Customer Support Specialist"];
main(jobDescription[Math.floor(Math.random() * jobDescription.length)]);