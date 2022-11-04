import React, { useEffect, useState } from 'react';
import './CardDetailCarousel.scss';

const CardDetailCarousel = () => {
  const [info, setInfo] = useState({});
  const [followersCount, setFollowersCount] = useState(0);
  const [followings, setFollowings] = useState(0);
  useEffect(() => {
    fetch('/data/cardDetailWriterInfo.json')
      .then(res => res.json())
      .then(json => {
        setInfo(json.data[0]);
        setFollowersCount(json.data[0].followers.length);
        setFollowings(json.data[0].followings.length);
      });
  }, []);

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
                팔로워<span>{followersCount}</span>
              </span>
              <span className="writersFollow">
                팔로잉<span>{followings}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="followingBtn">팔로우</div>
      </div>
      <div className="otherWorksCarousel"></div>
    </div>
  );
};

export default CardDetailCarousel;
