import React from 'react'
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap';
function AddOrder() {
 const [PackageType, setPackageType] = useState();
 const [FromWhichCity, setFromWhichCity] = useState();
 const [ToWhichCity, setToWhichCity] = useState();
 const [DeliveryTime, setDeliveryTime] = useState();
 const [Description, setDescription] = useState();


 const navigate = useNavigate("")


 const token =localStorage.getItem("token")


 const SendOrder=() =>{
   axios.post (' https://wasllha2022-django.herokuapp.com/Delivery/add_Order', {
    PackageType, FromWhichCity, ToWhichCity, DeliveryTime, Description
   },{headers: { 'Authorization': `Bearer ${token}`}}).then(res=>{
     alert('تم إرسال طلبكم ، سيتم نقلك الى الشات');
     navigate("/chat")
   })
 
 
 }



  return (
    <div>
      <div className='container addOrder animate__animated animate__backInUp'>
        <label >حجم الطرد</label>
        <Form.Select size="sm" onChange={(e) => setPackageType(e.target.value)}>
        <option value="غير محدد">قم بالإختيار</option>
        <option value="طرد صغير">صغير</option>
        <option value="طرد متوسط">وسط</option>
        <option value="طرد كبير">كبير</option>


      </Form.Select>
      <label >التوصيل خلال مدة:</label>
        <Form.Select size="sm" onChange={(e) => setDeliveryTime(e.target.value)}>
        <option value="غير محدد">قم بالإختيار</option>
        <option value="0-5h">من 0-5 ساعة</option>
        <option value="6-12h">من 6-12 ساعة</option>
        <option value="+12h">اكثر من 12 ساعة</option>
      </Form.Select>

      <label >من مدينة:</label>
        <Form.Select size="sm" onChange={(e) => setFromWhichCity(e.target.value)}>
        <option value="غير محدد">قم بالإختيار</option>
        <option value="الرياض">الرياض</option>
        <option value="مكة">مكة</option>
        <option value="الدمام">الدمام</option>
        <option value="جدة">جدة</option>
        <option value="المدينة">المدينة</option>
        <option value="أبها">أبها</option>
        <option value="جازان">جازان</option>
        <option value="تبوك">تبوك</option>
        <option value="نجران">نجران</option>
        <option value="حائل">حائل</option>
        <option value="الحدود الشماليه">الحدود الشمالية</option>

      </Form.Select>


      <label >الى مدينة:</label>
        <Form.Select size="sm" onChange={(e) => setToWhichCity(e.target.value)}>
        <option value="غير محدد">قم بالإختيار</option>
        <option value="الرياض">الرياض</option>
        <option value="مكة">مكة</option>
        <option value="الدمام">الدمام</option>
        <option value="جدة">جدة</option>
        <option value="المدينة">المدينة</option>
        <option value="أبها">أبها</option>
        <option value="جازان">جازان</option>
        <option value="تبوك">تبوك</option>
        <option value="نجران">نجران</option>
        <option value="حائل">حائل</option>
        <option value="الحدود الشماليه">الحدود الشمالية</option>
      </Form.Select>

      <label >ملاحظات</label>
        <textarea rows="8"
              className="form-control w-100 mt-1" onChange={(e)=> {setDescription(e.target.value);}}
            ></textarea>

</div>  
<center><button className="btn btn-primary mt-2 addOrderButton" onClick={SendOrder}>ارسال الطلب</button>
</center> 

</div>
  )
}

export default AddOrder