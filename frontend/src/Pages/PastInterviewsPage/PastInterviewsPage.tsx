
import { useEffect, useState } from "react";

const PastInterviewsPage = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("interviewHistory") || "[]");
    setHistory(savedHistory);
  }, []);

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-10">Past Interviews</h1>
      {history.length === 0 ? (
        <p className="text-gray-500">No interviews recorded yet.</p>
      ) : (
        history.map((session: any, i) => (
          <div key={i} className="mb-6 p-6 bg-gray-900 rounded-xl border border-gray-800">
            <div className="flex justify-between items-center mb-4">
              <span className="text-blue-400 font-bold">{session.date}</span>
              <span className="bg-green-600 px-3 py-1 rounded text-sm">Avg Score: {session.avgScore}/10</span>
            </div>
            <p className="text-gray-400 text-sm">Job: {session.jobTitle}</p>
          </div>
        ))
      )}
    </div>
  );
};


export default PastInterviewsPage;