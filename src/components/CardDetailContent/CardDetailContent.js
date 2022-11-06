import React, { useEffect, useState } from 'react';
import './CardDetailContent.scss';
import Tag from './Tag/Tag';
import ReactionIcon from './ReactionIcon/ReactionIcon';

const CardDetailContent = () => {
  const [tagArray, setTagArray] = useState([]);
  const [reactionIconArray, setReactionIconArray] = useState([]);

  //태그 데이터 fetch
  useEffect(() => {
    fetch('/data/tagData.json')
      .then(res => res.json())
      .then(res => setTagArray(res.data));
  }, []);

  //공감 데이터 fetch
  useEffect(() => {
    fetch('/data/reactionData.json')
      .then(res => res.json())
      .then(res => setReactionIconArray(res.data));
  }, []);

  return (
    <>
      <div className="detail-out-wrapper">
        <div className="detail-header-wrapper">
          <div className="detail-title-wrapper">
            <h3 className="detail-title">Moonblue🌌🌙🌿</h3>
          </div>
          <span className="detail-writer-by">by</span>
          <span className="detail-writer-nickname">azulado</span>
          <span className="detail-date">오늘</span>
          <span className="detail-inquiry-count">조회수110</span>
        </div>
        <div className="detail-content-wrapper">
          <div className="detail-content-pictures">
            <img
              src="https://images.unsplash.com/photo-1514897575457-c4db467cf78e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
          <div className="detail-tag-wrapper">
            {tagArray.map(tag => (
              <Tag key={tag.id} tagName={tag.tagName} />
            ))}
          </div>
          <div className="detail-copy-right">
            Copyright © azulado All Rights Reserved.
          </div>
        </div>
        <div className="detail-reaction-wrapper">
          {reactionIconArray.map(reaction => (
            <ReactionIcon
              key={reaction.id}
              icon={reaction.icon}
              emotion={reaction.emotion}
              count={reaction.count}
            />
          ))}
        </div>
        <hr />
        <div className="detail-reply-wrapper">
          <span className="detail-reply-reaction-icon">
            <img
              src="https://images.unsplash.com/photo-1503939313441-d753b6c7eb91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1535056992305-dc3a53c22241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              alt=""
            />
          </span>
          <span className="detail-reply-reaction-count">28</span>
          <span className="detail-reply-icon">
            <img
              src="https://images.unsplash.com/photo-1477005264461-b0e201668d92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </span>
          <span className="detail-reply-count">1</span>
          <span className="detail-reply-add-btn">▽</span>
        </div>
      </div>
    </>
  );
};

export default CardDetailContent;
