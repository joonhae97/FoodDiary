import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';
import { returnStatement } from '@babel/types';

const customers =[{
  'id':1,
  'image': 'https://placeimg.com/64/64/1',
  'name' : '황준해',
  'birthday' : '970819',
  'gender' : '여자',
  'job': '대학생'
},{
  'id':2,
  'image': 'https://placeimg.com/64/64/2',
  'name' : '홍길동',
  'birthday' : '940505',
  'gender' : '남자',
  'job': '프로그래머'
},{
  'id':3,
  'image': 'https://placeimg.com/64/64/3',
  'name' : '김길동',
  'birthday' : '920912',
  'gender' : '남자',
  'job': '작가'
}]

class App extends Component{
  render(){
    return(
      <div>
        {customers.map(c=>{return (<Customer key ={c.id} id = {c.id} image = {c.image} name = {c.name} birthday= {c.birthday} gender = {c.gender} job = {c.job}/>);
          })
        }
      </div>
    );
  }
}

export default App;
