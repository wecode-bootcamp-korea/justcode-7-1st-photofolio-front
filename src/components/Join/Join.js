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

    const formdata = new FormData();
    Object.values(files).map((elem, idx) => formdata.append(idx, elem));

    // for (let key of formdata.keys()) {
    //   console.log(key);
    // }

    // /* value 확인하기 */
    // for (let value of formdata.values()) {
    //   console.log(value);
    // }

    setUserData({
      login_id: userId.current.value,
      password: password.current.value,
      password_check: passwordCheck.current.value,
      kor_name: userName.current.value,
      eng_name: EnglishName.current.value,
      nickname: nationality.current.value,
      email: userEmail.current.value,
      profile: formdata,
    });
  };

  useEffect(() => {
    console.log(userData);
    fetch('http://localhost:8000/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart-form-data', // 헤더 없으면 에러남
      },
      body: JSON.stringify(userData),
    })
      .then(res => res.json())
      .then(res => console.log(res));

    userData && console.log(userData);
  }, [userData]);

  return (
    <>
      <div className="clickArea" onClick={closeJoinpage}></div>
      <div className="loginDiv">
        <span className="titleLogo">PHOTOFOLIO</span>
        <form className="loginForm">
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
            multiple
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
