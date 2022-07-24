import {React} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';


function Header() {



  return (
    <>
      <Navbar bg="dark" variant="dark" className='sticky-top'>
        <Container>
          <Navbar.Brand className='' >
            <img 
              src=""
              alt='الشعار'

              className="d-inline-block align-top navpos "
            />
            </Navbar.Brand>
          <Nav className="me-auto ">

            <Nav.Link href="/" className='me-2'>الصفحة الرئيسية</Nav.Link>
            <Nav.Link href="/" className='me-2'>اضافة طلب توصيل</Nav.Link>
            <Nav.Link href="/" className='me-2'>استعراض الطلبات</Nav.Link>
            <Nav.Link href="/join" className='me-2'>الأنضمام</Nav.Link>



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