import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaUpload, FaCheckCircle, FaGlobe, FaEnvelope, FaHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-light text-center py-5">
        <Container>
          <h1 className="display-5 fw-bold">About IngredientsWorldwide.com</h1>
          <p className="lead mt-3">
            A global B2B marketplace connecting suppliers of ingredients & raw materials 
            with buyers worldwide. Transparent, secure, and easy to use.
          </p>
        </Container>
      </section>

      {/* Marketplace Explainer */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <h2 className="fw-bold text-center mb-4">Our Marketplace</h2>
              <p className="text-muted fs-5 text-center">
                We make it simple for suppliers to list their products and for buyers 
                to find what they need. Suppliers can start free with unbranded listings, 
                or boost visibility with branded plans. Screening is optional and helps 
                increase buyer confidence.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-5 bg-light text-center">
        <Container>
          <h2 className="fw-bold mb-5">How It Works</h2>
          <Row className="g-4 justify-content-center">
            {[
              { icon: <FaUpload />, step: "Upload", desc: "Suppliers upload product details." },
              { icon: <FaCheckCircle />, step: "We Review", desc: "Admin reviews and approves listings." },
              { icon: <FaGlobe />, step: "Live", desc: "Products go live for buyers to explore." },
              { icon: <FaEnvelope />, step: "Enquiries", desc: "Buyers send secure enquiries." },
              { icon: <FaHandshake />, step: "Connect", desc: "Suppliers choose to connect directly." },
            ].map((item, i) => (
              <Col md={2} sm={6} xs={12} key={i}>
                <Card className="border-0 shadow-sm h-100">
                  <Card.Body className="d-flex flex-column align-items-center">
                    <div
                      className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3"
                      style={{ width: "70px", height: "70px", fontSize: "28px" }}
                    >
                      {item.icon}
                    </div>
                    <h6 className="fw-bold">{item.step}</h6>
                    <p className="text-muted small">{item.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Legal CTA */}
      <section className="py-5 text-center">
        <Container>
          <h4 className="fw-bold mb-3">Want to learn more?</h4>
          <p className="text-muted">
            Please review our{" "}
            <Link to="/legal" className="fw-bold text-decoration-none text-primary">
              Terms & Conditions
            </Link>{" "}
            for full details.
          </p>
        </Container>
      </section>
    </div>
  );
};

export default About;
