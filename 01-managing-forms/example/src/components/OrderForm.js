// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// const validateForm = (values) => {
//     const errors = {};
//     if (!values.name) {
//       errors.name = 'Required';
//     } else if (values.name.length < 3) {
//       errors.name = 'Isim cok kisa.';
//     }

//     if (!values.email) {
//       errors.email = 'Required';
//     } else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//     ) {
//       errors.email = 'Invalid email address';
//     }
//     return errors;
// };


const formValidationSchema = Yup.object(
  { 
    name: Yup.string()
      .max(150, 'Adiniz cok uzun, sorry.')
      .min(2, "Adiniz cok kisa")
      .required('bu alan zorunludur.'),
    email: Yup.string().email('Email gecerli degil.')
  }
);


const OrderForm = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ email: '', name: '' }}
      validationSchema={formValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="name" name="name" />
          <ErrorMessage name="name" component="div" />
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default OrderForm