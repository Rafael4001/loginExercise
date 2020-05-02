import * as Yup from "yup";

const passwordLength = 5;

export const validationSchemaYup = Yup.object().shape({
  email: Yup.string()
    .email("Niepoprawny adres email")
    .required("email jest wymagany"),

  password: Yup.string()
    .min(passwordLength, `Hasło musi składać się z co najmniej ${passwordLength} znakow`)
    .required("Hasło jest wymagane"),
})