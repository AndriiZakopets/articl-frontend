import { useFormik } from 'formik';
import { Card, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import paths from 'router/paths';
import InputWithValidation from 'components/form/InputWithValidation';
import * as AuthManager from 'services/AuthManager';
import SignUpValidationSchema from 'models/SignUpValidationSchema';

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      passwordAgain: '',
    },

    validationSchema: SignUpValidationSchema,

    onSubmit: (values) => {
      AuthManager.login();
    },
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
                label="Name"
                id="name"
                type="text"
                placeholder="Enter name"
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
              <Button
                disabled={
                  Object.keys(formik.errors).length > 0 &&
                  Object.keys(formik.touched).length > 0
                }
                variant="primary"
                type="submit"
                block
              >
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <Card className="mt-3 text-center">
          <Card.Body>
            Already have an account? <Link to={paths.login}>Login</Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
