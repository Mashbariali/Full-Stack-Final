import React from 'react'

function Register() {



  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className="col-md-6 mx-auto d-flex flex-column ">
        <h1 className="text-center py-5 mc-5 ">إنشاء حساب جديد</h1>
        <input className="form-control mt-3 mb-2" type="text" placeholder='اسم المستخدم' ></input>
        <input className="form-control mt-3 mb-2" type="text" placeholder='رقم الجوال' ></input>
        <input className="form-control mt-3 mb-2" type="email" placeholder='البريد الالكتروني' ></input>
        <input className="form-control mt-3 mb-2" type="password" placeholder='كلمة المرور' ></input>
        <input className="form-control mt-3 mb-2" type="password" placeholder='اعد كتابة كلمة المرور' ></input>


        <button className="btn btn-primary mt-2" >انشاء الحساب</button>

    </div>
    </div>
  )
}

export default Register