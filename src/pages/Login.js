import { useFormik } from 'formik';
import { Card, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import paths from 'router/paths';

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: (values) => {
      /* eslint-disable-next-line */
      console.log(values);
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
            <Card.Title as="h3">Log in</Card.Title>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </Form.Group>
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
