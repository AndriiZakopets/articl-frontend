import { useFormik } from 'formik';
import { Card, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import paths from 'router/paths';
import InputWithValidation from 'components/form/InputWithValidation';

const SignUpValidationSchema = Yup.object().shape({
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

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      email: '',
      nickName: '',
      password: '',
      passwordAgain: '',
    },

    validationSchema: SignUpValidationSchema,

    onSubmit: (values) => {},
  });

  return (
    <Row className="mt-5">
      <Col
        lg={{ span: 6, offset: 3 }}
        md={{ span: 8, offset: 2 }}
        sm={{ span: 12 }}
      >
        <Card>
          <Card.Body>
            <Card.Title as="h3">Sign up</Card.Title>
            <Form onSubmit={formik.handleSubmit}>
              <InputWithValidation
                label="Email"
                id="email"
                type="email"
                placeholder="Enter email"
                formik={formik}
              />
              <InputWithValidation
                label="Nickname"
                id="nickName"
                type="text"
                placeholder="Enter nickname"
                formik={formik}
              />
              <InputWithValidation
                label="Password"
                id="password"
                type="password"
                placeholder="Enter password"
                formik={formik}
              />
              <InputWithValidation
                label="Confirm password"
                id="passwordConfirmation"
                type="password"
                placeholder="Enter password again"
                formik={formik}
              />
              <Button variant="primary" type="submit" block>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <Card className="mt-2 text-center">
          <Card.Body>
            Already have an account? <Link to={paths.login}>Login</Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
