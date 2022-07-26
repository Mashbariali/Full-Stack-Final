import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Join() {
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState("")
    const [IdNumber, setIdNumber] = useState("")
    const [psersonImage, setPersonImage] = useState("")
    const [carInfo, setCarInfo] = useState("")
    const [carImage, setCarImage] = useState("")
    const [DrivingLicense, setDrivingLicense] = useState("")
    const navigate = useNavigate("")

      


const join=() =>{
  axios.post ('API login', {
    name,phoneNumber,IdNumber,psersonImage,carInfo,carImage,DrivingLicense
  }).then(res=>{
    alert('Successfully Login');
    navigate("/")
  })


}

   

  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className="col-md-6 mx-auto d-flex flex-column ">
        <h1 className="text-center py-5 mc-5 ">نموذج الانضمام الى فريق التوصيل</h1>
        <h3 className="text-center py-5 mc-5 ">طلبات الانضمام يتم مراجعتها والموافقة عليها خلال 24 ساعة عمل</h3>
        <input className="form-control mt-3 mb-2" type="text" placeholder='الاسم'  onChange={(e)=> {setName(e.target.value);}}></input>
        <input className="form-control mt-3 mb-2" type="text" placeholder='رقم الجوال' onChange={(e)=> {setPhoneNumber(e.target.value);}}></input>
        <input className="form-control mt-3 mb-2" type="text" placeholder='رقم الهوية الوطنية' onChange={(e)=> {setIdNumber(e.target.value);}}></input>
        <input className="form-control mt-3 mb-2" type="file" placeholder='صورة شخصية' onChange={(e)=> {setPersonImage(e.target.value);}}></input>
        <input className="form-control mt-3 mb-2" type="text" placeholder='رقم اللوحة' onChange={(e)=> {setCarInfo(e.target.value);}}></input>
        <input className="form-control mt-3 mb-2" type="file" placeholder='صورة السيارة'onChange={(e)=> {setCarImage(e.target.value);}}></input>
        <input className="form-control mt-3 mb-2" type="file" placeholder='رخصة قياده' onChange={(e)=> {setDrivingLicense(e.target.value);}}></input>
        <button className="btn btn-primary mt-2" onClick={join} >طلب الانضمام!</button>
      </div>
    </div>
  )
}

export default Join