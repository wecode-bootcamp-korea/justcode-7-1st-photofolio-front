import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ChanelCardList from '../Artwork/ChanelCardList/ChanelCardList';
import Join from '../Join/Join';
import Login from '../Login/Login';
import './Channel.scss';

const Channel = () => {
  const [channelInfo, setChannelInfo] = useState(''); //계정정보
  const [isFollow, setIsFollow] = useState(0); //팔로잉 상태관리
  const result = localStorage.getItem('id') === channelInfo.id;

  //login창 로직 추가 코드
  const [openLoginpage, setOpenLoginPage] = useState(false);
  const [openJoinPage, setJoinPage] = useState(false);

  //로그인 모달창 닫기
  function closeLoginpage() {
    setOpenLoginPage(false);
  }
  //로그인 하지 않았을 시
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
          following_id: channelInfo.id,
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
          following_id: channelInfo.id,
        }),
      })
        .then(res => res.json())
        .then(json => {});
    }
  };

  //목데이터 fetch
  useEffect(() => {
    fetch('data/channelInfoData.json')
      .then(res => res.json())
      .then(result => setChannelInfo(result.data[0]));
  }, []);

  return (
    <>
      {openLoginpage && (
        <Login
          closeLoginpage={closeLoginpage}
          setJoinPage={setJoinPage}
          setOpenLoginPage={setOpenLoginPage}
        />
      )}
      {openJoinPage && <Join setJoinPage={setJoinPage} />}
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
                {localStorage.getItem('id') === channelInfo.user_id ? (
                  <button className="channel-account-info-me-btn">
                    <Link to="/accountInfo" style={{ color: '#00d084' }}>
                      계정정보 수정
                    </Link>
                  </button>
                ) : (
                  <div className="followBtns" onClick={handleToggle}>
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
                <hr />
              </div>
              {/* 작품 데이터가 있다면 */}
              {<ChanelCardList /> ? (
                // 작품 리스트를 보여줌
                <div className="channel-feed-text">
                  <ChanelCardList />
                </div>
              ) : // 작품 데이터가 없다면, 현재 로그인 한 사람과 같은지 다른 사람인지 체크
              result ? (
                <div className="channel-feed-text">
                  등록된 작품이 없습니다. <br />
                  <button className="channel-feed-upload-btn">
                    <Link to="/upload">업로드 </Link>
                  </button>
                </div>
              ) : (
                <div className="channel-feed-text">등록된 작품이 없습니다.</div>
              )}
            </div>
            {/* 맞춤형 footer */}
            <footer className="footerContainer">
              <div className="footerAlign">
                <div className="footerText">
                  <span>이용약관</span>
                  <span>개인정보 처리방침</span>
                  <span>ⓒ Photofolio.</span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Channel;
