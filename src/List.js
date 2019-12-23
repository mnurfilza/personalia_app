import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import { Button,Container,Row,Col,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Select from 'react-select';


function List({item, show, index,editPersonalia, deletePersonalia, formatOptionLabel, options,SavePersonalia}) {
const {picture, label} = item
const {i, style} = show
const [modal, setModal] = useState(false);
const[hide, setHiden] = useState()
const toggle = () => setModal(!modal);



  useEffect(()=>{
    if (style.display !== "none") {
      setHiden({display:"none"})
    }
  },[show])

    return (
    <Container className="card" style={{marginTop:"10px"}}>

      <Row key={index} style={{paddingTop:"10px"}}>

        <Col md="4" style={hide}>
          <img src={picture}>
          </img>
        </Col>
        <Col md="4" style={hide}>
          {label}
        </Col>


        <Col md="4" style={hide}>
          <Button color="primary" onClick={() => editPersonalia(index)}>Edit</Button>
          <Button color="danger" onClick={toggle} style={{marginLeft:"5px"}}>Delete</Button>
        </Col>


        <Col md="8" style={style}>
          <Select  placeholder="Pilih Personalia..." formatOptionLabel={formatOptionLabel} className="search-box"  options={options}/>
        </Col>

        <Col md="4" style={style}>
          <Button color="primary" onClick={()=> SavePersonalia(index)}>Simpan</Button>{' '}
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
