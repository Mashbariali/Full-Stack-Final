import React from 'react'

function AboutSite() {
  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
        {/* Card Bootstrap  */}
    <div className='container cardGroup border border-light'>
    <h1 class="text-center ">لماذا أصبح مندوب؟</h1>

        <div class="card-group m-1">
  <div class="card m-1 border border-light">
    <img src="https://drive.careem.com/assets/images/landing/be_own_boss_icn.svg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">الاستقلالية</h5>
      <p class="card-text">أعمل وقت مايناسبك في المكان اللي يناسبك</p>
    </div>
  </div>
  <div class="card m-1 border border-light">
    <img src="https://drive.careem.com/assets/images/landing/make_your_own_money_icn.svg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">الاستقرار المادي</h5>
      <p class="card-text">استمرار حاجة العميل لك يعني استمرار حصولك على دخل ثابت</p>
    </div>
  </div>
  <div class="card m-1 border border-light">
    <img src="https://drive.careem.com/assets/images/landing/control_life_icn.svg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">تحكم بحياتك </h5>
      <p class="card-text">كن مسؤولاً عن عملك وحقق أهدافك بشروطك</p>
    </div>
  </div>
</div>

    </div>
    </div>
  )
}

export default AboutSite