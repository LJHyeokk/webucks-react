import React, { useState, useEffect } from "react";
import Nav from "../Component/TopsNav";
import "./List.scss";

function List() {
  useEffect(() => {
    fetch("http://localhost:3000/mockdata/data.json")
      .then((res) => res.json())
      .then((res) => setMockdata(res));
  }, []);

  let [mockdata, setMockdata] = useState([]);

  return (
    <div className="junhyeok">
      <Nav />
      <div className="List">
        <div className="list-items">
          <div className="title">
            콜드 브루 커피
            <img src="./images/cup.png" alt="컵이미지" />
            <span>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
          </div>
          <div className="상품들">
            {mockdata.cold &&
              mockdata.cold.map((e, i) => {
                return <CoffeeCard item={e} index={i} />;
              })}
          </div>
        </div>
        <div className="list-items">
          <div className="title">
            에스프레소
            <img src="./images/cup.png" alt="컵이미지" />
            <span>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
          </div>
          <div className="상품들">
            {mockdata.shot &&
              mockdata.shot.map((e) => {
                return <CoffeeCard item={e} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

// 커피 리스트 펼치기
function CoffeeCard(props) {
  let [like, setlike] = useState("🤍");
  return (
    <div className="add">
      <img src={props.item.img} alt={props.item.name} />
      <div className="name">
        <h4>{props.item.name}</h4>
        <span
          className="like"
          onClick={(e) => {
            if (like === "🤍") {
              setlike("❤️");
            } else {
              setlike("🤍");
            }
          }}
        >
          {like}
        </span>
      </div>
    </div>
  );
}

export default List;
