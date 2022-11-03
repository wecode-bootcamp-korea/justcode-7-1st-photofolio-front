import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './Header.module.scss';

function Header() {
  //로그인 여부 체크
  const [isLogin, setIsLogin] = useState(false);

  //프로필 이미지 hover 여부 체크
  const [isHovering, setIsHovering] = useState(false);

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

  //프로필 이미지 hover 함수
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  //메뉴 클릭 시 페이지 이동을 위한 useNavigate
  const navigate = useNavigate();

  return (
    <header>
      <div className={css.headerContainer}>
        <div className={css.headerMenu}>
          <span
            className={css.titleLogo}
            onClick={() => {
              isLogin === true ? navigate('/feeds') : navigate('/works');
            }}
          >
            PHOTOFOLIO
          </span>
          <ul>
            {isLogin === true && (
              <li
                onClick={() => {
                  navigate('/feeds');
                }}
              >
                피드
              </li>
            )}
            <li
              onClick={() => {
                navigate('/works');
              }}
            >
              작품
            </li>
            <li>배경화면</li>
            <li>스토리</li>
            <li>콜라보레이션</li>
          </ul>
        </div>
        <div className={css.headerRight}>
          <input type="input" className={css.searchInput} />
          {isLogin === false ? (
            <button
              className={css.headerBtn}
              onClick={() => {
                navigate('/user/login');
              }}
            >
              로그인
            </button>
          ) : (
            <>
              <button
                className={css.uploadBtn + ' ' + css.headerBtn}
                onClick={() => {
                  navigate('/upload');
                }}
              >
                업로드
              </button>
              <div
                className={css.mouseHover}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <div
                  className={css.headerProfileImg}
                  onClick={() => {
                    navigate('/myChannel');
                  }}
                />
                <div className={isHovering ? css.headerProfileMenu : css.hide}>
                  <ul>
                    <li
                      onClick={() => {
                        navigate('/accountInfo');
                      }}
                    >
                      포토폴리오 MY
                    </li>
                    <li
                      onClick={() => {
                        localStorage.removeItem('token');
                        window.location.href = 'http://localhost:3000/works';
                      }}
                    >
                      로그아웃
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
