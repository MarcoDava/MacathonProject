import { GoogleGenerativeAI } from "@google/generative-ai";

// REMOVE THE GLOBAL INITIALIZATION HERE
// const genAI = ... (delete this)
// const model = ... (delete this)

export const generateFeedback = async (originalQuestion: string, userSpeech: string): Promise<string> => {
  
  // MOVED INSIDE: Now it only runs when the function is called!
  // At this point, the .env file is guaranteed to be loaded.
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

  // 1. Construct a specific prompt for "What went wrong"
  const prompt = `
    You are a strict but helpful interview coach.
    
    Context:
    - Interview Question: "${originalQuestion}"
    - Candidate's Answer: "${userSpeech}"
    
    Task:
    Provide a short, spoken-style summary of what the candidate did wrong or missed. 
    
    Guidelines:
    - Focus ONLY on constructive criticism (areas for improvement).
    - Keep it under 3 sentences.
    - Write it as if you are talking directly to them (use "You").
    - Do NOT use markdown, bullet points, or bold text. Just plain text.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const feedbackText = response.text();
    
    // Clean up any accidental newlines or formatting
    return feedbackText.replace(/\n/g, " ").trim();
    
  } catch (error) {
    console.error("Gemini Feedback Error:", error);
    return "I had trouble analyzing your response. Please try again.";
  }
};