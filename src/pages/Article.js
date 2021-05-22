import { Row, Col, Card } from 'react-bootstrap';

function Article() {
  return (
    <Row className="mt-5">
      <Col
        lg={{ span: 6, offset: 3 }}
        md={{ span: 8, offset: 2 }}
        sm={{ span: 12 }}
      >
        <Card>
          <Card.Body>Article</Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Article;
