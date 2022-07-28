import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import AlertPasswordMatch from './AlertPasswordMatch'
import AlertIncorrectInfo from './AlertIncorrectInfo'

function Register() {
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")
  const [email, setEmail] = useState("")
  const [passwordIsMatched, setPasswordIsMatched] = useState();
  const [incorrectInfo, setIncorrectInfo] = useState(false);
  const navigate = useNavigate("")


  useEffect(() => {

}, [])

const checkMatchPassword = () =>{
  if (password !== rePassword)
  {
    setPasswordIsMatched(true)
  }

  else 
  {
    setPasswordIsMatched(false)
    RegisterUser()
  }
  
}



// const RegisterUser=() =>{
//   axios.post ('http://127.0.0.1:8000/Users/register', {
//     body: JSON.stringify({
//       first_name, last_name, username, password, email
//   })
    
//   }).then(res=>{
//       navigate("/")
//   })


const RegisterUser = () => {
  axios
    .post(`https://wasllha2022-django.herokuapp.com/Users/register`, {
       first_name, last_name, username, password, email
      
    })
    .then((res) => {
      console.log(res);
      console.log(first_name, last_name, username, password, email)
      navigate("/");
    })
    .catch((err) => {
      console.log(err);
      setIncorrectInfo(true)
    });
 
  }

  return (
    <>
    <center>
    <div className='container d-flex justify-content-center align-items-center registerApp animate__animated animate__fadeIn'>
      <div className="col-md-6 mx-auto d-flex flex-column ">
        <h1 className="text-center py-5 mc-5 ">إنشاء حساب جديد</h1>
        {passwordIsMatched &&
          < AlertPasswordMatch />
        }
        {incorrectInfo &&
          <AlertIncorrectInfo  />
        }
        <input className="form-control mt-3 mb-2" type="text" placeholder='الاسم الاول' onChange={(e)=> {setFirstName(e.target.value);}}></input>
        <input className="form-control mt-3 mb-2" type="text" placeholder='الاسم الاخير' onChange={(e)=> {setLastName(e.target.value);}}></input>
        <input className="form-control mt-3 mb-2" type="text" placeholder='اسم المستخدم' onChange={(e)=> {setUserName(e.target.value);}}></input>
        <input className="form-control mt-3 mb-2" type="email" placeholder='البريد الالكتروني' onChange={(e)=> {setEmail(e.target.value);}}></input>
        <input className="form-control mt-3 mb-2" type="password" placeholder='كلمة المرور' onChange={(e)=> {setPassword(e.target.value);}}></input>
        <input className="form-control mt-3 mb-2" type="password" placeholder='اعد كتابة كلمة المرور' onChange={(e)=> {setRePassword(e.target.value);}}></input>


        {/* <button className="btn btn-primary mt-2" onClick={checkMatchPassword}>انشاء الحساب </button> */}

    </div>

    </div>
        <button className="btn btn-primary mt-2 btnRegister" onClick={checkMatchPassword}>انشاء الحساب </button>
        </center>
        </>
  )
}

export default Register