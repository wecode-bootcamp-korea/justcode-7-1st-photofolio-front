import React, { Fragment, useEffect, useRef, useState } from 'react';
import './SearchBar.scss';

const SearchBar = () => {
  const [content, setContent] = useState();
  const nowContent = useRef();
  const handleKeyUp = e => {
    if (e.key === 'Enter') {
      console.log('검색!');
    } else {
      setContent(nowContent.current.innerText);
      console.log('content : ', content);
    }
  };
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
        </div>
      </div>
    </Fragment>
  );
};

export default SearchBar;
