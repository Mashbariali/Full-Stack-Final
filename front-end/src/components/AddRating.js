import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';

function AddRating() {

    const [rate, setRate] = useState("")
    const [Description, setDescription] = useState("")
    const [val, setVal] = useState(4);
    const navigate = useNavigate("")

    const token =localStorage.getItem("token")

const Rating=() =>{

  axios.post ('http://127.0.0.1:8000/Delivery/add_DelegateRating', {
    rate, Description
  },{headers: { 'Authorization': `Bearer ${token}`}}).then(res=>{
  axios.post ('API Rating endpoint', {
    rate, Description
  }).then(res=>{
    // alert('Successfully Login');
    navigate("/")
  })

}
  return (
    <div>
         <div className='container d-flex justify-content-center align-items-center'>
      <div className="col-md-6 mx-auto d-flex flex-column ">
        <h1 className="text-center py-5 mc-5 ">تقييمك يهمنا</h1>
        <h3 className="text-center py-5 mc-5 ">مامدى رضاك عن تجربة التوصيل ؟</h3>
        <label >مدى الرضى</label>
        <Form.Select size="sm" onChange={(e) => setRate(e.target.value)}>
        <option value="4">راض جداً</option>
        <option value="3">راض</option>
        <option value="2">محايد</option>
        <option value="1">غير راض</option>



      </Form.Select>
        <label >ملاحظات</label>
        <textarea rows="8"
              className="form-control w-100 mt-1" onChange={(e)=> {setDescription(e.target.value);}}
            ></textarea>
           <button className="btn btn-primary mt-3" onClick={Rating} >مشاركة التقييم</button>
           <h1>{val}</h1>
        </div>
      </div>
    </div>

  )
}

export default AddRating