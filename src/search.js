import React, {useState,useEffect} from 'react';
import Select from 'react-select';
import { Button,Container,Row,Col } from 'reactstrap';
import './search.css';



function Search() {
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
    return{picture:item.picture.thumbnail, value:item.name.title+" "+ item.name.first+" "+ item.name.last, label:item.name.title+" "+ item.name.first+" "+ item.name.last};
  })

  const formatOptionLabel = ({ picture, value, label,}) => (
    <Container>
      <Row>
        <Col md="3">
          <img src={picture}></img>
        </Col>
        <Col md="7" className="label">
          {label}
        </Col>
    </Row>
   </Container>
  );

  return (
    <Container className="container-content" fluid="sm">
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <Select placeholder="Pilih Personalia..." formatOptionLabel={formatOptionLabel} className="search-box"  options={options} />
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
