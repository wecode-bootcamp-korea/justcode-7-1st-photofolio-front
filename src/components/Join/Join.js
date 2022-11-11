import React, { useState, useRef, useEffect } from 'react';
import './join.scss';

function Join({ setJoinPage }) {
  const [userData, setUserData] = useState();
  const [files, setFiles] = useState();

  const userId = useRef();
  const password = useRef();
  const passwordCheck = useRef();
  const userName = useRef();
  const EnglishName = useRef();
  const nationality = useRef();
  const userEmail = useRef();

  function closeJoinpage() {
    setJoinPage(false);
  }

  function onLoadFile(event) {
    setFiles(event.target.files);
  }

  const clickJoin = function (event) {
    event.preventDefault();

    if (passwordCheck.current.value !== password.current.value) {
      alert('패스워드가 일치하지 않습니다');
      return;
    }

    if (userId.current.value.length < 8) {
      alert('id는 8자리 이상으로 입력해주세요');
      return;
    }

    const formdata = new FormData();
    // Object.values(files).map((elem, idx) => formdata.append(profile, elem));

    formdata.append('login_id', userId.current.value);
    formdata.append('password', password.current.value);
    formdata.append('password_check', passwordCheck.current.value);
    formdata.append('kor_name', userName.current.value);
    formdata.append('eng_name', EnglishName.current.value);
    formdata.append('nickname', nationality.current.value);
    formdata.append('email', userEmail.current.value);
    formdata.append('profile', files[0]);

    setUserData(formdata);
  };

  useEffect(() => {
    fetch('http://localhost:8000/user/signup', {
      method: 'POST',
      headers: {
        // 'Content-Type': 'multipart/form-data', // 헤더 없으면 에러남
      },
      body: userData,
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === '회원가입 되었습니다.') {
          window.location.href = 'http://localhost:3000/feeds';
        }
      });
  }, [userData]);

  return (
    <>
      <div className="clickArea" onClick={closeJoinpage}></div>
      <div className="loginDiv">
        <span className="titleLogo">PHOTOFOLIO</span>
        <form className="loginForm" encType="multipart/form-data">
          <span className="loginBoxName">USER ID</span>
          <input
            className="loginBoxInput"
            ref={userId}
            placeholder="테스트"
          ></input>

          <span className="loginBoxName">PASSWORD</span>
          <input className="loginBoxInput" ref={password}></input>

          <span className="loginBoxName">PASSWORD CHECK</span>
          <input className="loginBoxInput" ref={passwordCheck}></input>

          <span className="loginBoxName">USER NAME</span>
          <input className="loginBoxInput" ref={userName}></input>

          <span className="loginBoxName">ENGLISH USER NAME</span>
          <input className="loginBoxInput" ref={EnglishName}></input>

          <span className="loginBoxName">NICKNAME</span>
          <input className="loginBoxInput" ref={nationality}></input>

          <span className="loginBoxName">USER EMAIL</span>
          <input className="loginBoxInput" ref={userEmail}></input>

          <span className="loginBoxName">IMAGE FILE</span>
          <input
            type="file"
            name="file"
            accept="img/*"
            onChange={onLoadFile}
            // multiple
          ></input>

          <button className="loginBtn" onClick={clickJoin}>
            JOIN
          </button>
        </form>
      </div>
    </>
  );
}

export default Join;
