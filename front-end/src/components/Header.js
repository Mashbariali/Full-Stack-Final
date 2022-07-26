import {React} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import {Link } from "react-router-dom";



function Header() {



  return (
    <>
     

      <Navbar variant="dark" className='MyNav sticky-top Navbar '>


        <Container>
          <Navbar.Brand className='' >
            <img 
              src="https://www.freeiconspng.com/thumbs/delivery-icon/delivery-icon-7.png" width="60px" height="50px"
              alt='الشعار'

              className="d-inline-block align-top navpos " />
           
            </Navbar.Brand>
          <Nav className="me-auto ">
          <Nav.Link><Link to="/"className='me-2'>الصفحة الرئيسية</Link></Nav.Link>
          <Nav.Link><Link to="/addOrder"className='me-2'>اضافة طلب توصيل</Link></Nav.Link>
          <Nav.Link><Link to="/list-orders"className='me-2'>استعراض الطلبات</Link></Nav.Link>
          <Nav.Link><Link to="/join"className='me-2'>الانضمام</Link></Nav.Link>
               {/* <Button className='userbuttom me-3 log1' a href='/register' variant="outline-info" >تسجيل </Button> */}
              <Button className='userbuttom mr-5 ' a href='/login' variant="outline-info" >تسجيل الدخول</Button>
              <Button className='userbuttom mr-3' a href='/' variant="outline-danger" >تسجيل الخروج</Button>
       </Nav>
        </Container>
      </Navbar>
        
    </>

  )
}

export default Header