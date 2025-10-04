import React from "react";
import { Container, Row, Col, Badge, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Screening = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark text-light text-center py-5">
        <Container>
          <h1 className="display-5 fw-bold">Screening</h1>
          <p className="lead mt-3">
            Optional checks to give buyers and suppliers greater confidence.
          </p>
        </Container>
      </section>

      {/* What Screening Means */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h2 className="fw-bold mb-3 text-center">What “Screened” Means</h2>
              <p className="text-muted fs-5 text-center">
                Screening involves a set of checks that can be performed on suppliers or buyers. 
                It does not constitute a guarantee or verification of compliance, quality, or suitability. 
                Instead, it provides an additional layer of confidence during sourcing and negotiations.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Badge + Checks */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={6}>
              <Badge bg="success" className="mb-3 p-2 fs-6">Screened</Badge>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <h5 className="fw-bold mb-3">Checks we may complete:</h5>
                  <ul className="list-unstyled text-muted">
                    <li>✔️ Company registration & legal status</li>
                    <li>✔️ Certificates provided (Organic, ISO, Fair Trade, etc.)</li>
                    <li>✔️ Documentation validity & expiry</li>
                    <li>✔️ Basic due diligence on supplier details</li>
                  </ul>
                  <p className="small text-muted mt-3">
                    Note: Screening indicates that checks were completed, not a guarantee or endorsement.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Request Screening CTA */}
      <section className="py-5 text-center">
        <Container>
          <h4 className="fw-bold mb-3">Want to request Screening?</h4>
          <p className="text-muted mb-4">
            Screening is optional, available to both buyers and suppliers as a paid service.
          </p>
          <Button as={Link} to="/contact" variant="primary" size="lg">
            Contact Us to Request Screening
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Screening;
