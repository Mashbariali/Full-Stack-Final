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
            <h1 className='carouselText animate__animated animate__rollIn'>موقع وصلها هو موقع يوصل لك شحنتك مع اقرب مسافر للمدينة الي تبيها في وقت قياسي</h1>
            <div className='carsouleLoginMessage animate__animated animate__backInLeft '>
              <h4>ليه اشحن مع وصلها؟</h4>
              <br/>
              
              <label>وصلها اسرع</label>
              <label>وصلها اضمن</label>
              <label>وصلها اسهل</label>
              
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