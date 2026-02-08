import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const InterviewPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [transcript, setTranscript] = useState("");
  const [phase, setPhase] = useState("loading"); // loading, speaking, countdown, recording
  const [countdown, setCountdown] = useState(3);
  const [timer, setTimer] = useState(120);
  const navigate = useNavigate();

  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("interviewQuestions");
    if (saved) {
      setQuestions(JSON.parse(saved));
      setPhase("speaking");
    }
  }, []);

  // 1. Automatic Voice Playback when question changes
  useEffect(() => {
    if (phase === "speaking" && questions[currentIdx]) {
      playAIQuestion(questions[currentIdx].question);
    }
  }, [currentIdx, phase]);

  const playAIQuestion = async (text: string) => {
    const voiceId = localStorage.getItem("selectedVoiceId") || "JBFqnCBsd6RMkjVDRZzb";
    const res = await fetch("http://localhost:3000/api/ask-question", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: text, voiceId }),
    });
    const blob = await res.blob();
    const audio = new Audio(URL.createObjectURL(blob));
    audio.onended = () => setPhase("countdown"); // Start countdown after AI finishes
    audio.play();
  };

  // 2. 3-Second Countdown Logic
  useEffect(() => {
    if (phase === "countdown") {
      if (countdown > 0) {
        const timerId = setTimeout(() => setCountdown(countdown - 1), 1000);
        return () => clearTimeout(timerId);
      } else {
        setPhase("recording");
        startRecording();
      }
    }
  }, [phase, countdown]);

  // 3. 2-Minute Timer Logic
  useEffect(() => {
    if (phase === "recording" && timer > 0) {
      const timerId = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(timerId);
    } else if (timer === 0) {
      handleNext(); // Auto-advance if time runs out
    }
  }, [phase, timer]);

  const startRecording = () => {
    const SpeechRecognition = (window as any).webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.onresult = (event: any) => {
      setTranscript(event.results[0][0].transcript);
    };
    recognitionRef.current.start();
  };

  const handleNext = () => {
    recognitionRef.current?.stop();
    const newAnswers = [...answers, { question: questions[currentIdx].question, answer: transcript }];
    
    if (currentIdx < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentIdx(currentIdx + 1);
      setTranscript("");
      setCountdown(3);
      setTimer(120);
      setPhase("speaking");
    } else {
      localStorage.setItem("sessionResults", JSON.stringify(newAnswers));
      navigate("/feedback");
    }
  };

  if (!questions.length) return <div className="p-20 text-center">Loading Interview...</div>;

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center p-10 text-white">
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-gray-400 mb-4">Question {currentIdx + 1} of {questions.length}</h2>
        <h1 className="text-3xl font-bold mb-10">{questions[currentIdx].question}</h1>

        {phase === "speaking" && <div className="animate-pulse text-blue-400 text-xl">Interviewer is speaking...</div>}

        {phase === "countdown" && <div className="text-6xl font-black text-yellow-500">Recording in: {countdown}</div>}

        {phase === "recording" && (
          <div className="space-y-6">
            <div className="text-red-500 text-2xl font-mono">TIME LEFT: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}</div>
            <div className="p-6 border border-red-500 rounded-lg bg-red-900/20">
              <p className="italic">"{transcript || "Listening..."}"</p>
            </div>
            <button onClick={handleNext} className="bg-white text-black px-8 py-3 rounded-full font-bold">Submit Answer</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewPage;