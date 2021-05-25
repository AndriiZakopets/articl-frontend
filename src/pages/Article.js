import { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { articleFactory } from '__mocks__/article';

function Article() {
  const [md, setMd] = useState('');

  return (
    <Row className="mt-5">
      <Col
        lg={{ span: 6, offset: 3 }}
        md={{ span: 8, offset: 2 }}
        sm={{ span: 12 }}
      >
        <Card>
          <Card.Body>
            <pre>{JSON.stringify(articleFactory(), null, 2)}</pre>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Article;
