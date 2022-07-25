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

const checkMatchPassword = () =>{
  if (password != rePassword)
  {
    setPasswordIsMatched(true)
  }

  else 
  {
    setPasswordIsMatched(false)
    RegisterUser()
  }
  
}



const RegisterUser=() =>{
  axios.post ('https://62d3e34acd960e45d44f7cdf.mockapi.io/fakeAPI/', {
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
        <input className="form-control mt-3 mb-2" type="password" placeholder='اعد كتابة كلمة المرور' onChange={(e)=> {setRePassword(e.target.value);}}></input>


        <button className="btn btn-primary mt-2" onClick={checkMatchPassword}>انشاء الحساب </button>

    </div>
    </div>
  )
}

export default Register