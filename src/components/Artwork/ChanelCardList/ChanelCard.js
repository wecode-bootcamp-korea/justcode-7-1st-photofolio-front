import React from 'react';
import './chanelCard.scss';

function Card() {
  return (
    <div className="chanelcard">
      <img className="chanelcardImg" src="" alt="" />
      <div className="chanelcardTitle">
        <span className="chanelcardTitleSpan">제목</span>
        <div>
          <img />
          <span>아이디</span>
        </div>
      </div>
      <div className="chanelcardValue">
        <img src="" alt="" />
        <span>좋아요수</span>
        <img src="" alt="" />
        <span>댓글수</span>
        <img src="" alt="" />
        <span>조회수.</span>
      </div>
    </div>
  );
}

export default Card;
