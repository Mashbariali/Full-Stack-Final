import React from 'react'
// import { Container } from 'react-bootstrap'
function AboutSite() {
  return (
    <div>

        <div data-aos="fade-up">
            <h1>hi ithere</h1>
        </div>
        <br></br>
        <br></br>
        <br></br>
        {/* Card Bootstrap  */}
        <div className='container' >
   
    
        <hr></hr>
     
    <div className='container cardGroup border border-light '>
    <h1 class="text-center ">لماذا أصبح مندوب؟</h1>
        
        <div class="card-group m-1">
  <div class="card m-1 border border-light">
    <img src="https://drive.careem.com/assets/images/landing/be_own_boss_icn.svg" class="card-img-top" alt="..."/>
    <div class="card-body animate__animated animate__bounce">
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
      <h5 class="card-title">تحكم بحياتك </h5>
      <p class="card-text">كن مسؤولاً عن عملك وحقق أهدافك بشروطك</p>
    </div>
  </div>
</div>

{/* الاسئلة المتداولة */}
<br></br>
<br></br>
<hr></hr>
<div className='container questions'>
     
     <div className='container cardGroup border  '>
     <h1 class="text-center "> الاسئلة اكثر شيوعا </h1>
 
         <div class="card-group m-1">
   <div class="card m-1 border border-light">
  
     <div class="card-body animate__animated animate__bounce">
       <h5 class="card-title">كيف اثق في المندوب؟</h5>
       <p class="card-text">أعمل وقت مايناسبك في المكان اللي يناسبك</p>
     </div>
   </div>
   
   <div class="card m-1 border border-light">
     <div class="card-body animate__animated animate__bounce">
       <h5 class="card-title">كيف اضمن وصول الغرض؟</h5>
       <p class="card-text">استمرار حاجة العميل لك يعني استمرار حصولك على دخل ثابت</p>
     </div>
   </div>
   <div class="card m-1 border border-light">
     <div class="card-body animate__animated animate__bounce">
       <h5 class="card-title">مدة التوصيل؟</h5>
       <p class="card-text">كن مسؤولاً عن عملك وحقق أهدافك بشروطك</p>
     </div>
   </div>
 </div>
 </div>
 </div>


    </div>
    <center class='whatWait'>
    <div className='container'>
        <h1>ايش تنتظر؟ </h1>
        <button type="button" class="btn btn-success btnLoginNow">سجل الأن</button>
    </div>
    </center>
    
    </div>
    </div>
  )
}

export default AboutSite