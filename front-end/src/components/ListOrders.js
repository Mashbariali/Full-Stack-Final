import React from 'react'
import axios from 'axios'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

import {Card, Row , Col , Button} from 'react-bootstrap';
// import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBCardGroup } from 'mdb-react-ui-kit';
import {useEffect, useState} from 'react'
function ListOrders() {
 
  // const [PackageType, setPackageType] = useState();
  // const [FromWhichCity, setFromWhichCity] = useState();
  // const [ToWhichCity, setToWhichCity] = useState();
  // const [DeliveryTime, setDeliveryTime] = useState();
  // const [Description, setDescription] = useState();
  const [data, setData] = useState([])


  const token =localStorage.getItem("token")
  var config = {
    method: 'get',
    url: 'https://wasllha2022-django.herokuapp.com/Delivery/list_Orders',
    headers: { 
      'Authorization': `Bearer ${token}`
    }
  };
console.log(token);
   useEffect(()=>{
    axios(config).then(res=>{
    console.log(res.data.Order);
    setData(res.data.Order )
  
      // alert('Successfully Login');
      // navigate("/")
    })
  
  
  },[]);
  return (
    data.map((item)=>(
    <div className=' col d-flex justify-content-center'>
    

    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>{item.FromWhichCity} <p className='inline'>الى</p> {item.ToWhichCity}</Card.Title>
        <Card.Text>
          <p>
          الحجم: {item.PackageType}
          </p>
          <p>
          المدة: {item.DeliveryTime}
          </p>
          <p>
          ملاحظات: {item.Description}
          </p>
        </Card.Text>
        <Button variant="primary" href='/chatt'>قبول الطلب</Button>
      </Card.Body>
      <Card.Footer className="text-muted">تاريخ الطلب</Card.Footer>
    </Card>
  </div>
  ))
 
  )
}

export default ListOrders