import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const CommentInput = () => {

  return (
    <div>
      <Container>
        <Row>
          <Col xs={10}>
            <FloatingLabel controlId="floatingInput" label="Comments" className="mb-3">
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>
          </Col>
          <Col xs={2} className="d-grid gap-2">
            <Button variant="primary">
              입력
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CommentInput;