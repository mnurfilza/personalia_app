import React, {useState,useEffect} from 'react';
import Select from 'react-select';
import { Button,Container,Row,Col } from 'reactstrap';
import './search.css';
import List from './List.js';

function Search() {
  const [data, setData] = useState([])
  const [list, setList] = useState([])
  const [show, setShow] = useState({
    index:'',
    style: {display:"none"}
  })

  

  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res =>{
      return res.json()
    })
    .then((response) =>{
      setList(response.results)
    })  
  },[])

  const options =  list.map(item =>{
    return {picture:item.picture.thumbnail, value:item.name.first+" "+ item.name.last, label:item.name.first+" "+ item.name.last};
  })

  const formatOptionLabel = ({ picture, value, label,}) => (
    <Container>
      <Row>
        <Col md="4">
          <img src={picture}></img>
        </Col>
        <Col md="4" className="label">
          {label}
        </Col>
    </Row>
   </Container>
  );


 


  const SavePersonalia = index =>{
    console.log(index)
  }

  const editPersonalia = (index) => {
    const newData = [...data]
    for(var i= 0; i <= newData.length; i++){
      if(i === index){
        console.log(i)
        setShow({index:i, style: {display:"block"}})
      }
    }
  } 
  const deletePersonalia = index => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);  
  }


  return (
    <Container className="container-content" fluid="sm">
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <Select placeholder="Pilih Personalia..."  onChange={e => setData[...data, e]} formatOptionLabel={formatOptionLabel} className="search-box"  options={options}/>
        </Col>
      </Row>

      
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
        {data.map((item, index)=>
          <List item={item} options={options} show={show} formatOptionLabel={formatOptionLabel} index={index} key={index} editPersonalia={editPersonalia} deletePersonalia={deletePersonalia}  SavePersonalia={SavePersonalia}/>
         )}
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
