import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';

function AddRating() {

    const [rate, setRate] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate("")

    // if (rate == "راضي جدا")
    // {
    //   setRate(4)
    // }
    // else if (rate == "راضي")
    // {
    //   setRate(3)
    // }
    // else if (rate == "محايد")
    // {
    //   setRate(2) 
    // }
    // else if (rate == "غير راضي")
    // {   
    //   setRate(1)
    // }


const Rating=() =>{

  axios.post ('API Rating endpoint', {
    rate, description
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
        <Form.Select size="sm" >
        <option value={} onChange={(e)=> {setRate(e.target);}}>رضي</option>
        <option onChange={(e)=> {setRate(e.target.value);}}>3</option>
        <option onChange={(e)=> {setRate(e.target.value);}}>2</option>
        <option onChange={(e)=> {setRate(e.target.value);}}>1</option>

      </Form.Select>
        <label >ملاحظات</label>
        <textarea rows="8"
              className="form-control w-100 mt-1" onChange={(e)=> {setDescription(e.target.value);}}
            ></textarea>
           <button className="btn btn-primary mt-3" onClick={Rating} >مشاركة التقييم</button>

           <h1>{description}</h1>
        </div>
      </div>
    </div>

  )
}

export default AddRating