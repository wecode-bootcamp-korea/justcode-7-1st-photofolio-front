import React, { useRef, useState, useEffect } from 'react';
import './uploadModal.scss';

function App() {
  return (
    <div className="uploadModalMain">
      <div className="ModalSelectDiv">
        <div className="categorySelect">
          <span>분야</span>
          {/* 모달창 */}
        </div>
        <div className="colabolateSelect">
          <span>콜라보레이션(선택)</span>
          {/* 모달창 */}
        </div>
        <div className="lisenceSelect">
          <span>CC라이선스</span>
          {/* 모달창 */}
        </div>
      </div>
      <div className="radioSelectDiv">
        <div className="commentRadioDiv">
          <input id="comment" type="radio"></input>
          <ladel for="comment">허용</ladel>
        </div>
        <div className="openRadioDiv">
          <input id="open" type="radio"></input>
          <ladel for="open">공개 설정</ladel>
        </div>
      </div>
    </div>
  );
}

export default App;
