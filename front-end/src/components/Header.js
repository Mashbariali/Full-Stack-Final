import {React, useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import {Link } from "react-router-dom";
import logo from '../images/logo2.png'



function Header() {
  const [isLogin, setIsLogin] = useState(true)

  const logout=()=>{
    localStorage.removeItem("token");
    
  }


  useEffect(() => {
    if (localStorage["token"]){
      setIsLogin(true)
    }
    else {
      setIsLogin(false)
    }
  

}, [isLogin])


  return (
    <>
     
    <div className='container sticky-top '>
      <Navbar variant="dark" className='MyNav sticky-top Navbar fixed-top '>


        <Container>
          <Navbar.Brand className='' >
            <img 
              src={logo} width="140px" height="70px"
              alt='الشعار'

              className="d-inline-block align-top navpos " />
           
            </Navbar.Brand>
          <Nav className="me-auto ">
          <Nav><Link to="/"className='me-2'>الرئيسية</Link></Nav>
          <Nav><Link to="/addOrder"className='me-2'>طلب توصيل</Link></Nav>
          <Nav><Link to="/list-orders"className='me-2'>استعراض الطلبات</Link></Nav>
          {/* <Nav><Link to="/join"className='me-2'>الانضمام</Link></Nav> */}
          {/* <Button className='userbuttom me-3 log1' a href='/register' variant="outline-info" >تسجيل </Button> */}
          {isLogin ? (
            <>
            <Button className='userbuttom mr-3' a href='/' onClick={logout}>تسجيل الخروج</Button>
            <Nav.Link href="#" disabled>
            مرحبا بك {localStorage.getItem("username")} 
            </Nav.Link>            </>
          ) : (
            <Nav><Link to="/login"className='me-2'>تسجيل الدخول</Link></Nav>
            )}
       </Nav>
        </Container>
      </Navbar>
      </div>
    </>

  )
}

export default Header