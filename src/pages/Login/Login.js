import React from "react";
import "./Login.scss";

function Login() {
  return (
    <>
      <div className="container">
        <section>
          <div id="logo">WeBucks</div>
          <div id="login-container">
            <input
              type="text"
              id="emailInput"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input type="password" id="passwordInput" placeholder="비밀번호" />
            <button
              id="login-button"
              type="submit"
              onclick="location.href='list.html'"
              disabled
            >
              로그인
            </button>
          </div>
          <div id="forgot-password">
            <p>비밀번호를 잊으셨나요?</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
