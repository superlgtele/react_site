/* eslint-disable */

import React, { useState } from 'react';
import './App.css';

function App() {

  let [ title, changetitle ] = useState(['마포갈매기', '명륜지사갈비']);
  let [ good, changegood ] = useState(0);

  function 제목바꾸는함수() {
    let newArray = [...title];
    newArray[1] = '성공!';
    changetitle( newArray );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발시작</div>
      </div>
      <button onClick={ 제목바꾸는함수 }>제목바꾸기</button>
      <div className="list">
        <h3> { title[1] } <span onClick={ () => changegood(good + 1) }>👍</span> {good} </h3>
        <p>갈매기살 전문점</p>
        <hr/>
      </div>

      <Modal></Modal>

    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
