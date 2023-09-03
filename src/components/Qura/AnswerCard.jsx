import React from "react";
import profilePng from "../../Assets/Profile.png";
const AnswerCard = ({ answer }) => {
  return (
    <div className="ansCard">
      <div className="userInfo">
        <img src={profilePng} alt="User" />
        <p> {answer.name}</p>
      </div>
      <span className="ansCardComment"><p>Solution.</p>{answer.comment}</span>
    </div>
  );
};

export default AnswerCard;
