import React, { useEffect, useState } from 'react';
import './CardDetailCarousel.scss';
import Login from '../Login/Login';
import Join from '../Join/Join';

const CardDetailCarousel = () => {
  const [info, setInfo] = useState({});
  const [works, setWorks] = useState([]);
  const [followers, setFollowers] = useState([]);

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

  useEffect(() => {
    fetch('/data/cardDetailWriterInfo.json')
      .then(res => res.json())
      .then(json => {
        setInfo(json.data[0]);
        setWorks(json.data[0].works);
        setFollowers(json.data[0].followers);
      });
  }, []);

  const handleRightClick = () => {
    setIsClick(true);
  };
  const handleLeftClick = () => {
    setIsClick(false);
  };

  //클릭 여부 확인
  const isFollowNow = info.isFollow;
  console.log(info);
  console.log('info.isFollow : ', info.isFollow);
  const [isClick, setIsClick] = useState(isFollowNow);

  const changeFollowBtn = () => {
    console.log('changeFollowBtn 실행!');
    // 팔로잉 되어있는 상태
    if (isClick === true) {
      console.log('if문 안 isClick : ', isClick);
      //isClick이 true면 하얀버튼 상태
      setIsClick(false);
      //fetch(백엔드에게 언팔로우 했다는 데이터 보내기) - DELETE / 작가id, 토큰
      return;
    } else {
      //isClick이 false이면 초록버튼 상태
      console.log('else문 안의 isClick : ', isClick);
      setIsClick(true);
      //fetch(백엔드에게 팔로우 했다는 데이터 보내기) - POST / 작가id, 토큰
      return;
    }
  };
  console.log('함수 밖에서 isClick================ : ', isClick);

  return (
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
        <div className="followBtn" onClick={changeFollowBtn}>
          {/* 로그인 한 상태이면서 팔로우한 상태에서만 팔로우 버튼 */}
          {isLogin ? (
            info.isFollow ? (
              <div className="followingBtn">팔로잉</div>
            ) : (
              <div className="followBtn">팔로우</div>
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
          <div
            className="otherWorksBtn otherWorksPrev"
            onClick={handleLeftClick}
          />
          <div className="otherWorksCarouselContainer">
            <ul>
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
          <div
            className="otherWorksBtn otherWorksNext"
            onClick={handleRightClick}
          />
        </div>
      </div>
    </div>
  );
};

export default CardDetailCarousel;
