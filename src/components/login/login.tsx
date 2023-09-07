import React, { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { FormValues } from '../../core/models/login-model';
import { loginValidationSchema } from './login-utils';
import { UsersData } from '../../core/models/user-model';

import './login.scss';

type LoginPropsType = {
  onUsersLogin(usersData: UsersData): any;
};

const Login: FunctionComponent<LoginPropsType> = ({ onUsersLogin }) => {
  const routerNavigate = useNavigate();

  const initialValues = {
    firstPlayer: '',
    secondPlayer: '',
  };

  const submitForm = (values: FormValues) => {
    onUsersLogin({ firstPlayer: values.firstPlayer, secondPlayer: values.secondPlayer });
    routerNavigate('/game');
  };

  const formikConfig = {
    initialValues,
    validationSchema: loginValidationSchema,
    onSubmit: submitForm,
  };

  const formik = useFormik(formikConfig);

  const { handleSubmit, values, handleChange, handleBlur, touched, errors } = formik;
  return (
    <section className="login">
      <div className="login-wrapper">
        <h1 className="login-title text-h2">Set the player names</h1>
        <form className="login-form" onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField
            id="firstPlayer"
            name="firstPlayer"
            label="First Player"
            value={values.firstPlayer}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.firstPlayer && !!errors.firstPlayer}
            helperText={touched.firstPlayer && errors.firstPlayer}
            variant="outlined"
          />

          <TextField
            id="secondPlayer"
            name="secondPlayer"
            label="Second Player"
            value={values.secondPlayer}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.secondPlayer && !!errors.secondPlayer}
            helperText={touched.secondPlayer && errors.secondPlayer}
            variant="outlined"
          />

          <Button
            className="login-form-submit"
            type="submit"
            variant="outlined"
            disabled={!!(errors.firstPlayer || errors.secondPlayer) === true}
          >
            Login
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Login;
