import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';

import { validationSchemaYup } from './LoginPageValidation'

import { loginUser } from "../../services/loginService";

import { useStyles } from './LoginPage.style'
import { boolean } from "yup";


const PASSWORD_TEXT = "Hasło";
const EMAIL_TEXT = "Email";
const LOGIN_TEXT = "Zaloguj";

interface FormValues {
  email: string;
  password: string;
}

const LoginPage: React.FC<{}> = () => {
  const classes = useStyles();

  //  to wyniesc do Redux
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  const initialValues: FormValues = {
    password: '',
    email: '',
  }

  const handleSubmit = async (values: FormValues) => {
    const results = await loginUser();
    console.log('result tutaj', results)


    //this is made for the task
    if (results && results[0]?.registered?.age > 10) {
      await console.log(results[0]?.registered)
      setIsLoggedIn(true)
      console.log('results[0]?.email', results[0]?.email)
      setUser(results[0]?.email)

    } else if (results && results[0]?.registered?.age) {
      setIsLoggedIn(false)
      setUser(results[0]?.email)
    }
  };


  const getActualPage = () => (
    <div>
      Witaj <strong>{user}</strong>
      <button onClick={() => setIsLoggedIn(false)}>Wyloguj</button>
    </div>
  )

  const getLoginPage = () => (
    <div>
      Zaloguj się

      <Formik
        initialValues={initialValues}
        onSubmit={(values, {resetForm}) => {
          handleSubmit(values)
          resetForm()
        }}
        validationSchema={validationSchemaYup}
      >
        {({
            errors,
            handleSubmit,
            isSubmitting,
            touched,
          }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              <label>{EMAIL_TEXT}</label>
              <Field
                type="email"
                name="email"
                className={errors.email && touched.email && classes.error}
              />
              {touched.email && errors.email && <div>{errors.email}</div>}
            </div>

            <div>
              <label>{PASSWORD_TEXT}</label>
              <Field
                type="password"
                name="password"
                className={errors.password && touched.password && classes.error}
              />
              {touched.password && errors.password && <div>{errors.password}</div>}
            </div>

            <button
              type={"submit"}
              disabled={isSubmitting}
            >
              {LOGIN_TEXT}
            </button>
          </Form>
        )}
      </Formik>

      {user && <div>Uzytkownik <strong>{user}</strong> nie istnieje</div>}
    </div>
  )

  if (isLoggedIn) {
    return getActualPage()
  }

  return getLoginPage()
}

export default LoginPage