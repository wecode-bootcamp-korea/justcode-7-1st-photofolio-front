import React from 'react';
import './categoryModal.scss';

function App({ setCategoryState, setCategory_name }) {
  function checkCategory(event) {
    setCategory_name(event.target.value);
    setCategoryState(false);
  }
  return (
    <div className="categoryModal" onChange={checkCategory}>
      <div className="leftRadio">
        <label>
          <input type="radio" name="category" value="일러스트"></input>일러스트
        </label>
        <label>
          <input type="radio" name="category" value="회화"></input>회화
        </label>
        <label>
          <input type="radio" name="category" value="조소/공예"></input>
          조소/공예
        </label>
        <label>
          <input type="radio" name="category" value="캘리그라피"></input>
          캘리그라피
        </label>
        <label>
          <input type="radio" name="category" value="애니메이션"></input>
          애니메이션
        </label>
      </div>
      <div className="rightRadio">
        <label>
          <input type="radio" name="category" value="사진"></input>사진
        </label>
        <label>
          <input type="radio" name="category" value="사운드"></input>사운드
        </label>
        <label>
          <input type="radio" name="category" value="디자인"></input>디자인
        </label>
        <label>
          <input type="radio" name="category" value="그림책"></input>그림책
        </label>
      </div>
    </div>
  );
}

export default App;
