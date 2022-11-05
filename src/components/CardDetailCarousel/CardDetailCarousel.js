import React, { useEffect, useState } from 'react';
import './CardDetailCarousel.scss';

const CardDetailCarousel = () => {
  const [info, setInfo] = useState({});
  const [works, setWorks] = useState([]);
  const [followers, setFollowers] = useState([]);

  //클릭 여부 확인
  const [isClick, setIsClick] = useState(true);

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

  return (
    <div className="cardDetailInfoCarousel">
      <div className="writerInfo">
        <div className="writerInfoLeft">
          <div className="writerInfoImg">
            <img src={info.profile_img} alt="작가프로필이미지" />
          </div>
          <div className="writerInfoText">
            <h3>{info.name}</h3>
            <h3>{info.nickname}</h3>
            <div className="writerInfoTextDiv">
              <span className="writersFollow">
                팔로워<span>{info.followersCount}</span>
              </span>
              <span className="writersFollow">
                팔로잉<span>{info.followingsCount}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="followBtn">
          {info.isFollow ? (
            <div className="followingBtn">팔로잉</div>
          ) : (
            <div className="followBtn">팔로우</div>
          )}
        </div>
      </div>
      {/* Carousel */}
      <div className="otherWorksCarousel">
        <h3>이 크리에이터의 다른 작품</h3>
        <span>{info.worksCount}</span>
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
