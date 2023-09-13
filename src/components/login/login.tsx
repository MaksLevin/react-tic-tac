import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';

import { loginValidationSchema } from './login-utils';
import { UsersData } from '../../core/models/user-model';
import {
  fetchUserAvatarSuccess,
  getLoginUserSuccess,
} from '../../core/store/login/actionCreators/users-login.actionCreators';
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

  const submitForm = useCallback(async (values: UsersData) => {
    dispatch(getLoginUserSuccess(values));
    routerNavigate('/game');

    if (values.playerAvatar) {
      await fetchWrapper.post('/users', { id: 1, playerAvatar: values.playerAvatar });
      dispatch(fetchUserAvatarSuccess());
    }
  }, []);

  const formikConfig = useMemo(() => {
    return {
      initialValues,
      validationSchema: loginValidationSchema,
      onSubmit: submitForm,
    };
  }, [initialValues, submitForm]);

  const formik = useFormik(formikConfig);

  const { handleSubmit, values, handleChange, handleBlur, touched, errors, setFieldValue } = formik;

  const VisuallyHiddenInput = styled('input')`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    white-space: nowrap;
    width: 1px;
  `;

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
              onChange={(e) => {
                const fileReader = new FileReader();
                fileReader.onload = () => {
                  if (fileReader.readyState === 2) {
                    setFieldValue('playerAvatar', fileReader.result);
                  }
                };
                if (!e.target.files) return;
                fileReader.readAsDataURL(e.target.files[0]);
              }}
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
