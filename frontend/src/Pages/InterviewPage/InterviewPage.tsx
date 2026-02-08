import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const InterviewPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [transcript, setTranscript] = useState("");
  const navigate = useNavigate();

  // Web Speech API Setup
  const recognition = new (window as any).webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.onresult = (event: any) => {
    const text = event.results[event.results.length - 1][0].transcript;
    setTranscript(prev => prev + " " + text);
  };

  useEffect(() => {
    const saved = localStorage.getItem("interviewQuestions");
    if (saved) setQuestions(JSON.parse(saved));
  }, []);

  const playAI = async () => {
    const res = await fetch("http://localhost:3000/api/ask-question", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: questions[currentIdx].question }),
    });
    const blob = await res.blob();
    new Audio(URL.createObjectURL(blob)).play();
  };

  const nextQuestion = () => {
    const newAnswers = [...answers, { question: questions[currentIdx].question, answer: transcript }];
    if (currentIdx < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentIdx(currentIdx + 1);
      setTranscript("");
    } else {
      localStorage.setItem("sessionResults", JSON.stringify(newAnswers));
      navigate("/feedback");
    }
  };

  if (!questions.length) return <p className="text-white">Loading...</p>;

  return (
    <div className="p-10 text-center text-white">
      <h2 className="text-white">{questions[currentIdx].question}</h2>
      <button onClick={playAI} className="bg-blue-500 p-2 m-2">Listen</button>
      <button onClick={() => recognition.start()} className="bg-red-500 p-2 m-2">Start Recording</button>
      <button onClick={() => recognition.stop()} className="bg-gray-500 p-2 m-2">Stop</button>
      <p className="mt-4 border p-4 bg-gray-800 text-white">{transcript || "Your answer will appear here..."}</p>
      <button onClick={nextQuestion} className="bg-green-600 p-4 mt-10">Next</bu