import React from "react";
import { Container, Row, Col, Card, Button, Badge, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

const sampleProducts = {
  1: {
    id: 1,
    name: "Organic Cocoa Powder",
    description: "High-fat organic cocoa powder suitable for bakery, confectionery, and beverages.",
    images: [
      "data:image/jpeg;base64,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"
    ],
    specs: {
      MOQ: "100kg",
      LeadTime: "2 weeks",
      Country: "Ghana",
      Certifications: ["Organic", "Fair Trade"]
    },
    status: "Screened",
    branded: true,
    supplier: "CocoaWorld Ltd.",
    documents: ["Spec Sheet.pdf", "COA.pdf"]
  },
  2: {
    id: 2,
    name: "Soy Protein Isolate",
    description: "90% protein content isolate, widely used in plant-based foods and supplements.",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKGoCbMNUmojrWf8joexjN8fawYMn8R-gHTQ&s"],
    specs: {
      MOQ: "500kg",
      LeadTime: "3 weeks",
      Country: "USA",
      Certifications: []
    },
    status: "Unscreened",
    branded: false,
    supplier: null,
    documents: ["Spec Sheet.pdf"]
  },
  3: {
    id: 3,
    name: "Olive Oil (Extra Virgin)",
    description: "Cold-pressed extra virgin olive oil from Spain, ideal for culinary and cosmetic use.",
    images: [
      "data:image/jpeg;base64,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"
    ],
    specs: {
      MOQ: "50L",
      LeadTime: "1 week",
      Country: "Spain",
      Certifications: ["Organic", "ISO 22000"]
    },
    status: "Screened",
    branded: true,
    supplier: "Mediterraneo Oils",
    documents: ["Product Spec.pdf", "Quality Certificate.pdf"]
  }
};


const ProductDetail = () => {
  const { id } = useParams();
  const product = sampleProducts[id];

  if (!product) {
    return (
      <Container className="py-5 text-center">
        <h3>Product not found</h3>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row>
        {/* Gallery */}
        <Col md={6}>
          <Card className="shadow-sm mb-3">
            <Card.Img
              variant="top"
              src={product.images[0]}
              alt={product.name}
              style={{ objectFit: "cover", height: "300px" }}
            />
          </Card>
          <Row>
            {product.images.slice(1).map((img, index) => (
              <Col xs={6} key={index}>
                <Card className="shadow-sm mb-2">
                  <Card.Img
                    variant="top"
                    src={img}
                    alt={`${product.name} ${index + 2}`}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        {/* Details */}
        <Col md={6}>
          <h2 className="fw-bold">{product.name}</h2>
          <p className="text-muted">{product.description}</p>

          <p>
            <Badge
              bg={product.status === "Screened" ? "success" : "secondary"}
              className="me-2"
            >
              {product.status}
            </Badge>
          </p>

          <h5 className="fw-bold mt-4">Key Specifications</h5>
          <ListGroup className="mb-3">
            <ListGroup.Item><strong>MOQ:</strong> {product.specs.MOQ}</ListGroup.Item>
            <ListGroup.Item><strong>Lead Time:</strong> {product.specs.LeadTime}</ListGroup.Item>
            <ListGroup.Item><strong>Country of Origin:</strong> {product.specs.Country}</ListGroup.Item>
            {product.specs.Certifications.length > 0 && (
              <ListGroup.Item>
                <strong>Certifications:</strong> {product.specs.Certifications.join(", ")}
              </ListGroup.Item>
            )}
          </ListGroup>

          <h5 className="fw-bold">Documents</h5>
          <ul>
            {product.documents.map((doc, idx) => (
              <li key={idx}>
                {product.branded ? (
                  <a href="#" onClick={(e) => e.preventDefault()}>{doc}</a>
                ) : (
                  <span className="text-muted">{doc} (redacted)</span>
                )}
              </li>
            ))}
          </ul>

          {product.branded ? (
            <>
              <p className="fw-bold mt-3">Supplier: {product.supplier}</p>
              <Button variant="primary">Contact Supplier</Button>
            </>
          ) : (
            <Button variant="outline-primary">Request Details</Button>
          )}
        </Col>
      </Row>

      {/* Small print */}
      <Row className="mt-4">
        <Col>
          <p className="small text-muted">
            Supplier-provided information. IngredientsWorldwide.com is an introducer only (not a seller).
            Buyers must confirm compliance, quality and suitability.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
