import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';

import { VisuallyHiddenInput, loginValidationSchema } from './login-utils';
import { UsersData } from '../../core/models/user-model';
import {
  fetchUserAvatarSuccess,
  getLoginUserSuccess,
  postUserAvatarSuccess,
} from '../../core/store/login/users-login.actionCreators';
import { fetchWrapper } from '../../core/api/api';

import './login.scss';

const Login: FunctionComponent = () => {
  const dispatch = useDispatch();

  const routerNavigate = useNavigate();

  const initialValues: UsersData = {
    firstPlayer: '',
    secondPlayer: '',
    playerAvatar: '',
  };

  const submitForm = useCallback(
    (values: UsersData) => {
      dispatch(getLoginUserSuccess(values));
      routerNavigate('/game');

      if (values.playerAvatar) {
        dispatch(postUserAvatarSuccess(values.playerAvatar));
      }
      dispatch(fetchUserAvatarSuccess());
    },
    [dispatch]
  );

  const formikConfig = useMemo(() => {
    return {
      initialValues,
      validationSchema: loginValidationSchema,
      onSubmit: submitForm,
    };
  }, [submitForm]);

  const formik = useFormik(formikConfig);

  const handleUploadFile = useCallback((e: any) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        setFieldValue('playerAvatar', fileReader.result);
      }
    };
    if (!e.target.files) return;
    fileReader.readAsDataURL(e.target.files[0]);
  }, []);

  const { handleSubmit, values, handleChange, handleBlur, touched, errors, setFieldValue } = formik;

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

          <Button component="label" variant="contained" href="#file-upload">
            Upload a player avatar
            <VisuallyHiddenInput
              type="file"
              id="playerAvatar"
              name="playerAvatar"
              onChange={handleUploadFile}
            />
          </Button>

          <Button
            className="login-form-submit"
            type="submit"
            variant="outlined"
            disabled={!!(errors.firstPlayer || errors.secondPlayer)}
          >
            Login
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Login;
