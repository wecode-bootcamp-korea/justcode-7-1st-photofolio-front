import React from 'react';
import css from './Header.module.scss';

function Header() {
  return (
    <header>
      <div className={css.headerContainer}>
        <div className={css.headerMenu}>
          <span className={css.titleLogo}>PHOTOFOLIO</span>
          <ul>
            {/* <li>피드</li> */}
            <li>작품</li>
            <li>배경화면</li>
            <li>스토리</li>
            <li>콜라보레이션</li>
          </ul>
        </div>
        <div className={css.headerRight}>
          <input type="input" className={css.searchInput} />
          <button className={css.headerBtn}>로그인</button>
          {/* <button className={css.uploadBtn + ' ' + css.headerBtn}>
            업로드
          </button>
          <div className={css.headerProfileImg}></div> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
