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
          <MDBCarouselElement className='carousel-img' src='https://cdn.dribbble.com/users/187444/screenshots/2928490/dribbble.gif' alt='...' />
          
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </div>
  );
}