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
      const data = await res.json();
      setFeedbacks(data.feedback || []);
    };
    loadFeedback();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4 text-white">Interview Feedback</h1>
      {feedbacks.map((f: any, i) => (
        <div key={i} className="mb-4 p-4 bg-gray-900 border-l-4 border-green-500">
          <p className="font-bold text-white">Score: {f.score}/10</p>
          <p className="text-white">{f.critique}</p>
        </div>
      ))}
    </div>
  );
};
export default FeedbackPage;