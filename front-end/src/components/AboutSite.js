import {React, useState, useEffect} from 'react'
import { Button } from 'react-bootstrap'
// import { Container } from 'react-bootstrap'
function AboutSite() {
  const [isLogin, setIsLogin] = useState(true)

  useEffect(() => {
    if (localStorage["token"]){
      setIsLogin(true)
    }
    else {
      setIsLogin(false)
    }
  

}, [isLogin] )

  return (
    <div>

        {/* <div data-aos="fade-up">
            <h1>hi ithere</h1>
        </div> */}
        <br></br>
        <br></br>
        <br></br>
        {/* Card Bootstrap  */}
        <div className='container text-dark' >
      { !isLogin &&
      <>
      <center>
      <h1>لماذا أصبح عميل؟</h1>
      </center>
        <hr></hr>
        <div class="card-group m-1">
  <div class="card m-1 border border-light">
    <img src="https://gogeticon.net/files/233668/62c96bcef18a9d1d3ad2d4015490f3be.png" class="card-img-top" alt="..."/>
    <div class="card-body animate__animated animate__bounce">
      <h5 class="card-title">السرعة</h5>
      <p class="card-text">طلبك  معنا يوصل اسرررع شي</p>
    </div>
  </div>

  
  
  
  <div class="card m-1 border border-light">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQARa52WQxkD_ixrbRAVXmgqnH_W59Z6iohvA&usqp=CAU" class="card-img-top" alt="..."/>
    <div class="card-body animate__animated animate__bounce">
      <h5 class="card-title">الأمان</h5>
      <p class="card-text">شحنتك في ايدي امينة</p>
    </div>
  </div>
  
  <div class="card m-1 border border-light">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReOW3y0PVkI03u1bWWsrpuSjuwyDOAI-QSiQ&usqp=CAU" class="card-img-top" alt="..."/>
    <div class="card-body animate__animated animate__bounce">
      <h5 class="card-title">السعر </h5>
      <p class="card-text">السعر والجودة الافضل</p>
    </div>
  </div>
</div>

<hr></hr>
<br></br>

<center class='whatWait'>
    <div className='container'>
        <h1>ايش تنتظر؟ </h1>
        <Button className='btn btn-danger m-1 dbutton' a href='/login' variant="danger" > سجل الأن</Button>
              
    </div>
    </center>

        <hr></hr>
        <br></br>
     
        </>
     }
    <div className='container cardGroup border border-light '>
    <h1 class="text-center ">لماذا أصبح مندوب؟</h1>
        
        <div class="card-group m-1 ">
  <div class="card m-1 border border-light container">
    <img src="https://drive.careem.com/assets/images/landing/be_own_boss_icn.svg" class="card-img-top" alt="..."/>
    <div class="card-body animate__animated animate__bounce ">
      <h5 class="card-title">الاستقلالية</h5>
      <p class="card-text">أعمل وقت مايناسبك في المكان اللي يناسبك</p>
    </div>
  </div>
  
  
  <div class="card m-1 border border-light">
    <img src="https://drive.careem.com/assets/images/landing/make_your_own_money_icn.svg" class="card-img-top" alt="..."/>
    <div class="card-body animate__animated animate__bounce">
      <h5 class="card-title">زيادة دخل</h5>
      <p class="card-text">استمرار حاجة العميل لك يعني استمرار حصولك على دخل ثابت</p>
    </div>
  </div>
  <div class="card m-1 border border-light">
    <img src="https://drive.careem.com/assets/images/landing/control_life_icn.svg" class="card-img-top" alt="..."/>
    <div class="card-body animate__animated animate__bounce">
      <h5 class="card-title">النسبة</h5>
      <p class="card-text">نسبة وصلها 3% من قيمة توصيل الطلب</p>
    </div>
  </div>
</div>

{/* الاسئلة المتداولة */}
<br></br>
<br></br>
<hr></hr>
<center class='whatWait'>
    <div className='container'>
        <h1>ايش تنتظر؟ </h1>
        <Button className='btn btn-danger m-1 dbutton' a href='/join' variant="danger" >انضم الان</Button>
              
    </div>
    </center>
    <br></br>
    <hr></hr>
<div className='container questions'>
     
     <div className='container cardGroup border  '>
     <h1 class="text-center "> الاسئلة اكثر شيوعا </h1>
 
         <div class="card-group m-1">
   <div class="card m-1 border border-light">
  
     <div class="card-body animate__animated animate__bounce">
       <h5 class="card-title">كيف اثق في المندوب؟</h5>
       <p class="card-text">تقدر تشوف معلومات المندوب وتقييماته</p>
     </div>
   </div>
   
   <div class="card m-1 border border-light">
     <div class="card-body animate__animated animate__bounce">
       <h5 class="card-title">كيف اضمن وصول الغرض؟</h5>
       <p class="card-text">تقدر تتبع شحنتك الى مكان الوصول</p>
     </div>
   </div>
   <div class="card m-1 border border-light">
     <div class="card-body animate__animated animate__bounce">
       <h5 class="card-title">مدة التوصيل؟</h5>
       <p class="card-text">اقصى مدة توصيل عندنا 24 ساعة</p>
     </div>
   </div>
 </div>
 </div>
 </div>


    </div>
   
    
    </div>
    </div>
  )
}

export default AboutSite