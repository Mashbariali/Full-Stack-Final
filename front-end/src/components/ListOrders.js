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
    axios.get("https://jsonplaceholder.typicode.com/posts").then((e)=>{
      setOrders(e.data)
    })
  })
  return (
  // 
  orders.map((e)=>(
    // <li>{e.title}</li>
    <div className=' col d-flex justify-content-center'>
    
    <MDBRow>
      <MDBCol sm='6'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>{e.title}</MDBCardTitle>
            <MDBCardText>
              With supporting text below as a natural lead-in to additional content.
            </MDBCardText>
            <MDBBtn href='#'>Go somewhere</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm='6'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>{e.id}</MDBCardTitle>
            <MDBCardText>
              With supporting text below as a natural lead-in to additional content.
            </MDBCardText>
            <MDBBtn href='/home'>Go somewhere</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </div>
  ))

  // 
  
 
  )
}

export default ListOrders