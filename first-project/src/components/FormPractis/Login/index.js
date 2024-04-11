import React from "react";
import styles from "../SignUp.module.css";
import { SCHEMA_AUTH } from "../../../schemas";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";

function Login(props) {
  const formikSubmit = async (data, formikBag) => {
    try {
      const response = await fetch("http://localhost:5000/users/1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
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
    email: "",
    pass: "",
  };

  return (
    <Formik
      onSubmit={formikSubmit}
      initialValues={inititalValues}
      validationSchema={SCHEMA_AUTH}
    >
      {(formikProps) => {
        return (
          <div className="wrapper">
            <Form className={styles.form}>
              <Field name="email" placeholder="Email address" />
              <ErrorMessage name="email" />
              <Field type="password" name="pass" placeholder="Password" />
              <ErrorMessage name="pass" />
              <button type="submit">LOGIN</button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

export default Login;
