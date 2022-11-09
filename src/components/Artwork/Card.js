import React from 'react';
import { useNavigate } from 'react-router-dom';
import './card.scss';

function Card({
  id,
  nickname,
  profile_image,
  img_url,
  title,
  view_count,
  created_at,
}) {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/works/${id}`);
      }}
    >
      {/* style={{ backgroundImage: `url(${img_url})` }} */}
      <div className="cardImg" />
      <div className="cardTitle">
        <span className="cardTitleSpan">{title}</span>
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
        <span>{view_count}</span>
        <span>id {id}</span>
      </div>
    </div>
  );
}

export default Card;
