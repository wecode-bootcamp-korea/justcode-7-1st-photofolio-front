import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SearchBar.scss';

const SearchBar = () => {
  const [content, setContent] = useState();
  const navigate = useNavigate();
  const nowContent = useRef();

  const handleKeyUp = e => {
    if (e.key === 'Enter') {
      let url = '/searchlist?query=' + content;
      navigate(url);
    } else {
      setContent(nowContent.current.innerText);
    }
  };
  const resetInput = () => {};
  const location = useLocation();
  useEffect(() => {
    setContent(decodeURI(location.search));
    nowContent.innerText = content;
  }, []);

  console.log(decodeURI(location.search)); //?query=구름
  //fetch로 데이터 받아와야 할 듯..
  return (
    <Fragment>
      <div className="searchKeyWordBar">
        <div className="searchKeyWord">
          <div className="searchLogoImg" />
          <div
            className="inputDiv"
            contentEditable="true"
            placeholder="검색어를 입력해주세요."
            ref={nowContent}
            onKeyUp={handleKeyUp}
          ></div>
          <button className="inputResetBtn" onClick={resetInput}>
            {/* ::before 들어갈 부분 */}
            <div className="beforeMark" />
          </button>
        </div>
      </div>
      <div className="count">
        <span>작품 검색 결과: </span>
        <span>15</span>
        <span>건</span>
      </div>
    </Fragment>
  );
};

export default SearchBar;
