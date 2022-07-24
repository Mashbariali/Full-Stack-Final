import React, { useState } from 'react'

function Join() {

    const [image, setImage] = useState('')

    const attachedImage = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
        console.log(e)
  
      };



  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className="col-md-6 mx-auto d-flex flex-column ">
        <h1 className="text-center py-5 mc-5 ">نموذج الانضمام الى فريق التوصيل</h1>
        <h3 className="text-center py-5 mc-5 ">طلبات الانضمام يتم مراجعتها والموافقة عليها خلال 24 ساعة عمل</h3>
        <input className="form-control mt-3 mb-2" type="text" placeholder='الاسم الاول' ></input>
        <input className="form-control mt-3 mb-2" type="text" placeholder='الاسم الاخير' ></input>
        <input className="form-control mt-3 mb-2" type="text" placeholder='رقم الهوية الوطنية' ></input>
        <input className="form-control mt-3 mb-2" type="text" placeholder='اسم المركبة' ></input>
        <input className="form-control mt-3 mb-2" type="text" placeholder='رقم اللوحة' ></input>
        <input className="form-control mt-3 mb-2" type="file" placeholder='صورة للمركبة' onChange={attachedImage} ></input>

        
       <img src={image} />


        <button className="btn btn-primary mt-2" >طلب الانضمام!</button>

    </div>
    </div>
  )
}

export default Join