import React, { useState } from "react";
import { Container, Row, Col, Nav, Tab, Card } from "react-bootstrap";

const Legal = () => {
  const [activeKey, setActiveKey] = useState("terms");

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark text-light text-center py-5">
        <Container>
          <h1 className="display-5 fw-bold">Legal Information</h1>
          <p className="lead mt-3">
            Please review our Terms & Conditions and Privacy & Cookies policies before using our services.
          </p>
        </Container>
      </section>

      {/* Legal Tabs */}
      <section className="py-5">
        <Container>
          <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
            <Row>
              <Col md={3} className="mb-4 mb-md-0">
                <Nav variant="pills" className="flex-column shadow-sm rounded bg-light p-3">
                  <Nav.Item>
                    <Nav.Link eventKey="terms">Terms & Conditions</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="privacy">Privacy & Cookies</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              <Col md={9}>
                <Tab.Content>
                  {/* Terms & Conditions */}
                  <Tab.Pane eventKey="terms">
                    <Card className="shadow-sm border-0">
                      <Card.Body>
                        <h3 className="fw-bold mb-3">Terms & Conditions (v4.8)</h3>
                        <p className="text-muted">
                          Welcome to IngredientsWorldwide.com. By accessing or using our services,
                          you agree to comply with and be bound by the following Terms & Conditions.
                        </p>
                        <ul>
                          <li>We act solely as an introducer — not a seller.</li>
                          <li>All supplier content is provided by suppliers.</li>
                          <li>Buyers must confirm compliance, quality, and suitability independently.</li>
                          <li>Unbranded listings hide supplier identity until connection is unlocked.</li>
                          <li>Branded listings display supplier identity and enquiries are free.</li>
                          <li>Use of our services constitutes acceptance of these Terms & Conditions.</li>
                        </ul>
                        <p className="small text-muted mt-3">
                          Last updated: Version 4.8 — balanced wording for buyers and suppliers.
                        </p>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>

                  {/* Privacy & Cookies */}
                  <Tab.Pane eventKey="privacy">
                    <Card className="shadow-sm border-0">
                      <Card.Body>
                        <h3 className="fw-bold mb-3">Privacy & Cookies Policy</h3>
                        <p className="text-muted">
                          IngredientsWorldwide.com respects your privacy and complies with 
                          <strong> UK GDPR </strong> and data protection requirements.
                        </p>
                        <ul>
                          <li>We collect only the minimum personal data required to operate the marketplace.</li>
                          <li>Data is stored securely and never sold to third parties.</li>
                          <li>Cookies are used to improve your browsing experience and to comply with GDPR consent requirements.</li>
                          <li>You may request access, correction, or deletion of your data at any time.</li>
                          <li>Where screening is performed, related documents may be retained for compliance purposes.</li>
                          <li>Our policies align with Hiscox insurance requirements for compliance & risk management.</li>
                        </ul>
                        <p className="small text-muted mt-3">
                          By using this site, you consent to the use of cookies and agree to our Privacy Policy.
                        </p>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>
    </div>
  );
};

export default Legal;
