import { Link } from 'react-router-dom';

import Main from 'components/layout/Main';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import paths from 'router/paths';
import { logout } from 'services/AuthManager';

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
              <Button onClick={() => logout()}>Log out</Button>
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
