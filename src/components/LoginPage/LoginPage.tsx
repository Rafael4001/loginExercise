import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

import { validationSchemaYup } from './LoginPageValidation'


import { loginUser } from "../../services/loginService";
import FormikTextField from './../FormikComponents/FormikTextField'

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
        console.log(`wiek ${results[0].registered?.age} jest wystarczajacy`,)
        setIsLoggedIn(true)
      } else if (results[0]?.registered?.age) {
        console.log(`wiek ${results[0].registered?.age} to za mało !`,)
        setIsLoggedIn(false)
      }

    }
  };


  const logOut = () => {
    setIsLoggedIn(false);
    setUser(null);

  }
  const getPageAfterLogin = () => (
    <div className={classes.pageAfterLoginContainer}>
      <div className={classes.logoutButtonContainer}>
        {/*TODO tutaj zrobic dialog*/}
        <AccountCircle className={classes.iconAccountAvatar}/>
        <h3>Panel Użytkownika</h3>
        <Button onClick={logOut}>
          <ExitToAppIcon/>
        </Button>
      </div>

      <div>
        <span>Witaj <strong>{user}</strong></span>
        <p>Miło mi Cię widzieć.</p>
      </div>
    </div>
  )

  const getLoginPage = () => (
    <div className={classes.mainContainer}>
      <h3>Panel Logowania</h3>

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
            <Form
              onSubmit={handleSubmit}
              className={classes.formContainer}
            >
              <Field
                type="email"
                name="email"
                component={FormikTextField}
                label={EMAIL_TEXT}
              />

              <Field
                type="password"
                name="password"
                component={FormikTextField}
                label={PASSWORD_TEXT}
              />

              <div className={classes.loginButtonContainer}>
                <Button
                  variant="outlined"
                  color="primary"
                  type={"submit"}
                  disabled={isError || isSubmitting}
                >
                  {LOGIN_TEXT}
                </Button>
              </div>
            </Form>

          )
        }}
      </Formik>

      {user && <div>Uzytkownik <strong>{user}</strong> nie istnieje</div>}
    </div>
  )

  if (isLoggedIn) {
    return getPageAfterLogin()
  }

  return getLoginPage()
}

export default LoginPage