import dotenv from 'dotenv';
import path from 'path';


// ... imports ...
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// 1. Load the .env file from the parent directory BEFORE importing your function
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// 2. Now it's safe to import your function
import { generateFeedback } from './ResponseFeedback';

const runTest = async () => {
  console.log("🧪 Starting Feedback Test...");

  // Mock Data (Simulate a bad interview answer)
  const mockQuestion = "Tell me about a time you had a conflict with a coworker.";
  const mockUserAnswer = "I don't really like conflict so I just ignored them until they went away. It wasn't a big deal.";

  console.log(`\n📝 Question: ${mockQuestion}`);
  console.log(`🗣️ Answer: ${mockUserAnswer}`);
  console.log("\n... Analysing with Gemini (this may take a few seconds) ...");

  try {
    const feedback = await generateFeedback(mockQuestion, mockUserAnswer);
    
    console.log("\n-----------------------------------");
    console.log("🤖 GEMINI FEEDBACK:");
    console.log(feedback);
    console.log("-----------------------------------");
    
  } catch (error) {
    console.error("❌ Test Failed:", error);
  }
};

runTest();