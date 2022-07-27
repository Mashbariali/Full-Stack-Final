import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AlertIncorrectInfo from './AlertIncorrectInfo'

function Join() {
    const [name, setName] = useState('')
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [IdNumber, setIdNumber] = useState("")
    const [PsersonImage, setPersonImage] = useState("")
    const [CarInfo, setCarInfo] = useState("")
    const [CarImage, setCarImage] = useState("")
    const [DrivingLicense, setDrivingLicense] = useState("")
    const [incorrectInfo, setIncorrectInfo] = useState(false);


    
    const navigate = useNavigate("")


    const token =localStorage.getItem("token")
const join=() =>{
  axios.post ('https://wasllha2022-django.herokuapp.com/Delivery/add_Delegate', {
    name,PhoneNumber,IdNumber,PsersonImage,CarInfo,CarImage,DrivingLicense
},{headers: { 'Authorization': `Bearer ${token}`}}).then(res=>{

    alert('تم ارسال طلبكم');
    navigate("/")
  })
  .catch((err) => {
    console.log(err);
    setIncorrectInfo(true)
  });


}

   

  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className="col-md-6 mx-auto d-flex flex-column ">
        <h1 className="text-center py-5 mc-5 ">نموذج الانضمام الى فريق التوصيل</h1>
        <h3 className="text-center py-5 mc-5 ">طلبات الانضمام يتم مراجعتها والموافقة عليها خلال 24 ساعة عمل</h3>
        {incorrectInfo &&
          <AlertIncorrectInfo  />
        }
        <label >الاسم</label>
        <input className="form-control mt-2 mb-3" type="text" onChange={(e)=> {setName(e.target.value);}}></input>
        <label >رقم الجوال</label>
        <input className="form-control mt-2 mb-3" type="text" onChange={(e)=> {setPhoneNumber(e.target.value);}}></input>
        <label >رقم الهوية الوطنية</label>
        <input className="form-control mt-2 mb-3" type="text" onChange={(e)=> {setIdNumber(e.target.value);}}></input>
        <label >صورة شخصية</label>
        <input className="form-control mt-2 mb-3" type="text" onChange={(e)=> {setPersonImage(e.target.value);}}></input>
        <label >رقم لوحة المركبة</label>
        <input className="form-control mt-2 mb-3" type="text" onChange={(e)=> {setCarInfo(e.target.value);}}></input>
        <label >صورة المركبة</label>
        <input className="form-control mt-2 mb-3" type="text" onChange={(e)=> {setCarImage(e.target.value);}}></input>
        <label >رخصة القيادة</label>
        <input className="form-control mt-2 mb-3" type="text" onChange={(e)=> {setDrivingLicense(e.target.value);}}></input>
        <button className="btn btn-primary mt-3" onClick={join} >طلب الانضمام!</button>

      </div>
    </div>
  )
}

export default Join