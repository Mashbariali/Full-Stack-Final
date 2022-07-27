import {React, useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';

export default function Carousel() {
  const [isLogin, setIsLogin] = useState(true)

  useEffect(() => {
    if (localStorage["token"]){
      setIsLogin(true)
    }
    else {
      setIsLogin(false)
    }
  

}, [isLogin])

  return (
    <div className='container'>
    <MDBCarousel className='carousel'>
      <MDBCarouselInner>
      
        <MDBCarouselItem className='active'>
            <h1 className='carouselText animate__animated animate__rollIn'> طلبات العملاء ومطلوب التوصيل لهم وعلى المسافرين التواصل معهم من خلال التطبيق لتنفيذ طلبهم  </h1>

            {isLogin ? (
            <div className='carsouleLoginMessage animate__animated animate__backInLeft '>
              <h4> البيانات الظاهرة لليوزر</h4>
              <br/>
              <select class='selectCity'>
                 <option>مندوب</option>
                 <option>عميل</option>
              </select>
              <input  class='inputt' type='text' placeholder='+966'></input>
              <input type='text' class='inputt' placeholder='password'></input>
              
              <br></br>
              {/* <button className="btn btn-danger m-1 dbutton ">سجل الان</button> */}
              <Button className='btn btn-danger m-1 dbutton' a href='/' variant="danger" >انضم الان</Button>
              
              </div>
            ) : (
              <div className='carsouleLoginMessage animate__animated animate__backInLeft '>
              <h4> البيانات الظاهرة للزائر</h4>
              <br/>
              <select class='selectCity'>
                 <option>مندوب</option>
                 <option>عميل</option>
              </select>
              <input  class='inputt' type='text' placeholder='+966'></input>
              <input type='text' class='inputt' placeholder='password'></input>
              
              <br></br>
              <button className="btn btn-danger m-1 dbutton ">سجل الان</button>

              
              </div>

            )}


          <MDBCarouselElement className='carousel-img' src='https://c.neh.tw/thumb/f/720/m2i8H7H7N4d3N4i8.jpg' alt='...' />
          
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </div>
  );
}