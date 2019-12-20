import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function List(props) {
  console.log(props);
const {picture, value, label} = props.res
console.log(props);

// if (data.length === 0) {
//   data.splice(0, 1, props)
// }
  return (
    <div className="">
      {props.value}
    </div>
  );
}

export default List;
