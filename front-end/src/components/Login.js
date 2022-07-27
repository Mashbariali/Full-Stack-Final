import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AlertIncorrectInfo from './AlertIncorrectInfo'
import axios from 'axios'


function Login() {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [incorrectInfo, setIncorrectInfo] = useState(false);
    const navigate = useNavigate("")
    



  const loginUser = () => {
    axios
      .post(`https://wasllha2022-django.herokuapp.com/Users/login`, {
        username,
        password
       })
      .then((res) => {
        
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          navigate("/");
          window.location.reload()
        }
      })
      .catch((err) => {
        console.log(err);
        setIncorrectInfo(true)
      });
  };


  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className="col-md-6 mx-auto d-flex flex-column ">
        <h1 className="text-center py-5 mc-5 ">تسجيل الدخول</h1>
        {incorrectInfo &&
          <AlertIncorrectInfo  />
        }
        <input className="form-control mt-3 mb-2" placeholder='اسم المستخدم' onChange={(e) =>{setUserName(e.target.value)}}></input>
        <input className="form-control mt-3 mb-2" type="password" placeholder='كلمة المرور' onChange={(e) =>{setPassword(e.target.value)}}></input>

        <button className="btn btn-primary mt-2" onClick={loginUser}>تسجيل الدخول</button>
        <a href='/register' className='text-center mb-5 mt-4'>إنشاء حساب ؟ </a>
        </div>
        </div>
  )
}

export default Login