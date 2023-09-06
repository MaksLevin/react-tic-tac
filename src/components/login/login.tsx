import React, { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import * as yup from 'yup';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './login.css';
import { FormValues, LoginPropsType } from '../../core/models/login-model';

const loginValidationSchema = yup.object({
  firstPlayer: yup.string().required('Name is required'),
  secondPlayer: yup.string().required('Name is required'),
});

const Login: FunctionComponent<LoginPropsType> = (props) => {
  const routerNavigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstPlayer: '',
      secondPlayer: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values: FormValues) => {
      props.onUsersLogin({ firstPlayer: values.firstPlayer, secondPlayer: values.secondPlayer });
      routerNavigate('/game');
    },
  });

  return (
    <section className="login">
      <div className="login-wrapper">
        <h1 className="login-title">Set the player names</h1>
        <form className="login-form" onSubmit={formik.handleSubmit} noValidate autoComplete="off">
          <TextField
            id="firstPlayer"
            name="firstPlayer"
            label="First Player"
            value={formik.values.firstPlayer}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstPlayer && Boolean(formik.errors.firstPlayer)}
            helperText={formik.touched.firstPlayer && formik.errors.firstPlayer}
            variant="outlined"
          />

          <TextField
            id="secondPlayer"
            name="secondPlayer"
            label="Second Player"
            value={formik.values.secondPlayer}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.secondPlayer && Boolean(formik.errors.secondPlayer)}
            helperText={formik.touched.secondPlayer && formik.errors.secondPlayer}
            variant="outlined"
          />

          <Button
            className="login-form-submit"
            type="submit"
            variant="outlined"
            disabled={Boolean(formik.errors.firstPlayer || formik.errors.secondPlayer) === true}
          >
            Login
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Login;
