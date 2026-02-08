
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const JobDescriptionPage = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const startInterview = async () => {
    
    const voiceId = localStorage.getItem("selectedVoiceId");
    if (!voiceId) {
    alert("Please go back and select a character first!");
    return;
    }
    const response = await fetch("http://localhost:3000/api/generate-questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
        jobDescription: text,
        voiceId: voiceId // THIS IS KEY
        }),
    });

    const data = await response.json();
    if (data.questions) {
      localStorage.setItem("interviewQuestions", JSON.stringify(data.questions));
      navigate("/interview");
    }
  };

  return (
    <div className="p-10">
      <textarea onChange={(e) => setText(e.target.value)} className="w-full h-40 text-white p-4 bg-gray-800 border border-gray-700 rounded" placeholder="Paste job description..." />
      <button onClick={startInterview} className="bg-blue-600 p-3 mt-4">Start Interview</button>
    </div>
  );
};

export default JobDescriptionPage;