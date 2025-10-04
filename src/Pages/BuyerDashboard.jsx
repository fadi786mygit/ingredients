import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav, Table, Button, Card, Form } from "react-bootstrap";
import { FaTrash, FaDownload, FaEdit } from "react-icons/fa";

const BuyerDashboard = () => {
  const [savedItems, setSavedItems] = useState([
    { id: 1, name: "Organic Cocoa Powder", supplier: "CocoaWorld Ltd." },
    { id: 2, name: "Olive Oil (Extra Virgin)", supplier: "Mediterraneo Oils" },
  ]);

  const handleRemoveSaved = (id) => {
    setSavedItems(savedItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-dark text-light text-center py-5">
        <Container>
          <h1 className="display-5 fw-bold">Buyer Dashboard</h1>
          <p className="lead mt-2">
            Manage your saved items, enquiries, documents, and company information.
          </p>
        </Container>
      </section>

      {/* Tabs */}
      <section className="py-5">
        <Container>
          <Tab.Container defaultActiveKey="saved">
            <Row>
              <Col md={3} className="mb-4 mb-md-0">
                <Nav variant="pills" className="flex-column shadow-sm rounded bg-light p-3">
                  <Nav.Item>
                    <Nav.Link eventKey="saved">Saved Items</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="conversations">Unlocked Conversations</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="documents">Documents Received</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="company">Company Info</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              <Col md={9}>
                <Tab.Content>
                  {/* Saved Items */}
                  <Tab.Pane eventKey="saved">
                    <Card className="shadow-sm border-0">
                      <Card.Body>
                        <h4 className="fw-bold mb-3">Saved Items</h4>
                        {savedItems.length > 0 ? (
                          <Table hover responsive>
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Supplier</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {savedItems.map((item, idx) => (
                                <tr key={item.id}>
                                  <td>{idx + 1}</td>
                                  <td>{item.name}</td>
                                  <td>{item.supplier}</td>
                                  <td>
                                    <Button
                                      variant="outline-danger"
                                      size="sm"
                                      onClick={() => handleRemoveSaved(item.id)}
                                    >
                                      <FaTrash />
                                    </Button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        ) : (
                          <p className="text-muted">No saved items yet.</p>
                        )}
                      </Card.Body>
                    </Card>
                  </Tab.Pane>

                  {/* Conversations */}
                  <Tab.Pane eventKey="conversations">
                    <Card className="shadow-sm border-0">
                      <Card.Body>
                        <h4 className="fw-bold mb-3">Unlocked Conversations</h4>
                        <p className="text-muted">
                          You don’t have any unlocked conversations yet.
                        </p>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>

                  {/* Documents Received */}
                  <Tab.Pane eventKey="documents">
                    <Card className="shadow-sm border-0">
                      <Card.Body>
                        <h4 className="fw-bold mb-3">Documents Received</h4>
                        <ul>
                          <li>
                            Spec Sheet.pdf{" "}
                            <Button variant="outline-primary" size="sm" className="ms-2">
                              <FaDownload /> Download
                            </Button>
                          </li>
                          <li>
                            Certificate.pdf{" "}
                            <Button variant="outline-primary" size="sm" className="ms-2">
                              <FaDownload /> Download
                            </Button>
                          </li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>

                  {/* Company Info */}
                  <Tab.Pane eventKey="company">
                    <Card className="shadow-sm border-0">
                      <Card.Body>
                        <h4 className="fw-bold mb-3">Company Information</h4>
                        <Form>
                          <Form.Group className="mb-3">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter company name" />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" placeholder="Enter country" />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Website</Form.Label>
                            <Form.Control type="url" placeholder="Enter website URL" />
                          </Form.Group>
                          <Button variant="primary">
                            <FaEdit className="me-2" /> Save Changes
                          </Button>
                        </Form>
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

export default BuyerDashboard;
