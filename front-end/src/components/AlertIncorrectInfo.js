import React from 'react';
import Alert from 'react-bootstrap/Alert';
import {useState} from 'react'

function AlertIncorrectInfo() {
  const [show, setShow] = useState(true);

    if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>خطأ في البيانات</Alert.Heading>
        <p>أحد البيانات المدخلة غير صحيحة</p>
      </Alert>
    );
  }
}
  export default AlertIncorrectInfo

