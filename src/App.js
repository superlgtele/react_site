/* eslint-disable */

import React, { useState } from "react";
import "./App.css";

function App() {
  let [title, changetitle] = useState(["마포갈매기", "명륜지사갈비"]);
  let [good, changegood] = useState(0);
  let [modalonoff, changemodal] = useState(false);

  function 제목바꾸는함수() {
    let newArray = [...title];
    newArray[1] = "성공!";
    changetitle(newArray);
  }

  function 모달온오프함수() {
    if (modalonoff == false) {
      changemodal(true);
    } else {
      changemodal(false);
    }
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발시작</div>
      </div>
      <button onClick={제목바꾸는함수}>제목바꾸기</button>
      <button onClick={모달온오프함수}>모달창온오프하기</button>
      <div className="list">
        <h3>
          {title[1]} <span onClick={() => changegood(good + 1)}>👍</span> {good}
        </h3>
        <p>갈매기살 전문점</p>
        <hr />
      </div>

      {title.map(function (titledata) {
        return (
          <div className="list">
            <h3>{titledata}</h3>
            <hr />
          </div>
        );
      })}

      {modalonoff == true ? <Modal 작명title={title} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.작명title[0]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
