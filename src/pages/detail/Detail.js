import React, { useState } from "react";
import Nav from "../Component/TopsNav";
import "./Detail.scss";

function Detail() {
  let [inputText, setinputText] = useState([]);
  let [like, setlike] = useState("🤍");

  // 댓글 입력창 누를때
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
        <h2>콜드 브루</h2>
        <div className="detail-img">
          <img src="./images/coffee11.png" alt="화이트 초콜릿 모카" />
        </div>
        <div className="detail-info">
          <h3 className="title">화이트 초콜릿 모카</h3>
          <span
            className="like"
            onClick={() => {
              like === "🤍" ? setlike("❤️") : setlike("🤍");
            }}
          >
            {like}
          </span>
          <p className="smallP">White chocolate Mocha</p>
          <p className="info">
            달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와 섞어
            휘핑크림으로 마무리한 음료로 달콤함과 강렬한 에스프레소가 부드럽게
            어우러진 커피
          </p>
          <div className="item">
            <p className="item-info">제품 영양 정보</p>
            <span className="item-span">Tall(톨) / 355ml (12 fl oz)</span>
          </div>
          <div className="detail-kcal">
            <Division />
            <Division />
          </div>
          <div className="알러지">알레르기 유발 요인 : 우유</div>
          <div className="review">
            <h2>리뷰</h2>
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
              placeholder="리뷰를 입력해주세요."
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
        <p>1회 제공량 (kcal)</p>
        <p>345</p>
      </div>
      <div className="kcal">
        <p>1회 제공량 (kcal)</p>
        <p>345</p>
      </div>
      <div className="kcal">
        <p>1회 제공량 (kcal)</p>
        <p>345</p>
      </div>
    </div>
  );
}
//하단바
function BottomBar() {
  return (
    <div className="bottom-bar">
      <div className="bottom-bar-section">
        <p>COMPANY</p>
        <ul>
          <li>한눈에 보기</li>
          <li>스타벅스 사명</li>
          <li>스타벅스 소개</li>
          <li>국내 뉴스룸</li>
          <li>세계의 스타벅스</li>
          <li>글로벌 뉴스룸</li>
        </ul>
      </div>
      <div className="bottom-bar-section">
        <p>CORPORATE SALES</p>
        <ul>
          <li>단체 및 기업 구매 안내</li>
        </ul>
      </div>
      <div className="bottom-bar-section">
        <p>PARTNERSHIP</p>
        <ul>
          <li>신규 입점 제의</li>
          <li>협력 고객사 등록 신청</li>
        </ul>
      </div>
      <div className="bottom-bar-section">
        <p>ONLINE COMMUNITY</p>
        <ul>
          <li>페이스북</li>
          <li>트위터</li>
          <li>유뷰트</li>
          <li>블로그</li>
          <li>인스타그램</li>
        </ul>
      </div>
      <div className="bottom-bar-section">
        <p>RECRUIT</p>
        <ul>
          <li>채용소개</li>
          <li>채용 지원하기</li>
        </ul>
      </div>
      <div className="bottom-bar-section">
        <p>WEBUCKS</p>
      </div>
    </div>
  );
}
//댓글기능
function ReviewComment(props) {
  let [like, setlike] = useState(["🤍"]);
  return (
    <div className="commentBox">
      <span className="commentText">
        <b>{sessionStorage.getItem("id")}</b> : {props.text}
        <span
          className="likeBtn"
          onClick={() => {
            like === "🤍" ? setlike("❤️") : setlike("🤍");
          }}
        >
          {like}
        </span>
      </span>
      {/* 삭제버튼 */}
      <button
        className="deleteBtn"
        onClick={() => {
          let copy = [...props.inputText];
          copy.splice(props.index, 1);
          props.setinputText(copy);
        }}
      >
        삭제
      </button>
    </div>
  );
}

export default Detail;
