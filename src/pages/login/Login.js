import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./Login.scss";

function Login() {
  const [id, setid] = useState("");
  const [pw, setipw] = useState("");
  const num = pw.search(/[0-9]/g);
  const eng = pw.search(/[a-z]/gi);
  const spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
  const navigate = useNavigate();
  const condition =
    id.includes("@") && pw.length > 7 && num > -1 && eng > -1 && spe > -1;

  //id값변할때
  function handleIdInput(event) {
    setid(event.target.value);
  }
  //pw값 변할때
  function handlePwInput(event) {
    setipw(event.target.value);
  }
  //pw show or hide
  function passwordToText(e) {
    const pwDom = document.getElementsByClassName("pw")[0];
    if (pwDom.type === "password") {
      pwDom.type = "text";
      e.target.innerHTML = "hide";
    } else {
      pwDom.type = "password";
      e.target.innerHTML = "show";
    }
  }
  // 버튼 클릭시 페이지 이동
  function toChangePage() {
    if (condition) {
      sessionStorage.setItem("id", id);
      navigate("/List");
    } else alert("이메일과 비밀번호가 올바르지 않습니다.");
  }

  return (
    <div className="junhyeok">
      <div className="login">
        {/* 로고이미지 */}
        <div className="login-logo">
          <img src="/images/logo.png" alt="로고이미지" />
        </div>
        {/* 제출할것들 */}
        <form className="login-form">
          {/* 아이디 */}
          <input
            className="id"
            maxLength="50"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            autoComplete="off"
            onChange={handleIdInput}
            style={{ borderColor: id.includes("@") ? "#659c31" : "#dddddd" }}
          />
          {/* 비밀번호 */}
          <input
            type="password"
            className="pw"
            maxLength="50"
            placeholder="비밀번호"
            onChange={handlePwInput}
            style={{
              borderColor:
                pw.length > 7 && num > -1 && eng > -1 && spe > -1
                  ? "#659c31"
                  : "#dddddd",
            }}
          />
          {/* show or hide btn */}
          <button className="showHide" type="button" onClick={passwordToText}>
            show
          </button>
          {/* 페이지 이동 버튼 */}
          <button
            className="toList"
            type="button"
            onClick={toChangePage}
            style={{ backgroundColor: condition ? "#79BAF2" : "#b4d2e8" }}
          >
            로그인
          </button>
        </form>
        {/* 비밀번호찾기 */}
        <div className="login-forget">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
