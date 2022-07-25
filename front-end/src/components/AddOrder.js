import React from 'react'
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
function AddOrder() {
 const [order,setOrder]=useState([])//Must be the same name in the database .
  return (
    <div>
        
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>نوع الطلب</Form.Label>
        <Form>
      <Form.Check 
        type="checkbox"
        id="custom-switch"
        label="طرد كبير"
      />
       <Form.Check 
        type="checkbox"
        id="custom-switch"
        label="طرد وسط"
      />
       <Form.Check 
        type="checkbox"
        id="custom-switch"
        label="طرد صغير"
      />
      </Form>
    <hr/>
    <Form.Label>المدينة</Form.Label>
        <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="من 0 الى 5 ساعات"
      />
       <Form.Check 
        type="switch"
        id="custom-switch"
        label="من 6 الى12  ساعات"
      />
       <Form.Check 
        type="switch"
        id="custom-switch"
        label="من 12 الى ... ساعات"
      />
      <hr/>
      <Form.Select size="sm">
        <option>الرياض</option>
        <option>مكه</option>
        <option>الدمام</option>
        <option>جده</option>
        <option>المدينة</option>
        <option>أبها</option>
        <option>القصيم</option>
        <option>ألاحساء</option>
        <option>جازان</option>
        <option>تبوك</option>
        <option>نجران</option>
        <option>حائل</option>
        <option>الحدود الشمالية</option>
      </Form.Select>
    
    </Form>
<hr/>

      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>ملاحظات </Form.Label>
        <Form.Control type="text" placeholder="أكتب ملاحظاتك !" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       
      </Form.Group>
      <Button variant="primary" type="submit">
        إرسال
      </Button>
   </Form>
   
    </div>
  )
}

export default AddOrder