import {React, useState, useEffect} from 'react';
import Car from '../images/Car.gif'
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';

export default function Carousel() {
  const [isLogin, setIsLogin] = useState(false)

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
            <h1 className='carouselText animate__animated animate__rollIn'>موقع وصلها هو موقع يوصل لك شحنتك مع اقرب مسافر للمدينة الي تبيها في وقت قياسي</h1>
            {!isLogin &&
            <div className='carsouleLoginMessage animate__animated animate__backInLeft '>
              <h4>ليه اشحن مع وصلها؟</h4>
              <br/>
              
              <label>وصلها اسرع</label>
              <label>وصلها اضمن</label>
              <label>وصلها اسهل</label>
            
              <br></br>
            <a href='/login' className='btnlogindeliveryNow'>  <button className="btn btn-danger m-1 dbutton ">سجل الان</button> </a>

            
              </div>
}
{isLogin &&
            <div className='carsouleLoginMessage animate__animated animate__backInLeft '>
              <h4> مستعد تطلب الأن؟</h4>
              <br/>
              
              
            
              <br></br>
           <a className='btnlogindeliveryNow' href='AddOrder' ><button className="btn btn-danger m-1 dbutton ">طلب توصيل</button></a>

            
              </div>
}
          <MDBCarouselElement className='carousel-img' src={Car} alt='...' />
          
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </div>
  );
}