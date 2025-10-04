import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark text-light text-center py-5">
        <Container>     
          <h1 className="display-4 fw-bold mb-3">   
            The B2B marketplace for ingredients & raw materials
          </h1>
          <p className="lead mb-4">
            List products free (unbranded) or boost visibility with branded plans. Screening is optional.
          </p>
          <div>
            <Button variant="primary" size="lg" className="me-3">
              Upload Products (Free, Unbranded)
            </Button>
            <Button variant="outline-light" size="lg">
              Explore Ingredients
            </Button>
          </div>
        </Container>
      </section>

      {/* Trust Strip */}
      <section className="bg-light py-4">
        <Container>
          <Row className="text-center">
            <Col md={3}>
              <p className="fw-bold">Introducer-only</p>
            </Col>
            <Col md={3}>
              <p className="fw-bold">Optional Screening</p>
            </Col>
            <Col md={3}>
              <p className="fw-bold">Self-serve Supplier Uploads</p>
            </Col>
            <Col md={3}>
              <p className="fw-bold">Secure Buyer Enquiries</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-5 text-center">
        <Container>
          <h2 className="fw-bold mb-4">How It Works</h2>
          <Row>
            {["Upload", "Review", "Live", "Enquiries", "Connect"].map((step, index) => (
              <Col key={index}>
                <Card className="shadow-sm p-3 border-0">
                  <Card.Body>
                    <h5 className="fw-bold">{index + 1}. {step}</h5>
                    <p className="text-muted">
                      {step === "Upload" && "Suppliers upload product details."}
                      {step === "Review" && "Admin reviews and approves listings."}
                      {step === "Live" && "Products go live for buyers to explore."}
                      {step === "Enquiries" && "Buyers send secure enquiries."}
                      {step === "Connect" && "Suppliers choose to connect directly."}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Featured Categories */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="fw-bold text-center mb-4">Featured Categories</h2>
          <Row className="g-4">
            {["Dairy", "Cocoa", "Herbs & Spices", "Proteins", "Oils", "Extracts"].map((cat, i) => (
              <Col md={4} key={i}>
                <Card className="h-100 text-center shadow-sm">
                  <Card.Body>
                    <h5 className="fw-bold">{cat}</h5>
                    <p className="text-muted">Explore top-quality {cat.toLowerCase()} suppliers worldwide.</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 text-center">
        <Container>
          <h2 className="fw-bold mb-4">Why Choose Us?</h2>
          <Row>
            <Col md={4}>
              <Card className="border-0 shadow-sm p-3">
                <Card.Body>
                  <h5 className="fw-bold">🚀 Fast Onboarding</h5>
                  <p className="text-muted">Get started quickly with easy uploads.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 shadow-sm p-3">
                <Card.Body>
                  <h5 className="fw-bold">💰 Pay-as-you-go</h5>
                  <p className="text-muted">Unlock leads only when you choose.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 shadow-sm p-3">
                <Card.Body>
                  <h5 className="fw-bold">📩 £0 Per Enquiry</h5>
                  <p className="text-muted">Branded suppliers enjoy free enquiries.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
