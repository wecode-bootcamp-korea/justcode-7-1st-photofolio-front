import React, { useRef, useState, useEffect } from 'react';
import './uploadModal.scss';
import CategoryModal from './CategoryModal';

function App({
  setuploadModalState,
  setCategory_name,
  setPublic_status,
  startFetch,
}) {
  const [categoryState, setCategoryState] = useState(false);

  function clickCencleBtn(event) {
    event.preventDefault();
    setuploadModalState(false);
  }

  function clickCategoryModal() {
    if (categoryState === false) setCategoryState(true);
    if (categoryState === true) setCategoryState(false);
  }

  function checkComment(event) {
    console.log(event.target.value);
  }

  function checkOpen(event) {
    setPublic_status(event.target.value);
  }

  return (
    <div className="uploadModalMain">
      <div className="uploadModalMainMaiginDiv">
        <div className="ModalSelectDiv">
          <div className="categorySelect">
            <span>분야</span>
            <div className="modalOpenBox" onClick={clickCategoryModal}></div>
            {categoryState && (
              <CategoryModal
                setCategoryState={setCategoryState}
                setCategory_name={setCategory_name}
              />
            )}
          </div>
          <div className="colabolateSelect">
            <span>콜라보레이션(선택)</span>
            <div className="modalOpenBox"></div>
          </div>
          <div className="lisenceSelect">
            <span>CC라이선스</span>
            <div className="modalOpenBox"></div>
          </div>
        </div>
        <div className="radioSelectDiv">
          <div className="commentRadioDiv">
            <span>댓글</span>
            <div className="commentRadioDivInput" onChange={checkComment}>
              <ladel>
                <input name="comment" type="radio" value="허용"></input>
                허용
              </ladel>
              <ladel>
                <input name="comment" type="radio" value="비허용"></input>
                비허용
              </ladel>
            </div>
          </div>
          <div className="openRadioDiv" onChange={checkOpen}>
            <span>공개설정</span>
            <div className="openRadioDivInput">
              <ladel>
                <input name="open" type="radio" value="public" />
                공개
              </ladel>
              <ladel>
                <input name="open" type="radio" value="private" />
                비공개
              </ladel>
              <ladel>
                <input name="open" type="radio" value="reservation" />
                예약
              </ladel>
            </div>
          </div>
        </div>
        <div className="btnDiv">
          <form className="btnDivFlex" encType="multipart/form-data">
            <button className="cencelBtn" onClick={clickCencleBtn}>
              취소
            </button>
            <button className="finalUploadBtn" onClick={startFetch}>
              완료
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
