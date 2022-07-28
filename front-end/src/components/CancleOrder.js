import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';

function CancelOrder() {

  const [Cancel, setCancel] = useState("")
  const [Description, setDescription] = useState("")
    const navigate = useNavigate("")

    const token =localStorage.getItem("token")

    const CancelOrderFunction=() =>{
    axios.post ('https://wasllha2022-django.herokuapp.com/Delivery/Cancelling_Order', {
      Cancel, Description
  },{headers: { 'Authorization': `Bearer ${token}`}}).then(res=>{
  }).then(res=>{
    
    navigate("/")
  })
  
}
 
    
    

  return (
    <div>
         <div className='container d-flex justify-content-center align-items-center'>
      <div className="col-md-6 mx-auto d-flex flex-column ">
        <h1 className="text-center py-5 mc-5 ">رأيك يهمنا</h1>
        <h3 className="text-center py-5 mc-5 ">ماسبب الغاء الطلب؟</h3>
        

        <label >السبب</label>
        <Form.Select size="sm" onChange={(e) => setCancel(e.target.value)}>
        <option value="غير محدد">قم بالاختيار</option>
        <option value="السعر غير مناسب">السعر غير</option>
        <option value="المندوب غير مناسب">المندوب غير مناسب</option>
        <option value="غير ذلك">غير ذلك</option>

      </Form.Select>
        <textarea rows="8"
              className="form-control w-100 mt-1" onChange={(e)=> {setDescription(e.target.value);}}
            ></textarea>
           <button className="btn btn-primary mt-3 btnReport" onClick={CancelOrderFunction} >مشاركة التقييم</button>
        </div>
      </div>
    </div>

  )
}

export default CancelOrder;
