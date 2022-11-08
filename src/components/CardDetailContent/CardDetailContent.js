import React, { useEffect, useRef, useState } from 'react';
import './CardDetailContent.scss';
import Tag from './Tag/Tag';
import Reply from './Reply/Reply';
import { Link, useNavigate, useParams } from 'react-router-dom';

const CardDetailContents = () => {
  const [cardDetailContents, setcardDetailContents] = useState([]);
  const [tags, setTags] = useState([]); //태크
  const [sympathys, setSympathys] = useState([]); //공감
  let [replyArray, setReplyArray] = useState([]); //댓글배열
  let [id, setId] = useState(1); //댓글의 id
  const value = useRef();
  const navigate = useNavigate();
  const params = useParams();
  console.log('p', params.id);

  //목데이터 fetch
  // useEffect(() => {
  //   fetch('/data/cardDetailContentData.json')
  //     .then(res => res.json())
  //     .then(res => {
  //       setcardDetailContents(res.data[0]);
  //       setTags(res.data[0].tag);
  //       setSympathys(res.data[0].Sympathy[0]);
  //       setReplyArray(res.data[0].Comment);
  //     });
  // }, []);

  //카드 상세페이지 정보 fetch
  useEffect(() => {
    fetch('http://localhost:8000/user/accountInfo' + params.id)
      .then(res => res.json())
      .then(res => {
        setcardDetailContents(res.data[0]);
        setTags(res.data[0].tag);
        setSympathys(res.data[0].Sympathy[0]);
        setReplyArray(res.data[0].Comment);
      });
  }, [params.id]);

  //댓글 추가 함수
  const addReply = () => {
    //현재날짜
    const date = new Date();
    //아이디 증가(겹치지 않게)
    setId(id + 1);
    const newReply = {
      writer: '혜선', //localStorage.getItem('kor_name'),
      id: id,
      content: value.current.value,
      regidate: date.toLocaleDateString('ko-kr'), //현재 날짜에서 연도 구하는 함수
    };
    setReplyArray([...replyArray, newReply]);
    value = '';
  };
  //새로운 배열에 reverse 배열 적용
  const reverseReplyArray = replyArray.reverse();

  //새로운 댓글 저장 fetch
  useEffect(() => {
    fetch('http://localhost:8000/user/accountInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        comment_id: replyArray.newReply(),
      },
    })
      .then(res => res.json())
      .then(res => setReplyArray(res.data));
  }, [replyArray]);

  //로그인하지 않았을 때 댓글창 누르면, 메인으로 이동
  const movePage = () => {
    alert('로그인한 다음 이용해 주세요.');
    navigate('/works');
  };

  return (
    <>
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
          </div>
        </div>
        <details>
          <summary></summary>
          <div className="detail-reply-input-out-wrapper">
            <div className="detail-reply-input-wrapper">
              <div className="detail-reply-input-inner-wrapper">
                <div className="detail-reply-title">
                  혜선
                  {/* {localStorage.getItem('kor_name')} */}
                </div>
                <div className="detail-reply-text-area-wrapper">
                  {localStorage.getItem('token') ? (
                    <textarea
                      type="text"
                      placeholder="주제와 무관한 댓글, 악플은 삭제될 수 있습니다."
                      ref={value}
                    />
                  ) : (
                    <textarea
                      type="text"
                      placeholder="댓글을 작성하려면 로그인 해주세요."
                      onClick={movePage}
                    />
                  )}
                </div>
                <div className="detail-reply-text-limit">최대 1000자</div>
              </div>
              <div className="detail-reply-apload-btn">
                <button onClick={addReply}>등록</button>
              </div>
            </div>
            <div className="detail-reply-list">
              {/* 댓글 컴포넌트 */}
              {reverseReplyArray.map(comment => {
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
        </details>
      </div>
    </>
  );
};

export default CardDetailContents;
