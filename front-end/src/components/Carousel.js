import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';

export default function Carousel() {
  return (
    <MDBCarousel className='carousel'>
      <MDBCarouselInner>
      
        <MDBCarouselItem className='active'>
            <h1 className='carouselText animate__animated animate__rollIn'>....... </h1>
          <MDBCarouselElement className='carousel-img' src='https://miro.medium.com/max/1400/1*fE3JkGyzhWXlXApVnShDtw.gif' alt='...' />
          
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}