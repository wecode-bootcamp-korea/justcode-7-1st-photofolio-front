import './Channel.scss';

const Channel = () => {
  return (
    <>
      <div className="channel-out-wrapper">
        <div className="channel-content-wrapper">
          <div className="channel-content-left-wrapper">
            <div className="channel-content-left-left">
              <div className="channel-user-name">혜선</div>
              <div className="channel-country">대한민국</div>
              <span className="channel-followers">팔로워</span>
              <span className="channel-followers-count">0</span>
              <span className="channel-following">팔로잉</span>
              <span className="channel-following-count">0</span>
              <div className="channel-account-info-btn-wrapper">
                <button className="channel-account-info-btn">
                  계정정보 수정
                </button>
              </div>
            </div>
            <div className="channel-content-left-right">
              <div className="channel-profile">
                <img src="https://cdn-icons-png.flaticon.com/512/1246/1246351.png?w=740&t=st=1667231824~exp=1667232424~hmac=19ddad3472728fc0f58e61b40166e12088243b88bca1961ea21993f1930e0d92" />
              </div>
            </div>
          </div>
          <div className="channel-content-right-wrapper">
            <div className="channel-content-inner-right-wrapper">
              <div className="channel-content-right-menu">작품 0</div>
              <hr />
              <div className="channel-feed-text">등록된 작품이 없습니다.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Channel;
