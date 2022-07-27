import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';

export default function Carousel() {
  return (
    <div className='container'>
    <MDBCarousel className='carousel'>
      <MDBCarouselInner>
      
        <MDBCarouselItem className='active'>
            <h1 className='carouselText animate__animated animate__rollIn'> طلبات العملاء ومطلوب التوصيل لهم وعلى المسافرين التواصل معهم من خلال التطبيق لتنفيذ طلبهم  </h1>
            <div className='carsouleLoginMessage animate__animated animate__backInLeft '>
              <h4> سجل الان</h4>
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
          <MDBCarouselElement className='carousel-img' src='https://cdn.dribbble.com/users/187444/screenshots/2928490/dribbble.gif' alt='...' />
          
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </div>
  );
}