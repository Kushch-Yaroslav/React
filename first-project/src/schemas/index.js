import * as yup from "yup";

export const SCHEMA = yup.object({
  firstName: yup.string().required().min(1).max(200),
  lastName: yup.string().required().min(1).max(200),
  email: yup.string().email("Поле email должно содержать @ и .").required(),
  pass: yup
    .string()
    .required()
    .min(8)
    .max(200)
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "Pass must contains at least one big letter, one small letter and one special symbol"
    ),
  confirmPass: yup
    .string()
    .oneOf([yup.ref("pass"), null], "Пароли не совпадают")
    .required(),
});

export const SCHEMA_AUTH = yup.object({
  email: yup.string().email("Поле email должно содержать @ и .").required(),
  pass: yup
    .string()
    .required()
    .min(8)
    .max(200)
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "Pass must contains at least one big letter, one small letter and one special symbol"
    ),
});
