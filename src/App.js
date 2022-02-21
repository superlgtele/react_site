/* eslint-disable */
import React, { useState, useEffect } from "react";
import "./App.css";
import ShoesData from "./data";

function App() {
  let [title, changetitle] = useState(["강남우동맛집", "일산마포갈매기"]);
  let [shoes, changeshoes] = useState(ShoesData);

  function copy() {
    let newArray = [...title];
    newArray[0] = "일본초밥맛집";
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
        <hr />
      </div>
      <div className="list">
        <h3>{title[1]}</h3>
        <p>2월 20일 발행</p>
        <hr />
      </div>
      {shoes.map((a, i) => {
        return <Card shoes={a} i={i} key={i} />;
      })}
    </div>
  );
}

function Card(props) {
  // useEffect(() => {
  //   if (shoes) {
  //     console.log(shoes);
  //   }
  // });

  return (
    <div className="list">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="20%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}원</p>
      <hr />
    </div>
  );
}

export default App;
