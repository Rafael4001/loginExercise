import * as Yup from "yup";

export const validationSchemaYup = Yup.object().shape({
  email: Yup.string()
    .email("niepoprawny adres email")
    .required("email jest wymagany"),

  password: Yup.string()
    .required("hasło jest wymagane"),
})