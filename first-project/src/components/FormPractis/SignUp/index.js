import React from "react";
import styles from "../SignUp.module.css";
import { SCHEMA } from "../../../schemas";
import { Formik, Form, Field, ErrorMessage } from "formik";

function SignUp(props) {
  const formikSubmit = async (data, formikBag) => {
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.pass,
        }),
      });
    } catch (error) {
      console.error("Не получилось");
    }
    console.log(data, formikBag);
    formikBag.resetForm();
  };

  const inititalValues = {
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    pass: "",
    confirmPass: "",
  };

  // const handlerSubmit = async (data) => {
  //   console.log(data);
  // };

  return (
    <Formik
      onSubmit={formikSubmit}
      initialValues={inititalValues}
      validationSchema={SCHEMA}
    >
      {(formikProps) => {
        return (
          <Form className={styles.form}>
            <Field name="firstName" placeholder="First name" />
            <ErrorMessage name="firstName" />
            <Field name="lastName" placeholder="Last name" />
            <ErrorMessage name="firstName" />
            <Field name="email" placeholder="Email address" />
            <ErrorMessage name="email" />
            <Field type="password" name="pass" placeholder="Password" />
            <ErrorMessage name="pass" />
            <Field
              type="password"
              name="confirmPass"
              placeholder="Password Confirmation"
            />
            <ErrorMessage name="confirmPass" />
            <button type="Submit">SignUp</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignUp;
