import { useEffect, useState } from 'react';
import CardList from '../Artwork/CardList';
import './Channel.scss';

const Channel = () => {
  const [channelInfo, setChannelInfo] = useState('');

  //목데이터 fetch
  useEffect(() => {
    fetch('data/channelInfoData.json')
      .then(res => res.json())
      .then(result => setChannelInfo(result.data));
  }, []);
  console.log(channelInfo);
  console.log(channelInfo.type);

  return (
    <>
      <div className="channel-out-wrapper">
        <div className="channel-content-wrapper">
          <div className="channel-content-left-wrapper">
            <div className="channel-content-left-left">
              <div className="channel-user-ko_name">{channelInfo.kor_name}</div>
              {channelInfo.eng_name ? (
                <div className="channel-user-eng_name">
                  ({channelInfo.eng_name})
                </div>
              ) : (
                ''
              )}
              <div className="channel-nickname">{channelInfo.nickname}</div>
              <span className="channel-followers">팔로워</span>
              <span className="channel-followers-count">
                {channelInfo.followers_count}
              </span>
              <span className="channel-following">팔로잉</span>
              <span className="channel-following-count">
                {channelInfo.following_count}
              </span>
              <div className="channel-account-info-btn-wrapper">
                {channelInfo.type === 'me' ? (
                  <button className="channel-account-info-me-btn">
                    계정정보 수정
                  </button>
                ) : (
                  <button className="channel-account-info-artist-btn">
                    팔로우
                  </button>
                )}
              </div>
            </div>
            <div className="channel-content-left-right">
              <div className="channel-profile">
                {channelInfo.profile_image ? (
                  <img
                    name="profile_image"
                    src={channelInfo.profile_image}
                    alt=""
                  />
                ) : (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                    alt=""
                  />
                )}
              </div>
            </div>
          </div>
          <div className="channel-content-right-wrapper">
            <div className="channel-content-inner-right-wrapper">
              <div className="channel-content-right-menu">
                작품 {channelInfo.photos_count}
              </div>
              <hr />
              {/* {<CardList /> ? (
                <div className="channel-feed-content">
                  <CardList />
                </div>
              ) : ( */}
              <div className="channel-feed-text">
                등록된 작품이 없습니다. <br />
                <button className="channel-feed-upload-btn">
                  <img src="./../../../public/images/upload.png" alt="" />{' '}
                  업로드
                </button>
              </div>
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Channel;
