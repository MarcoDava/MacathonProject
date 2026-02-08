import { useEffect, useState } from "react";

const FeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const loadFeedback = async () => {
        
      const sessionData = JSON.parse(localStorage.getItem("sessionResults") || "[]");
      const res = await fetch("http://localhost:3000/api/get-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionData }),
      });
     
      // Inside FeedbackPage.tsx loadFeedback
        const data = await res.json();
        setFeedbacks(data.feedback || []);

        // SAVE TO HISTORY
        const history = JSON.parse(localStorage.getItem("interviewHistory") || "[]");
        const newEntry = {
        date: new Date().toLocaleString(),
        jobTitle: "Interview Session",
        avgScore: data.feedback[0]?.score || 0,
        feedback: data.feedback
        };
        localStorage.setItem("interviewHistory", JSON.stringify([newEntry, ...history]));
    };
    loadFeedback();
  }, []);
  const speakFeedback = async (text: string) => {
  const voiceId = localStorage.getItem("selectedVoiceId");
  const res = await fetch("http://localhost:3000/api/ask-question", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question: text, voiceId }),
  });
  const audio = new Audio(URL.createObjectURL(await res.blob()));
  audio.play();
};


  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4 text-white">Interview Feedback</h1>
      {feedbacks.map((f: any, i) => (
        <div key={i} className="mb-4 p-4 bg-gray-900 border-l-4 border-green-500">
          <p className="font-bold text-white">Score: {f.score}/10</p>
          <p className="text-white">{f.critique}</p>
            <button onClick={() => speakFeedback(f.critique)} className="bg-blue-500 text-white p-2 rounded mt-2">
                Hear Feedback
            </button>
        </div>
      ))}
    </div>
  );
};
export default FeedbackPage;