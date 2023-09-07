import * as yup from 'yup';

export const loginValidationSchema = yup.object({
  firstPlayer: yup.string().required('Name is required'),
  secondPlayer: yup.string().required('Name is required'),
});
