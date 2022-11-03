import React, { useState, useRef, useEffect } from 'react';
import './login.scss';

function Login() {
  return (
    <>
      <div className="loginBox">
        <form className="loginForm">
          <span className="loginSpan">USER ID</span>
          <input className="loginInput"></input>

          <span className="loginSpan">PASSWORD</span>
          <input className="loginInput"></input>

          <button className="loginBtn">LOGIN</button>
        </form>
      </div>
    </>
  );
}

export default Login;
