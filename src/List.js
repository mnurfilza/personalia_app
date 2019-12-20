import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function List(props) {
const[data, setData] = useState([])
if (data.length === 0) {
  data.splice(0, 1, props)
}
console.log(data);
  return (
    <div className="">
      {props.value}
    </div>
  );
}

export default List;
