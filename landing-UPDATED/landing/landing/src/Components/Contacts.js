import React, {useRef}from 'react';
import "./contact.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from 'formik';
import * as yup from "yup";
import emailjs from 'emailjs-com';

const formValidationSchema = yup.object({
  name: yup.string().required("why not fill this name?"),
  email: yup.string().required("why not fill this email?").email('Invalid email format'),
  message: yup.string().required("why not fill this message?").max(60, "Too much message"),
})

function Contacts() {
  const formRef = useRef(null);

  const {handleSubmit, values, handleBlur, handleChange, touched, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values,{resetForm}) => {
      if (formRef.current) {        
      emailjs.sendForm("service_4f82dgm", "template_rsn2i1i", formRef.current, "CiRd3gQiKLeOGUUM7")
      .then((result) => {
        console.log(result.text);
        alert("Email sent successfully!");
        resetForm();
      }, (error) => {
        console.log(error.text);
        alert("Failed to send email.")
      });
    }
    },
  });



  return (
    <div className='contact-container'>
      <div className='title-contact' data-aos="fade-down" data-aos-duration="2000"></div>
      <div className='page' id='Contact' data-aos="zoom-in" data-aos-duration="1500">
        <form ref={formRef} className='form' onSubmit={handleSubmit}>
        <TextField
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && errors.name ? true : false}
          helperText={touched.name && errors.name ? errors.name : null}
          label="Name"
          variant="outlined"
        />
        <TextField
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && errors.email ? true : false}
          helperText={touched.email && errors.email ? errors.email : null}
          label="Email"
          variant="outlined"
        />
        <TextField
          name="message"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.message && errors.message ? true : false}
          helperText={touched.message && errors.message ? errors.message : null}
          label="Message"
          multiline rows={5}
        />
        <Button type="submit" variant="contained" className='button'>
          Submit
        </Button>
        </form>
      </div>
    </div>
  )
}

export default Contacts

