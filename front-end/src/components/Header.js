import {React} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import {Link } from "react-router-dom"



function Header() {



  return (
    <>
      <Navbar bg="" variant="dark" className='MyNav sticky-top bg-transparent'>
        <Container>
          <Navbar.Brand className='' >
            <img 
              src=""
              alt='الشعار'

              className="d-inline-block align-top navpos "
            />
            </Navbar.Brand>
          <Nav className="me-auto ">
          <Nav.Link><Link to="/"className='me-2'>الصفحة الرئيسية</Link></Nav.Link>
          <Nav.Link><Link to="/"className='me-2'>اضافة طلب توصيل</Link></Nav.Link>
          <Nav.Link><Link to="/list-orders"className='me-2'>استعراض الطلبات</Link></Nav.Link>
          <Nav.Link><Link to="/join"className='me-2'>الانضمام</Link></Nav.Link>
               <Button className='userbuttom me-3' a href='/register' variant="outline-info" >تسجيل </Button>
              <Button className='userbuttom me-3' a href='/login' variant="outline-info" >تسجيل الدخول</Button>
              <Button className='userbuttom' a href='/' variant="outline-danger" >تسجيل الخروج</Button>
       </Nav>
        </Container>
      </Navbar>

    </>

  )
}

export default Header