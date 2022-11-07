import React, { useRef, useState, useEffect } from 'react';
import './uploadWrite.scss';

function App() {
  function clickUploadBtn(event) {
    console.log(event.target.title);
    console.log(event.target.content);
    console.log(event.target.tag);
  }

  return (
    <div>
      <div className="uploadWriteForm">
        <input name="title" className="uploadWriteTitle"></input>
        <textarea name="content" className="uploadWriteContent"></textarea>
        <input name="tag" className="uploadWriteTag"></input>
        <button className="uploadBtn" onClick={clickUploadBtn}>
          버튼
        </button>
      </div>
    </div>
  );
}

export default App;
