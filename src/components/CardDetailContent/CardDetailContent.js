import React, { useEffect, useState } from 'react';
import './CardDetailContent.scss';
import Tag from './Tag/Tag';
import Reply from './Reply/Reply';
import { Link } from 'react-router-dom';

const CardDetailContents = () => {
  const [cardDetailContents, setcardDetailContents] = useState([]);
  const [tags, setTags] = useState([]); //태크
  const [sympathys, setSympathys] = useState([]); //공감
  const [isClick, setIsClick] = useState(false); // 댓글꺽쇠
  const [reply, setReply] = useState(''); //댓글
  const [replyArray, setReplyArray] = useState([]); //댓글배열

  //데이터 fetch
  useEffect(() => {
    fetch('/data/cardDetailContentData.json')
      .then(res => res.json())
      .then(res => {
        setcardDetailContents(res.data[0]);
        setTags(res.data[0].tag);
        setSympathys(res.data[0].Sympathy[0]);
        setReplyArray(res.data[0].Comment);
      });
  }, []);

  //아이콘 변경 함수
  const iconChange = () => {
    if (isClick === true) {
      setIsClick(false);
    } else {
      setIsClick(true);
    }
  };

  //댓글 추가 함수
  let addComment = e => {
    const copyReplyArray = [...replyArray];
    copyReplyArray.push(reply);
    setReplyArray(copyReplyArray);
    setReply('');
  };
  console.log(replyArray);

  return (
    <div>
      <div className="detail-out-wrapper">
        <div className="detail-header-wrapper">
          <div className="detail-title-wrapper">
            <h3 className="detail-title">{cardDetailContents.title}</h3>
          </div>
          <span className="detail-writer-by">by</span>
          <button className="detail-writer-nickname">
            <Link to="/channel">{cardDetailContents.kor_name}</Link>
          </button>
          <span className="detail-date">{cardDetailContents.WPca}</span>
          <span className="detail-inquiry-count">
            조회수{cardDetailContents.view_count}
          </span>
        </div>
        <div className="detail-content-wrapper">
          <div className="detail-content-pictures">
            <img src={cardDetailContents.upload_url} alt="" />
          </div>
          {/* 태그 컴포넌트 */}
          <div className="detail-tag-wrapper">
            {tags.map(tag => {
              return <Tag key={tag.id} tagName={tag.tagName} />;
            })}
          </div>
          <div className="detail-copy-right">
            Copyright © {cardDetailContents.kor_name} All Rights Reserved.
          </div>
        </div>
        {/* 공감 */}
        <div className="detail-reaction-wrapper">
          <div className="detail-reaction-inner-wrapper">
            <div className="detail-reaction-icon-wrapper">
              <button className="detail-icon">
                <img src={sympathys.icon} alt="" />
              </button>
            </div>
            <div className="detail-reaction-icon-second-wrapper">
              <div className="detail-reaction-icon-title-wrapper">
                <div className="detail-icon-title">{sympathys.emotion}</div>
              </div>
              <div className="detail-reaction-icon-count-wrapper">
                <div className="detail-icon-count">{sympathys.count}</div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="detail-reply-out-wrapper">
          <div className="detail-reply-wrapper">
            <span className="detail-reply-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6460/6460733.png"
                alt=""
              />
            </span>
            <span className="detail-reply-count">
              {cardDetailContents.replyArray_count}
            </span>
            <button className="detail-reply-add-btn" onClick={iconChange}>
              {isClick === true ? (
                <img
                  className="detail-reply-add-btn-down"
                  src="https://cdn-icons-png.flaticon.com/512/130/130906.png"
                  alt=""
                />
              ) : (
                <img
                  className="detail-reply-add-btn-up"
                  src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png"
                  alt=""
                />
              )}
            </button>
          </div>
        </div>
        <div className="detail-reply-input-out-wrapper">
          <div className="detail-reply-input-wrapper">
            <div className="detail-reply-input-inner-wrapper">
              <div className="detail-reply-title">혜선</div>
              <div className="detail-reply-text-area-wrapper">
                {localStorage.getItem('token') ? (
                  <textarea
                    type="text"
                    placeholder="주제와 무관한 댓글, 악플은 삭제될 수 있습니다."
                    onClick={e => {
                      setReply(e.target.value);
                    }}
                  />
                ) : (
                  <textarea
                    type="text"
                    placeholder="댓글을 작성하려면 로그인 해주세요."
                    onClick={e => {
                      setReply(e.target.value);
                    }}
                  />
                )}
              </div>
              <div className="detail-reply-text-limit">0/1000</div>
            </div>
            <div className="detail-reply-apload-btn">
              <button onClick={addComment}>등록</button>
            </div>
          </div>
          <div className="detail-reply-list">
            {/* 댓글 컴포넌트 */}
            {replyArray.map(comment => {
              return (
                <Reply
                  key={comment.id}
                  writer={comment.writer}
                  content={comment.content}
                  regidate={comment.regidate}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailContents;
