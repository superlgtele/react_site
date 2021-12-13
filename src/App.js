/* eslint-disable */

// import React, { useState } from 'react';
// 동빈나 React 수업

import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Buttonbox from './components/Buttonbox';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍기',
    'birthday': '97년생',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '홍기2',
    'birthday': '98년생',
    'gender': '남자',
    'job': '프로그래머'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '홍기3',
    'birthday': '99년생',
    'gender': '남자',
    'job': '개발자'
  }
]

class App extends Component {
  render () {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
            customers.map(Readcustomers => {
              return (
                <Customer
                  key={Readcustomers.id}
                  id={Readcustomers.id}
                  image={Readcustomers.image}
                  name={Readcustomers.name}
                  birthday={Readcustomers.birthday}
                  gender={Readcustomers.gender}
                  job={Readcustomers.job}
                />
              )
            })
          }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);

// function App() {

//   let [ title, changetitle ] = useState(['마포갈매기', '명륜지사갈비']);
//   let [ good, changegood ] = useState(0);

//   function 제목바꾸는함수() {
//     let newArray = [...title];
//     newArray[1] = '성공!';
//     changetitle( newArray );
//   }

//   return (
//     <div className="App">
//       <div className="black-nav">
//         <div>개발시작</div>
//       </div>
//       <button onClick={ 제목바꾸는함수 }>제목바꾸기</button>
//       <div className="list">
//         <h3> { title[1] } <span onClick={ () => changegood(good + 1) }>👍</span> {good} </h3>
//         <p>갈매기살 전문점</p>
//         <hr/>
//       </div>

//       <Modal></Modal>

//     </div>
//   );
// }

// function Modal() {
//   return (
//     <div className="modal">
//       <h2>제목</h2>
//       <p>날짜</p>
//       <p>상세내용</p>
//     </div>
//   )
// }
