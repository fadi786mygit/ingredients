import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="text-center">
          <Col>
            <p className="mb-2">
              © {new Date().getFullYear()} IngredientsWorldwide.com
            </p>
            <p className="small mb-1">
              Introducer only (not a seller). Supplier-provided information. 
              Buyers must verify compliance and suitability.
            </p>
            <div>
              <Link to="/legal" className="text-light me-3">
                Terms & Conditions
              </Link>
              <Link to="/legal" className="text-light">
                Privacy & Cookies
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
