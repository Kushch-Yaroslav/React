import React from "react";
import styles from "./SignUp.module.css";
import { SCHEMA } from "../../schemas";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { th } from "date-fns/locale";

function SignUpForm(props) {
  const formikSubmit = (data, formikBag) => {
    console.log(data, formikBag);
    formikBag.resetForm();
  };

  const inititalValues = {
    firstName: "",
    lastName: "",
    email: "",
    pass: "",
  };
  return (
    <Formik
      onSubmit={formikSubmit}
      initialValues={inititalValues} // Значение name с которым работать
      validationSchema={SCHEMA} // Подключение инструкций проверки
    >
      {(formikProps) => {
        return (
          <Form className={styles.form}>
            <Field name="firstName" placeholder="firstName" />
            <ErrorMessage name="firstName" />
            <Field name="lastName" placeholder="lastName" />
            <ErrorMessage name="lastName" />
            <Field name="email" placeholder="email" />
            <ErrorMessage name="email" />
            <Field name="pass" placeholder="pass" />
            <ErrorMessage name="pass" />
            <button type="Submit">Send</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignUpForm;
