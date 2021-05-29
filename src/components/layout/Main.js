import { Row, Col } from 'react-bootstrap';

export default function Main({ children }) {
  return (
    <Row>
      <Col sm="12" md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
        {children}
      </Col>
    </Row>
  );
}
