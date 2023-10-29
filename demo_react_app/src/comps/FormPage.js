import React, { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Button from "./Button";

import styles from "../App.css";

function FormPage() {
  const [formValues, setFormValues] = useState({ email: "", PhoneNumber: "" });

  const handleSubmit = (values) => {};

  return (
    <>
      <Formik
        initialValues={formValues}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .email("Not a valid email")
            .required("Email is required"),
          PhoneNumber: yup.number().required("PhoneNumber is required"),
        })}
      >
        {() => (
          <Form className='formContainer'>
            <div className='fieldInputs'>
              <Field
                placeholder="Enter your email"
                name="email"
                className='input'
                onChange={(e) =>
                  setFormValues( { email: e.target.value })
                }
              />
              <ErrorMessage
                component="span"
                className='ErrorMessage'
                name="email"
              />
            </div>

            <div className='fieldInputs'>
              <Field
                placeholder="Enter your phone number"
                name="name"
                className='input'
                onChange={(e) =>
                  setFormValues( { PhoneNumber: e.target.value })
                }
              />
              <ErrorMessage
                component="span"
                className={styles.ErrorMessage}
                name="email"
              />
            </div>
            <Button className='formButton'>Join Split</Button>
          </Form>
          
        )}
      
      </Formik>
    </>
  );
}

export default FormPage;
