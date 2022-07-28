import React from 'react'
import axios from 'axios'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import ordericon from '../images/ordericon.png'
import {Card, Row , Col , Button} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
// import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBCardGroup } from 'mdb-react-ui-kit';
import {useEffect, useState} from 'react'
function ListOrders() {
 
  const [data, setData] = useState([])
  const [date, setDate] = useState('')
  const [sizePackge, setSizePackage] = useState('')


  


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
    setDate(res.data.Order.date)

  
      // alert('Successfully Login');
      // navigate("/")
    })
  
  
  },[]);
  return (
    <div className='card-group1 mt-5'>
  {data.map((item)=>(
   <>
     <Card className="text-center mb-5">
       <Card.Header ><img src={ordericon} className="cardimage" /></Card.Header>
       <Card.Body>
         <Card.Title>من {item.FromWhichCity} <p className='d-inline ToWhere'>الى</p> {item.ToWhichCity}</Card.Title>
        <Card.Text className='cardtext'>
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
         <Button variant="primary" href='/chat'>قبول الطلب</Button>
      </Card.Body>
      <Card.Footer className="text-muted">تاريخ الطلب: {item.date.slice(0,10)} {item.date.slice(12,16)}</Card.Footer>
    </Card>
   </>
  ))}
   
    </div>

  //   data.map((item)=>(
    
  //       <Col xs={6} md={4}  >
  //   <Card className="text-center card-group">
  //     <Card.Header className='card-group'><img src={ordericon} className="cardimage" /></Card.Header>
  //     <Card.Body>
  //       <Card.Title>من {item.FromWhichCity} <p className='d-inline ToWhere'>الى</p> {item.ToWhichCity}</Card.Title>
  //       <Card.Text className='cardtext'>
  //         <p>
  //         الحجم: {item.PackageType}
  //         </p>
  //         <p>
  //         المدة: {item.DeliveryTime}
  //         </p>
  //         <p>
  //         ملاحظات: {item.Description}
  //         </p>
  //       </Card.Text>
  //       <Button variant="primary" href='/chat'>قبول الطلب</Button>
  //     </Card.Body>
  //     <Card.Footer className="text-muted">تاريخ الطلب: {item.date.slice(0,10)} {item.date.slice(12,16)}</Card.Footer>
  //   </Card>
  //   </Col>
  
  // ))

    )
}

export default ListOrders