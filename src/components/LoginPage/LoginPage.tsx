import * as React from 'react';
import { Formik, Field, Form } from 'formik';

import { validationSchemaYup } from './LoginPageValidation'

import { useStyles } from './LoginPage.style'


const PASSWORD_TEXT = "Hasło";
const EMAIL_TEXT = "Email";
const LOGIN_TEXT = "Zaloguj";


interface FormValues {
  email: string;
  password: string;
}

const LoginPage: React.FC<{}> = () => {
  const classes = useStyles();

  const initialValues: FormValues = {
    password: '',
    email: '',
  }

  return (
    <div>
      Zaloguj się

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log('wysylam', values)
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
                className={errors.password && touched.password &&  classes.error}
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
    </div>
  )
}

export default LoginPage