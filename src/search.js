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



  const options = (
    <Container>
    {list.map((res, index)=>
      <Row key={index}>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <img src={res.picture.thumbnail}></img>
          {res.name.title} {res.name.first}
        </Col>

      </Row>
    )}
    </Container>
  )


  return (
    <Container className="container-content" fluid="sm">
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <Select placeholder="Pilih Personlia..." className="search-box" components={{options}}/>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
