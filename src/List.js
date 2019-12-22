import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import { Button,Container,Row,Col,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function List({item, index,editPersonalia, deletePersonalia}) {
const {picture, value, label} = item
const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

    return (
    <Container className="card" style={{marginTop:"10px"}}>
      <Row key={index} style={{paddingTop:"10px"}}>
        <Col md="4">
          <img src={picture}>
          </img>
        </Col>
        <Col md="4">
          {label}
        </Col>
        <Col md="4">
          <Button color="primary" onClick={() => editPersonalia(index)}>Edit</Button>
          <Button color="danger" onClick={toggle} style={{marginLeft:"5px"}}>Delete</Button>
        </Col>
      </Row>


      <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Delete Personalia</ModalHeader>
          <ModalBody>
            Yakin Ingin Menghapus Personalia ini ?
          </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>deletePersonalia(index)}>Ya</Button>{' '}
          <Button color="secondary" onClick={toggle}>Tidak</Button>
        </ModalFooter>
      </Modal>
      </div>
    </Container>

    
    )
}

export default List;
