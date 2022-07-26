import React from 'react'
import axios from 'axios'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

import {Card, Row , Col , Button} from 'react-bootstrap';
// import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBCardGroup } from 'mdb-react-ui-kit';
import {useEffect, useState} from 'react'
function ListOrders() {

  const [orders,setOrders] = useState([]);


  useEffect(()=>{
    //here your will be fetch all orders fro the data in  endPoint.
    axios.get("http://127.0.0.1:8000/Delivery/list_Orders").then((res)=>{
      setOrders(res.data)
    })
  })
  return (
  // 
  orders.map((item)=>(
    // <li>{e.title}</li>
    <div className=' col d-flex justify-content-center card_order'>
    
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>{item.PackageType}</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary" href='/chatt'>Accept</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  </div>
  ))

  // 
  
 
  )
}

export default ListOrders