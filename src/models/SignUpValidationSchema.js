import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email adress.')
    .required('Must enter an email.'),
  nickName: Yup.string().required('Must enter a name.'),
  password: Yup.string()
    .min(8, 'Password is too short - should be at least 8 characters.')
    .max(50, 'Password is too long - should be less than 50 characters.')
    .required('Must enter a password'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password')],
    'Passwords must match',
  ),
});
