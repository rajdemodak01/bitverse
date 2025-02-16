import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const QuizResults: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { career } = location.state || { career: "No career selected" };

  return (
    <div className="flex flex-col items-center justify-center h-screen 
      bg-gradient-to-br from-green-600 to-blue-400 text-white">
      <div className="p-6 bg-white text-black shadow-xl rounded-lg w-3/4 md:w-1/2 transition-transform duration-300">
        <h2 className="text-2xl font-bold mb-4">Your Career Recommendation</h2>
        <p className="text-lg">Based on your answers, a great career path for you is:</p>
        <h1 className="text-3xl font-bold text-teal-600 mt-4">{career}</h1>
        <button 
          className="mt-6 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-700 transition"
          onClick={() => navigate("/career-quiz")}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default QuizResults;
