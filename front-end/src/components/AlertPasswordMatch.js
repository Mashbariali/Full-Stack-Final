import React from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertPasswordMatch() {

    return (
      <Alert variant="danger"  dismissible>
        <Alert.Heading>خطأ في البيانات</Alert.Heading>
        <p>كلمة المرور غير متطابقة</p>
      </Alert>
    );
  }

  export default AlertPasswordMatch

