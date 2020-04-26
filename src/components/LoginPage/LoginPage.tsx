import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { validationSchemaYup } from './LoginPageValidation'

import Button from '@material-ui/core/Button';

import { loginUser } from "../../services/loginService";

import { useStyles } from './LoginPage.style'

import { isEmpty } from '../../utilities'

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

    //this is made for the task

    if (results) {
      setUser(results[0]?.email)

      if (results[0]?.registered?.age > 10) {
        console.log(`wiek ${results[0].registered?.age} jest wystarczajacy`, )
        setIsLoggedIn(true)
      } else if (results[0]?.registered?.age) {
        console.log(`wiek ${results[0].registered?.age} to za mało !`, )
        setIsLoggedIn(false)
      }

    }


  };


  const logOut = () => {
    setIsLoggedIn(false);
    setUser(null);

  }
  const getActualPage = () => (
    <div>
      Witaj <strong>{user}</strong>
      <button onClick={logOut}>Wyloguj</button>
    </div>
  )

  const getLoginPage = () => (
    <div>
      <span>Panel Logowania</span>

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
          }) => {
          const isError = !isEmpty(errors);

          return (
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

              <Button
                variant="outlined"
                color="primary"
                type={"submit"}
                disabled={isError || isSubmitting}
              >
                {LOGIN_TEXT}
              </Button>
            </Form>

          )
        }}
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