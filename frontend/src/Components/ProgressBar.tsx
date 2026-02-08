import React from "react";
type Step = "question" | "interview" | "feedback";

interface ProgressProps {
  currentStep: Step;
}

const ProgressBar: React.FC<ProgressProps> = ({ currentStep }) => {
  const steps: { key: Step; label: string }[] = [
    { key: "question", label: "Question" },
    { key: "interview", label: "Interview" },
    { key: "feedback", label: "Feedback" },
  ];

  const getStepIndex = (step: Step) =>
    steps.findIndex((s) => s.key === step);

  const currentIndex = getStepIndex(currentStep);

  return (
    <div className="w-full flex justify-center mt-6">
      <div className="flex items-center w-[500px]">
        {steps.map((step, index) => (
          <React.Fragment key={step.key}>
            {/* Circle */}
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2 text-gray-600">
                {step.label}
              </span>

              <div
                className={`w-6 h-6 rounded-full border-2 
                ${
                  index <= currentIndex
                    ? "bg-blue border-blue"
                    : "bg-gray-300 border-gray-300"
                }`}
              />
            </div>

            {/* Line */}
            {index !== steps.length - 1 && (
              <div
                className={`flex-1 h-[2px] mx-2 
                ${
                  index < currentIndex
                    ? "bg-blue"
                    : "bg-gray-300"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;