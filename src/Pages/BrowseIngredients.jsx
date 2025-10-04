import React, { useState } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";   // ✅ import Link

const sampleProducts = [
  {
    id: 1,
    name: "Organic Cocoa Powder",
    spec: "High-fat, Food Grade",
    moq: "100kg",
    status: "Screened",
    branded: true,
    supplier: "CocoaWorld Ltd."
  },
  {
    id: 2,
    name: "Soy Protein Isolate",
    spec: "90% protein content",
    moq: "500kg",
    status: "Unscreened",
    branded: false,
    supplier: null
  },
  {
    id: 3,
    name: "Olive Oil (Extra Virgin)",
    spec: "Cold-pressed, Spain",
    moq: "50L",
    status: "Screened",
    branded: true,
    supplier: "Mediterraneo Oils"
  }
];


const BrowseIngredients = () => {
  const [sortOption, setSortOption] = useState("relevance");

  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-4 text-center">Browse Ingredients</h2>
      <Row>
        {/* Sidebar Filters */}
        <Col md={3}>
          <Card className="p-3 shadow-sm mb-4">
            <h5 className="fw-bold mb-3">Filters</h5>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select>
                  <option>All</option>
                  <option>Dairy</option>
                  <option>Cocoa</option>
                  <option>Herbs & Spices</option>
                  <option>Proteins</option>
                  <option>Oils</option>
                  <option>Extracts</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Country of Origin</Form.Label>
                <Form.Control type="text" placeholder="e.g. Spain, India" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Certifications</Form.Label>
                <Form.Check type="checkbox" label="Organic" />
                <Form.Check type="checkbox" label="Fair Trade" />
                <Form.Check type="checkbox" label="ISO 22000" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>MOQ</Form.Label>
                <Form.Control type="number" placeholder="Min order qty" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Lead Time</Form.Label>
                <Form.Control type="text" placeholder="e.g. 2 weeks" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Check type="checkbox" label="Screened" />
                <Form.Check type="checkbox" label="Unscreened" />
              </Form.Group>
            </Form>
          </Card>
        </Col>

       {/* Products Section */}
        <Col md={9}>
          <Row className="mb-3">
            <Col className="d-flex justify-content-end">
              <Form.Select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                style={{ maxWidth: "250px" }}
              >
                <option value="relevance">Sort by Relevance</option>
                <option value="recent">Recently Added</option>
                <option value="price">Price on Request</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="g-4">
            {sampleProducts.map((product) => (
              <Col md={6} lg={4} key={product.id}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    {/* Product Title links to detail */}
                    <h5 className="fw-bold">
                      <Link to={`/product/${product.id}`} className="text-decoration-none">
                        {product.name}
                      </Link>
                    </h5>
                    <p className="text-muted">{product.spec}</p>
                    <p className="mb-1"><strong>MOQ:</strong> {product.moq}</p>
                    <p className="mb-2">
                      <span
                        className={`badge ${
                          product.status === "Screened"
                            ? "bg-success"
                            : "bg-secondary"
                        }`}
                      >
                        {product.status}
                      </span>
                    </p>

                    {/* Supplier info (only for branded) */}
                    {product.branded && (
                      <p className="fw-bold text-primary">{product.supplier}</p>
                    )}

                    {/* Action Buttons */}
                    <div className="d-flex flex-column gap-2">
                      {product.branded ? (
                        <Button variant="primary" size="sm">
                          Contact Supplier
                        </Button>
                      ) : (
                        <Button variant="outline-primary" size="sm">
                          Request Details
                        </Button>
                      )}

                      {/* ✅ View Details button */}
                      <Button
                        as={Link}
                        to={`/product/${product.id}`}
                        variant="secondary"
                        size="sm"
                      >
                        View Details
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default BrowseIngredients;
