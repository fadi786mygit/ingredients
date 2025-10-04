import React, { useState } from "react";
import { Container, Row, Col, Nav, Tab, Card, Form, Button } from "react-bootstrap";

const Contact = () => {
  const [activeKey, setActiveKey] = useState("general");

  const renderForm = (type) => (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder={`Subject for ${type}`} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Type your message here..." required />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark text-light text-center py-5">
        <Container>
          <h1 className="display-5 fw-bold">Contact Us</h1>
          <p className="lead mt-3">We’d love to hear from you — please choose the right enquiry type below.</p>
        </Container>
      </section>

      {/* Contact Tabs */}
      <section className="py-5">
        <Container>
          <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
            <Row>
              {/* Sidebar */}
              <Col md={3} className="mb-4 mb-md-0">
                <Nav variant="pills" className="flex-column shadow-sm rounded bg-light p-3">
                  <Nav.Item>
                    <Nav.Link eventKey="general">General Enquiry</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="press">Press</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="partner">Partner</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="legal">Legal</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              {/* Form Content */}
              <Col md={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="general">
                    <Card className="shadow-sm border-0">
                      <Card.Body>
                        <h3 className="fw-bold mb-3">General Enquiry</h3>
                        {renderForm("General")}
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="press">
                    <Card className="shadow-sm border-0">
                      <Card.Body>
                        <h3 className="fw-bold mb-3">Press Enquiry</h3>
                        {renderForm("Press")}
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="partner">
                    <Card className="shadow-sm border-0">
                      <Card.Body>
                        <h3 className="fw-bold mb-3">Partner Enquiry</h3>
                        {renderForm("Partner")}
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="legal">
                    <Card className="shadow-sm border-0">
                      <Card.Body>
                        <h3 className="fw-bold mb-3">Legal Enquiry</h3>
                        {renderForm("Legal")}
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>

      {/* SLA Note */}
      <section className="py-4 bg-light">
        <Container>
          <p className="small text-muted text-center">
            We aim to respond promptly.
          </p>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
