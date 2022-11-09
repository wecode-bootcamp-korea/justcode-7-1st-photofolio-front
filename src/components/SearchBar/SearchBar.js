import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SearchBar.scss';

const SearchBar = ({ resultCount }) => {
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  //엔터키 눌렀을 때 검색기능 실행
  const search = e => {
    if (e.key === 'Enter') {
      let url = '/searchlist?query=' + content;
      navigate(url);
    } else {
      setContent(e.target.value);
    }
  };

  //x버튼 클릭 시 input내용 reset
  const resetInput = () => {
    setContent('');
  };

  //url에서
  const location = useLocation();
  let params = new URLSearchParams(location.search);
  let query = params.get('query'); //구름
  useEffect(() => {}, []);
  return (
    <Fragment>
      <div className="searchKeyWordBar">
        <div className="searchKeyWord">
          <div className="searchLogoImg" />
          <input
            className="searchinput"
            placeholder="검색어를 입력해주세요."
            onKeyUp={search}
            defaultValue={content}
          />
          <button
            className={
              query === content ? 'inputResetBtn' : 'inputResetBtn blind'
            }
            onClick={resetInput}
          />
        </div>
      </div>
      <div className="count">
        <span>작품 검색 결과: </span>
        <span className="workCnt">{resultCount}</span>
        <span>건</span>
      </div>
    </Fragment>
  );
};

export default SearchBar;