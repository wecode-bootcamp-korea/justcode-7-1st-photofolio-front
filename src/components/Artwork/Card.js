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
      <div
        className="cardImg"
        style={{ backgroundImage: `url(${img_url})`, backgroundSize: 'cover' }}
      />
      <div className="cardTitle">
        <span className="cardTitleSpan">{title}</span>
        <div className="cardProfileDiv">
          <span>{nickname}</span>
        </div>
      </div>
      <div className="cardValue">
        <div className="cardValueMargin">
          <div>
            <img src="" alt="" />
            <span>좋아요수</span>
          </div>
          <div>
            <img src="" alt="" />
            <span>댓글수</span>
          </div>
          <div>
            <img src="" alt="" />
            <span>{view_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
