import React, { Fragment } from 'react';
import './SearchBar.scss';

const SearchBar = () => {
  return (
    <Fragment>
      <div className="searchKeyWordBar">
        <div className="searchKeyWord">
          <input type="text" placeholder="검색어를 입력해주세요." />
        </div>
      </div>
    </Fragment>
  );
};

export default SearchBar;
