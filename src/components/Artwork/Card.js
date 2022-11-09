import React from 'react';
import { useNavigate } from 'react-router-dom';
import './card.scss';

function Card({ id }) {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/works/${id}`);
      }}
    >
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
