import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <Container style={{ border: "1px solid black", padding: "20px" }}>
      <Row style={{ border: "1px solid black", padding: "20px" }}>
        <Col>
          <h1>Hello, Bootstrap!</h1>
        </Col>
      </Row>
      <Row style={{ border: "1px solid black", padding: "20px" }}>
        <Col style={{ border: "1px solid black", padding: "20px" }}>
          <p>This is a left column still works?</p>
        </Col>
        <Col sm={8} style={{ border: "1px solid black", padding: "20px" }}>
          <p>This is a right column</p>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
