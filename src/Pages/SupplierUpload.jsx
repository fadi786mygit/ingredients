import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaUpload, FaCheckCircle, FaGlobe, FaEnvelope, FaHandshake } from "react-icons/fa";

const SupplierUpload = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark text-light text-center py-5"
        style={{ background: "linear-gradient(135deg, #0d6efd, #000)" }}>
        <Container>
          <h1 className="display-4 fw-bold mb-3">
            List Your Products on IngredientsWorldwide.com
          </h1>
          <h4 className="mb-4 fw-normal">
            Start free with unbranded listings, or boost visibility with branded plans. 
            Screening is optional and available to buyers or suppliers.
          </h4>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Button variant="light" size="lg" className="fw-bold text-primary px-4">
              Upload Products (Free)
            </Button>
            <Button variant="outline-light" size="lg" className="fw-bold px-4">
              Go Branded
            </Button>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-5 text-center bg-light">
        <Container>
          <h2 className="fw-bold mb-5">How It Works</h2>
          <Row className="g-4 justify-content-center">
            {[
              { icon: <FaUpload />, step: "Upload", desc: "Suppliers upload product details." },
              { icon: <FaCheckCircle />, step: "We Review", desc: "Admin reviews and approves listings." },
              { icon: <FaGlobe />, step: "Listing Goes Live", desc: "Products go live for buyers to explore." },
              { icon: <FaEnvelope />, step: "Buyer Enquiries", desc: "Buyers send secure enquiries." },
              { icon: <FaHandshake />, step: "Connect", desc: "Suppliers choose to connect directly." },
            ].map((item, i) => (
              <Col md={2} sm={6} xs={12} key={i}>
                <div className="d-flex flex-column align-items-center">
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3"
                       style={{ width: "70px", height: "70px", fontSize: "28px" }}>
                    {item.icon}
                  </div>
                  <h6 className="fw-bold">{item.step}</h6>
                  <p className="text-muted small">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Plans Section */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">Our Plans</h2>
          <Row className="g-4">
            {/* Unbranded */}
            <Col md={4}>
              <Card className="h-100 shadow-sm border-0 hover-shadow">
                <Card.Body className="p-4">
                  <h4 className="fw-bold text-dark">Unbranded — Free</h4>
                  <ul className="mt-3 text-muted">
                    <li>£0 to list; supplier identity hidden</li>
                    <li>Unlimited product uploads</li>
                    <li>Pay-as-you-go lead unlocks</li>
                    <li>No subscription required</li>
                    <li>Optional Screening (“Screened” label)</li>
                    <li>Upgrade to Branded anytime</li>
                  </ul>
                  <p className="small text-muted mt-3 fst-italic">
                    “Only pay when you choose to connect with a buyer.”
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Branded Annual */}
            <Col md={4}>
              <Card className="h-100 shadow-lg border-primary position-relative">
                <div className="position-absolute top-0 end-0 bg-primary text-white px-3 py-1 small rounded-bottom-start">
                  Popular
                </div>
                <Card.Body className="p-4">
                  <h4 className="fw-bold text-primary">Branded — Annual</h4>
                  <p className="fw-bold fs-5">£500 / year (25 listings)</p>
                  <ul className="mt-3 text-muted">
                    <li>£0 per enquiry (no unlock costs)</li>
                    <li>Company name, logo & certificates shown</li>
                    <li>Add listings: £24 per listing/year</li>
                    <li>Optional certificate publishing (+£150/year)</li>
                    <li>Cancel renewal before next term</li>
                  </ul>
                  <h6 className="fw-bold mt-3">Examples:</h6>
                  <ul>
                    <li>25 listings → £500/year</li>
                    <li>26 listings → £524/year (≈ £43.67/mo)</li>
                    <li>50 listings → £1,100/year (≈ £91.67/mo)</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            {/* High-Volume Monthly */}
            <Col md={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="p-4">
                  <h4 className="fw-bold text-dark">Branded — High-Volume Monthly</h4>
                  <p className="fw-bold fs-5">£2 per listing / month</p>
                  <ul className="mt-3 text-muted">
                    <li>£0 per enquiry (no unlock costs)</li>
                    <li>Ideal for large catalogs</li>
                  </ul>
                  <h6 className="fw-bold mt-3">Examples:</h6>
                  <ul>
                    <li>500 listings → £1,000/month</li>
                    <li>1,000 listings → £2,000/month</li>
                  </ul>
                  <p className="small text-muted mt-3 fst-italic">
                    We’ll help you pick the most economical option for your catalog size.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Small Print */}
      <section className="py-4 bg-light">
        <Container>
          <p className="small text-muted text-center">
            IngredientsWorldwide.com is an introducer only (not a seller). Supplier content is supplier-provided. 
            Buyers must confirm compliance, quality and suitability. Use of our services = acceptance of our 
            <a href="/legal" className="text-decoration-none ms-1">Terms & Conditions</a> and 
            <a href="/legal" className="text-decoration-none ms-1">Privacy Policy</a>. 
            Where screening is performed, we display “Screened”.
          </p>
        </Container>
      </section>
    </div>
  );
};

export default SupplierUpload;
