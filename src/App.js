/* eslint-disable */
import React, { useState } from "react";
import "./App.css";

function App() {
  let [title, changetitle] = useState(["강남우동맛집", "일산마포갈매기"]);

  function copy() {
    let newArray = [...title];
    newArray[0] = "일본우동맛집";
    changetitle(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>Blog</div>
      </div>
      <button onClick={copy}>제목바꾸기</button>
      <div className="list">
        <h3>{title[0]}</h3>
        <p>2월 18일 발행</p>
      </div>
      <div className="list">
        <h3>{title[1]}</h3>
        <p>2월 20일 발행</p>
      </div>
    </div>
  );
}

export default App;
