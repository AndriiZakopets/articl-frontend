import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import Main from 'components/layout/Main';
import paths from 'router/paths';

export default function AppLayout({ user, children }) {
  return (
    <>
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand as={Link} to={paths.home}>
            ARTICL
          </Navbar.Brand>
          {user}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Button as={Link} to={paths.login}>
                Log in
              </Button>
              <Button className="ml-1" as={Link} to={paths.signUp}>
                Create account
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Main>{children}</Main>
      </Container>
    </>
  );
}
