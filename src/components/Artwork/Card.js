import React from 'react';
import './card.scss';

function Card({ id }) {
  return (
    <div className="card">
      <img className="cardImg" src="" alt="" />
      <div className="cardTitle">
        <span className="cardTitleSpan">제목</span>
        <div>
          <img />
          <span>아이디</span>
        </div>
      </div>
      <div className="cardValue">
        <img src="" alt="" />
        <span>좋아요수</span>
        <img src="" alt="" />
        <span>댓글수</span>
        <img src="" alt="" />
        <span>조회수.</span>
        <span>id {id}</span>
      </div>
    </div>
  );
}

export default Card;
