import React, { useEffect, useState } from 'react';
import './CardDetailContent.scss';
import Tag from './Tag/Tag';
import ReactionIcon from './ReactionIcon/ReactionIcon';

const CardDetailContents = () => {
  const [cardDetailContents, setcardDetailContents] = useState([]);
  const [tags, setTags] = useState([]);
  const [sympathys, setSympathys] = useState([]);

  //데이터 fetch
  useEffect(() => {
    fetch('/data/cardDetailContentData.json')
      .then(res => res.json())
      .then(res => {
        setcardDetailContents(res.data[0]);
        setTags(res.data[0].tag);
        setSympathys(res.data[0].Sympathy);
      });
  }, []);

  return (
    <>
      <div className="detail-out-wrapper">
        <div className="detail-header-wrapper">
          <div className="detail-title-wrapper">
            <h3 className="detail-title">{cardDetailContents.title}</h3>
          </div>
          <span className="detail-writer-by">by</span>
          <span className="detail-writer-nickname">
            {cardDetailContents.kor_name}
          </span>
          <span className="detail-date">{cardDetailContents.WPca}</span>
          <span className="detail-inquiry-count">
            조회수{cardDetailContents.view_count}
          </span>
        </div>
        <div className="detail-content-wrapper">
          <div className="detail-content-pictures">
            <img src={cardDetailContents.upload_url} alt="" />
          </div>
          <div className="detail-tag-wrapper">
            {tags.map(tag => {
              return <Tag key={tag.id} tagName={tag.tagName} />;
            })}
          </div>
          <div className="detail-copy-right">
            Copyright © azulado All Rights Reserved.
          </div>
        </div>
        <div className="detail-reaction-wrapper">
          {sympathys.map(sympathy => {
            return (
              <ReactionIcon
                key={sympathy.id}
                icon={sympathy.icon}
                emotion={sympathy.emotion}
                count={sympathy.count}
              />
            );
          })}
        </div>
        <hr />
        <div className="detail-reply-wrapper">
          <span className="detail-reply-reaction-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1062/1062573.png"
              alt=""
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/1694/1694963.png"
              alt=""
            />
          </span>
          <span className="detail-reply-reaction-count">
            {cardDetailContents.Sympathy_count}
          </span>
          <span className="detail-reply-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6460/6460733.png"
              alt=""
            />
          </span>
          <span className="detail-reply-count">
            {cardDetailContents.comments_count}
          </span>
          <span className="detail-reply-add-btn">▽</span>
        </div>
      </div>
    </>
  );
};

export default CardDetailContents;
