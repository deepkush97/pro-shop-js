import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; 2021 Pro-Shop</Col>
        </Row>
      </Container>
    </footer>
  );
};
