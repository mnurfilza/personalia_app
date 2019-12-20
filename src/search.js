import React, {useState,useEffect} from 'react';
import Select from 'react-select';
import { Button,Container,Row,Col } from 'reactstrap';
import './search.css';
import List from './List.js';

function Search() {
  const [data, setData] = useState([])
  const [list, setList] = useState([])


  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res => {
      return res.json()
    })
    .then(response => {
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

const handleChange = e =>{
  var newArr = data.push(e)
}
  return (
    <Container className="container-content" fluid="sm">
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <Select placeholder="Pilih Personalia..."  onChange={handleChange} formatOptionLabel={formatOptionLabel} className="search-box"  options={options}/>
        </Col>
      </Row>


    </Container>
  );
}

export default Search;
