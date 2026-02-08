import React from 'react';
import ProgressBar from '../../Components/ProgressBar';
import chosenCharacter from "../../Pages/CharactersPage/CharactersPage";


const ChatMessage = ({
  sender,
  message,
}: {
  sender: string;
  message: string;
}) => {
  return (
    <div className="flex gap-6 text-sm">
      <span className="w-16 text-gray-600">{sender}</span>
      <p className="text-gray-800">{message}</p>
    </div>
  );
};

const InterviewPage=()=>
{
    return(
        <div>
            <ProgressBar currentStep="feedback" />
            <img id="interview-character" className="h-[30vh] rounded-[50%]" src={chosenCharacter}></img>
            <p id="interview-summary">Interview Summary:<br/></p>
        </div>
    );
}

export default InterviewPage;