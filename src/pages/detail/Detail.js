import React, { useState } from "react";
import Nav from "../Component/TopsNav";
import "./Detail.scss";

function Detail() {
  let [inputText, setinputText] = useState([]);
  let [like, setlike] = useState("๐ค");

  // ๋๊ธ ์๋ ฅ์ฐฝ ๋๋ฅผ๋
  let pressEnterEvent = (e) => {
    if (e.keyCode === 13) {
      let copy = [...inputText];
      copy.push(e.target.value);
      setinputText(copy);
      e.target.value = "";
    }
  };

  return (
    <div className="junhyeok">
      <Nav />
      <div className="container">
        <h2>์ฝ๋ ๋ธ๋ฃจ</h2>
        <div className="detail-img">
          <img src="./images/coffee11.png" alt="ํ์ดํธ ์ด์ฝ๋ฆฟ ๋ชจ์นด" />
        </div>
        <div className="detail-info">
          <h3 className="title">ํ์ดํธ ์ด์ฝ๋ฆฟ ๋ชจ์นด</h3>
          <span
            className="like"
            onClick={() => {
              like === "๐ค" ? setlike("โค๏ธ") : setlike("๐ค");
            }}
          >
            {like}
          </span>
          <p className="smallP">White chocolate Mocha</p>
          <p className="info">
            ๋ฌ์ฝคํ๊ณ  ๋ถ๋๋ฌ์ด ํ์ดํธ ์ด์ฝ๋ฆฟ ์๋ฝ๊ณผ ์์คํ๋ ์๋ฅผ ์คํ ๋ฐํฌ์ ์์ด
            ํํํฌ๋ฆผ์ผ๋ก ๋ง๋ฌด๋ฆฌํ ์๋ฃ๋ก ๋ฌ์ฝคํจ๊ณผ ๊ฐ๋ ฌํ ์์คํ๋ ์๊ฐ ๋ถ๋๋ฝ๊ฒ
            ์ด์ฐ๋ฌ์ง ์ปคํผ
          </p>
          <div className="item">
            <p className="item-info">์ ํ ์์ ์ ๋ณด</p>
            <span className="item-span">Tall(ํจ) / 355ml (12 fl oz)</span>
          </div>
          <div className="detail-kcal">
            <Division />
            <Division />
          </div>
          <div className="์๋ฌ์ง">์๋ ๋ฅด๊ธฐ ์ ๋ฐ ์์ธ : ์ฐ์ </div>
          <div className="review">
            <h2>๋ฆฌ๋ทฐ</h2>
            <div className="comment">
              {inputText.map((e, i) => {
                return (
                  <ReviewComment
                    text={e}
                    index={i}
                    inputText={inputText}
                    setinputText={setinputText}
                  />
                );
              })}
            </div>
            <input
              placeholder="๋ฆฌ๋ทฐ๋ฅผ ์๋ ฅํด์ฃผ์ธ์."
              id="commentInput"
              type="text"
              onKeyDown={(e) => {
                pressEnterEvent(e);
              }}
            />
          </div>
        </div>
      </div>

      <BottomBar />
    </div>
  );
}

//kcal
function Division() {
  return (
    <div className="division">
      <div className="kcal">
        <p>1ํ ์ ๊ณต๋ (kcal)</p>
        <p>345</p>
      </div>
      <div className="kcal">
        <p>1ํ ์ ๊ณต๋ (kcal)</p>
        <p>345</p>
      </div>
      <div className="kcal">
        <p>1ํ ์ ๊ณต๋ (kcal)</p>
        <p>345</p>
      </div>
    </div>
  );
}
//ํ๋จ๋ฐ
function BottomBar() {
  return (
    <div className="bottom-bar">
      <div className="bottom-bar-section">
        <p>COMPANY</p>
        <ul>
          <li>ํ๋์ ๋ณด๊ธฐ</li>
          <li>์คํ๋ฒ์ค ์ฌ๋ช</li>
          <li>์คํ๋ฒ์ค ์๊ฐ</li>
          <li>๊ตญ๋ด ๋ด์ค๋ฃธ</li>
          <li>์ธ๊ณ์ ์คํ๋ฒ์ค</li>
          <li>๊ธ๋ก๋ฒ ๋ด์ค๋ฃธ</li>
        </ul>
      </div>
      <div className="bottom-bar-section">
        <p>CORPORATE SALES</p>
        <ul>
          <li>๋จ์ฒด ๋ฐ ๊ธฐ์ ๊ตฌ๋งค ์๋ด</li>
        </ul>
      </div>
      <div className="bottom-bar-section">
        <p>PARTNERSHIP</p>
        <ul>
          <li>์ ๊ท ์์  ์ ์</li>
          <li>ํ๋ ฅ ๊ณ ๊ฐ์ฌ ๋ฑ๋ก ์ ์ฒญ</li>
        </ul>
      </div>
      <div className="bottom-bar-section">
        <p>ONLINE COMMUNITY</p>
        <ul>
          <li>ํ์ด์ค๋ถ</li>
          <li>ํธ์ํฐ</li>
          <li>์ ๋ทฐํธ</li>
          <li>๋ธ๋ก๊ทธ</li>
          <li>์ธ์คํ๊ทธ๋จ</li>
        </ul>
      </div>
      <div className="bottom-bar-section">
        <p>RECRUIT</p>
        <ul>
          <li>์ฑ์ฉ์๊ฐ</li>
          <li>์ฑ์ฉ ์ง์ํ๊ธฐ</li>
        </ul>
      </div>
      <div className="bottom-bar-section">
        <p>WEBUCKS</p>
      </div>
    </div>
  );
}
//๋๊ธ๊ธฐ๋ฅ
function ReviewComment(props) {
  let [like, setlike] = useState(["๐ค"]);
  return (
    <div className="commentBox">
      <span className="commentText">
        <b>{sessionStorage.getItem("id")}</b> : {props.text}
        <span
          className="likeBtn"
          onClick={() => {
            like === "๐ค" ? setlike("โค๏ธ") : setlike("๐ค");
          }}
        >
          {like}
        </span>
      </span>
      {/* ์ญ์ ๋ฒํผ */}
      <button
        className="deleteBtn"
        onClick={() => {
          let copy = [...props.inputText];
          copy.splice(props.index, 1);
          props.setinputText(copy);
        }}
      >
        ์ญ์ 
      </button>
    </div>
  );
}

export default Detail;
