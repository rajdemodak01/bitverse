import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// ✅ Define the structure of each question step
type QuestionStep = {
  text: string;
  next?: keyof typeof questions; // Must refer to an existing key
  career?: string;
};

// ✅ Define the questions flow with more layers
const questions = {
  start: [{ text: "What subjects do you enjoy the most?", next: "subject" }],

  subject: [
    { text: "Mathematics", next: "mathPath" },
    { text: "Science", next: "sciencePath" },
    { text: "Commerce", next: "commercePath" },
    { text: "Arts", next: "artsPath" },
    { text: "Not Sure", next: "notSure" },
  ],

  // ✅ Math Path
  mathPath: [
    { text: "Do you like problem-solving?", next: "mathProblemSolving" },
    { text: "Do you enjoy working with numbers?", next: "mathNumbers" },
  ],
  mathProblemSolving: [
    { text: "Do you prefer AI & Data?", career: "AI Engineer, Data Scientist" },
    { text: "Do you like Theoretical Math?", career: "Mathematician, Statistician" },
  ],
  mathNumbers: [
    { text: "Do you want to work in finance?", career: "Investment Banker, Financial Analyst" },
    { text: "Do you enjoy accounting?", career: "Chartered Accountant, Auditor" },
  ],

  // ✅ Science Path
  sciencePath: [
    { text: "Do you prefer Biology or Engineering?", next: "scienceChoice" },
  ],
  scienceChoice: [
    { text: "Biology", career: "Doctor, Biotechnologist" },
    { text: "Engineering", career: "Software Engineer, Mechanical Engineer" },
  ],

  // ✅ Commerce Path
  commercePath: [
    { text: "Do you prefer Business or Economics?", next: "commerceChoice" },
  ],
  commerceChoice: [
    { text: "Business", career: "Entrepreneur, Business Analyst" },
    { text: "Economics", career: "Economist, Market Analyst" },
  ],

  // ✅ Arts Path
  artsPath: [
    { text: "Are you interested in creative fields?", next: "artsCreative" },
  ],
  artsCreative: [
    { text: "Fine Arts & Design", career: "Graphic Designer, Painter" },
    { text: "Journalism & Media", career: "Journalist, News Reporter" },
  ],

  // ✅ Not Sure Path
  notSure: [
    { text: "Would you like general career counseling?", career: "Career Advisor" },
  ],
} as const; // ✅ `as const` ensures no accidental modification

// ✅ Define a valid type for question keys
type QuestionKey = keyof typeof questions;

const StudentCareerQuiz: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<QuestionKey>("start");
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null);

  // ✅ Handle answer selection
  const handleOptionClick = (option: QuestionStep) => {
    if (option.career) {
      setSelectedCareer(option.career);
    } else if (option.next) {
      setCurrentStep(option.next);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-r from-textmain to-yellow-300">
      <div className="p-8 bg-white shadow-lg rounded-xl max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-6">Career Pathway Quiz</h1>

        {!selectedCareer ? (
          <>
            <h2 className="text-lg font-semibold">{questions[currentStep][0].text}</h2>
            <div className="mt-4 flex flex-col space-y-3">
              {questions[currentStep].map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div>
            <h2 className="text-xl font-bold text-green-700">Your Recommended Career:</h2>
            <p className="mt-3 text-lg font-semibold">{selectedCareer}</p>
            <button
              onClick={() => {
                setCurrentStep("start");
                setSelectedCareer(null);
              }}
              className="mt-5 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentCareerQuiz;
