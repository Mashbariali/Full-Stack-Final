import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import AlertPasswordMatch from './AlertPasswordMatch'

function Register() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")
  const [email, setEmail] = useState("")
  const [passwordIsMatched, setPasswordIsMatched] = useState();
  const navigate = useNavigate("")


  useEffect(() => {

}, [])

const checkMatchPassword = (e) =>{
  if (password != e.target.value)
  {
    setPasswordIsMatched(true)
  }

  else 
  {
  }
  
}



const RegisterUser=() =>{
  axios.post ('API login', {
      firstName, lastName, userName, password, email
  }).then(res=>{
      navigate("/")
  })


}

  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className="col-md-6 mx-auto d-flex flex-column ">
        <h1 className="text-center py-5 mc-5 ">إنشاء حساب جديد</h1>
        {passwordIsMatched &&
          < AlertPasswordMatch />
        }
        <input className="form-control mt-3 mb-2" type="text" placeholder='الاسم الاول' onChange={(e)=> {setFirstName(e.target.value);}}></input>
        <input className="form-control mt-3 mb-2" type="text" placeholder='الاسم الاخير' onChange={(e)=> {setLastName(e.target.value);}}></input>
        <input className="form-control mt-3 mb-2" type="text" placeholder='اسم المستخدم' onChange={(e)=> {setUserName(e.target.value);}}></input>
        <input className="form-control mt-3 mb-2" type="email" placeholder='البريد الالكتروني' onChange={(e)=> {setEmail(e.target.value);}}></input>
        <input className="form-control mt-3 mb-2" type="password" placeholder='كلمة المرور' onChange={(e)=> {setPassword(e.target.value);}}></input>
        <input className="form-control mt-3 mb-2" type="password" placeholder='اعد كتابة كلمة المرور' onChange={checkMatchPassword}></input>


        <button className="btn btn-primary mt-2" onClick={RegisterUser}>انشاء الحساب </button>

    </div>
    </div>
  )
}

export default Register