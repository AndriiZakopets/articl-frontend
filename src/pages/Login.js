import { useFormik } from 'formik';
import { Card, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import paths from 'router/paths';
import InputWithValidation from 'components/form/InputWithValidation';

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email adress.')
    .required('Must enter an email.'),
  password: Yup.string()
    .min(8, 'Password is too short.')
    .max(50, 'Password is too long.')
    .required('Must enter a password.'),
});

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: LoginValidationSchema,

    onSubmit: async (values) => {},
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
            <Card.Title as="h3">Log in</Card.Title>
            <Form noValidate onSubmit={formik.handleSubmit}>
              <InputWithValidation
                label="Email"
                id="email"
                type="email"
                placeholder="Enter email"
                formik={formik}
              />
              <InputWithValidation
                label="Password"
                id="password"
                type="password"
                placeholder="Enter password"
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
            Don’t have an account yet?{' '}
            <Link to={paths.signUp}>Create an account</Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
