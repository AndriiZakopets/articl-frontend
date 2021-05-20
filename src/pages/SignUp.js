import { useFormik } from 'formik';
import { Card, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import paths from 'router/paths';

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      passwordAgain: '',
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
            <Card.Title as="h3">Sign up</Card.Title>
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
                <Form.Label htmlFor="email">Name</Form.Label>
                <Form.Control
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="password">Password Again</Form.Label>
                <Form.Control
                  id="passwordAgain"
                  name="passwordAgain"
                  type="password"
                  placeholder="Repeat password"
                  onChange={formik.handleChange}
                  value={formik.values.passwordAgain}
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
            Already have an account? <Link to={paths.login}>Login</Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
