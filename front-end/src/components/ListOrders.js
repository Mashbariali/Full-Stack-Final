import React from 'react'
import {Card, Row , Col , Button} from 'react-bootstrap';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBCardGroup } from 'mdb-react-ui-kit';
function ListOrders() {
  return (<div className=' col d-flex justify-content-center ' >

  <Row className=' mt-5 text-center '>
    <Col >

    <Card style={{ width: '16rem' }} className='mx-5 mt-5 bootstrapcard animateanimated animatezoomIn '>
  <Card.Img variant="top" src="" className=''/>
  <Card.Body>
    <Card.Title className='cardtitle'></Card.Title>
    <Card.Text className='cardtext mt-5'>
      
          </Card.Text >
    <Button variant="dark" a href=''>استمرار</Button>
  </Card.Body>
</Card>
</Col> 

  </Row>

</div>
  )
}

export default ListOrders