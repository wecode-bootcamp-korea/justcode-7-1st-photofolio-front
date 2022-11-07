import React, { useEffect, useState, useRef } from 'react';
import './CardDetailCarousel.scss';
import Login from '../Login/Login';
import Join from '../Join/Join';

const CardDetailCarousel = () => {
  const [info, setInfo] = useState({});
  const [works, setWorks] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [isFollow, setIsFollow] = useState(0);

  //login창 로직 추가 코드
  const [openLoginpage, setOpenLoginPage] = useState(false);
  const [openJoinPage, setJoinPage] = useState(false);
  function closeLoginpage() {
    setOpenLoginPage(false);
  }
  function clickLoginBtn(event) {
    alert('로그인한 다음 이용해 주세요.');
    setOpenLoginPage(true);
  }

  //로그인 여부 확인
  const [isLogin, setIsLogin] = useState(false);

  //localStorage에 token 유무 체크
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      setIsLogin(true);
      return;
    } else if (!token) {
      setIsLogin(false);
      return;
    }
  }, [token]);

  //페이지 첫 렌더링 시 데이터 불러오기
  useEffect(() => {
    fetch('/data/cardDetailWriterInfo.json')
      .then(res => res.json())
      .then(json => {
        setInfo(json.data[0]);
        setWorks(json.data[0].works);
        setFollowers(json.data[0].followers);
        setIsFollow(json.data[0].isFollow);
      });
  }, []);

  //클릭 여부 확인
  const [isClick, setIsClick] = useState(isFollow);
  const handleToggle = () => {
    setIsClick(!isClick);
  };

  //팔로우,언팔로우 함수
  const sendResult = e => {
    if (e.target.className === 'followBtn') {
      //POST 작가id, 토큰
      fetch('http://localhost:8000/works/following', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
        body: JSON.stringify({
          following_id: info.id,
        }),
      })
        .then(res => res.json())
        .then(json => {});
    } else if (e.target.className === 'followingBtn') {
      //DELETE 작가id, 토큰
      fetch('http://localhost:8000/works/following-cancel', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
        body: JSON.stringify({
          following_id: info.id,
        }),
      })
        .then(res => res.json())
        .then(json => {});
    }
  };
  console.log(info.id);

  return (
    <>
      <div className="wideBorder"></div>
      <div className="cardDetailInfoCarousel">
        {/* login창 로직 추가 코드 */}
        {openLoginpage && (
          <Login
            closeLoginpage={closeLoginpage}
            setJoinPage={setJoinPage}
            setOpenLoginPage={setOpenLoginPage}
          />
        )}
        {openJoinPage && <Join setJoinPage={setJoinPage} />}
        {/* login창 로직 추가 코드 종료*/}
        <div className="writerInfo">
          <div className="writerInfoLeft">
            <div className="writerInfoImg">
              <img src={info.profile_img} alt="작가프로필이미지" />
            </div>
            <div className="writerInfoText">
              <h3>{info.kor_name}</h3>
              <h3>{info.eng_name}</h3>
              <div className="writerInfoTextDiv">
                <span className="writersFollow">
                  팔로워<span>{info.followers_count}</span>
                </span>
                <span className="writersFollow">
                  팔로잉<span>{info.followings_count}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="followBtns" onClick={handleToggle}>
            {/* 
            로그인 한 상태이면서 팔로우한 상태에서만 팔로잉 버튼 
            1 : 팔로잉 되어있는 상태 (하얀 버튼)
            0 : 팔로잉 되어있지 않은 상태 (초록 버튼)
            */}
            {isLogin ? (
              isFollow === 1 ? (
                <div
                  className={isClick ? 'followBtn' : 'followingBtn'}
                  onClick={sendResult}
                >
                  {isClick ? '팔로우' : '팔로잉'}
                </div>
              ) : (
                <div
                  className={isClick ? 'followingBtn' : 'followBtn'}
                  onClick={sendResult}
                >
                  {isClick ? '팔로잉' : '팔로우'}
                </div>
              )
            ) : (
              <div className="followBtn" onClick={clickLoginBtn}>
                팔로우
              </div>
            )}
          </div>
        </div>
        {/* Carousel */}
        <div className="otherWorksCarousel">
          <h3>이 크리에이터의 다른 작품</h3>
          <span>{info.works_count}</span>
          <div className="otherWorkBtnContainer">
            <div className="otherWorksBtn otherWorksPrev" />
            <div className="otherWorksCarouselContainer">
              <ul className="goToLeft">
                {works.map(work => {
                  return (
                    <li className="otherWorksItem" key={work.id}>
                      <div className="otherWorksImg">
                        <img src={work.image} alt={work.title} />
                      </div>
                      <div className="otherWorksTitle">{work.title}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="otherWorksBtn otherWorksNext" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetailCarousel;
