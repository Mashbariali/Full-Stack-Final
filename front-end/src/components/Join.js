import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Join() {
    const [image,setImage] = useState('')
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState("")
    const [IdNumber, setIdNumber] = useState("")
    const [psersonImage, setPersonImage] = useState("")
    const [carInfo, setCarInfo] = useState("")
    const [carImage, setCarImage] = useState("")
    const [DrivingLicense, setDrivingLicense] = useState("")
    const navigate = useNavigate("")

    const token =localStorage.getItem("token")

const join=() =>{
  axios.post ('http://127.0.0.1:8000/Delivery/add_Delegate', {
    name,phoneNumber,IdNumber,psersonImage,carInfo,carImage,DrivingLicense
  },{headers: { 'Authorization': `Bearer ${token}`}}).then(res=>{
    alert('Successfully Login');
    navigate("/")
  })


}

   

  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className="col-md-6 mx-auto d-flex flex-column ">
        <h1 className="text-center py-5 mc-5 ">نموذج الانضمام الى فريق التوصيل</h1>
        <h3 className="text-center py-5 mc-5 ">طلبات الانضمام يتم مراجعتها والموافقة عليها خلال 24 ساعة عمل</h3>
        <label >الاسم</label>
        <input className="form-control mt-2 mb-3" type="text" onChange={(e)=> {setName(e.target.value);}}></input>
        <label >رقم الجوال</label>
        <input className="form-control mt-2 mb-3" type="text" onChange={(e)=> {setPhoneNumber(e.target.value);}}></input>
        <label >رقم الهوية الوطنية</label>
        <input className="form-control mt-2 mb-3" type="text" onChange={(e)=> {setIdNumber(e.target.value);}}></input>
        <label >صورة شخصية</label>
        <input className="form-control mt-2 mb-3" type="file" onChange={(e)=> {setPersonImage(e.target.value);}}></input>
        <label >رقم لوحة المركبة</label>
        <input className="form-control mt-2 mb-3" type="text" onChange={(e)=> {setCarInfo(e.target.value);}}></input>
        <label >صورة المركبة</label>
        <input className="form-control mt-2 mb-3" type="file" onChange={(e)=> {setCarImage(e.target.value);}}></input>
        <label >رخصة القيادة</label>
        <input className="form-control mt-2 mb-3" type="file" onChange={(e)=> {setDrivingLicense(e.target.value);}}></input>
        <button className="btn btn-primary mt-3" onClick={join} >طلب الانضمام!</button>
      </div>
    </div>
  )
}

export default Join