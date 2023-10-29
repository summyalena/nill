import React, { useState } from 'react';

// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';

// import styles from './Form.module.css';

function FormPage() {
  const [formValues, setFormValues] = useState(
    { email: '',
    PhoneNumber: '' 
    });

  return (
    // <Formik
    //   initialValues={ formValues }
    //   onSubmit={(values) => handleSubmit(values) }
    //   validationSchema={yup.object().shape({
    //   email: yup.string().email('Not a valid email').required('Email is required'),
    //     PhoneNumber: yup.number().required('PhoneNumber is required'),
    //   })}
    // >
    //   {(formik) => (
    //     <Form className={styles.formContainer}>
    //       <div className={styles.fieldInputs}>
    //         <Field placeholder="Enter your email" 
    //         name="email" 
    //         className={styles.input}
    //         onChange={(e) =>setFormValues(...formValues, {email: e.target.value})} />
    //         <ErrorMessage 
    //         component="span" 
    //         className={styles.ErrorMessage} 
    //         name="email" />
    //       </div>

    //       <div className={styles.fieldInputs}>
    //         <Field placeholder="Enter your phone number" name="name" 
    //         className={styles.input}
    //         onChange={(e) =>setFormValues(...formValues, {email: e.target.value})}/>
    //         <ErrorMessage 
    //         component="span" 
    //         className={styles.ErrorMessage} 
    //         name="email" />
    //       </div>
    //     </Form>
    //   )}
    //   <Button className={styles.formButton}>Join Split</Button>
    // </Formik>
    <form>
      hello
    </form>
  );
}

export default FormPage;
