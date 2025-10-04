import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav, Table, Button, Card } from "react-bootstrap";
import { FaEdit, FaCopy, FaTrash, FaPlus, FaUpload } from "react-icons/fa";

const SupplierDashboard = () => {
  const [listings, setListings] = useState([
    { id: 1, name: "Organic Cocoa Powder", status: "Live" },
    { id: 2, name: "Soy Protein Isolate", status: "Draft" },
    { id: 3, name: "Olive Oil (Extra Virgin)", status: "Submitted" },
  ]);

  const handleDelete = (id) => {
    setListings(listings.filter((l) => l.id !== id));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark text-light text-center py-5">
        <Container>
          <h1 className="display-5 fw-bold">Supplier Dashboard</h1>
          <p className="lead mt-2">
            Manage your listings, documents, enquiries, and subscription plan.
          </p>
        </Container>
      </section>

      {/* Dashboard Tabs */}
      <section className="py-5">
        <Container>
          <Tab.Container defaultActiveKey="listings">
            <Row>
              <Col md={3} className="mb-4 mb-md-0">
                <Nav variant="pills" className="flex-column shadow-sm rounded bg-light p-3">
                  <Nav.Item>
                    <Nav.Link eventKey="listings">Listings</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="enquiries">Enquiries</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="documents">Documents</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="billing">Plan & Billing</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              <Col md={9}>
                <Tab.Content>
                  {/* Listings Tab */}
                  <Tab.Pane eventKey="listings">
                    <Card className="shadow-sm border-0">
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h4 className="fw-bold">Your Listings</h4>
                          <div>
                            <Button variant="primary" size="sm" className="me-2">
                              <FaPlus className="me-1" /> Add New
                            </Button>
                            <Button variant="outline-secondary" size="sm" className="me-2">
                              Bulk Upload (CSV/XLSX)
                            </Button>
                          </div>
                        </div>
                        <Table hover responsive>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Product</th>
                              <th>Status</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {listings.map((listing, idx) => (
                              <tr key={listing.id}>
                                <td>{idx + 1}</td>
                                <td>{listing.name}</td>
                                <td>
                                  <span
                                    className={`badge ${
                                      listing.status === "Live"
                                        ? "bg-success"
                                        : listing.status === "Draft"
                                        ? "bg-secondary"
                                        : "bg-warning text-dark"
                                    }`}
                                  >
                                    {listing.status}
                                  </span>
                                </td>
                                <td>
                                  <Button
                                    variant="outline-primary"
                                    size="sm"
                                    className="me-2"
                                  >
                                    <FaEdit />
                                  </Button>
                                  <Button
                                    variant="outline-secondary"
                                    size="sm"
                                    className="me-2"
                                  >
                                    <FaCopy />
                                  </Button>
                                  <Button
                                    variant="outline-danger"
                                    size="sm"
                                    onClick={() => handleDelete(listing.id)}
                                  >
                                    <FaTrash />
                                  </Button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>

                  {/* Enquiries Tab */}
                  <Tab.Pane eventKey="enquiries">
                    <Card className="shadow-sm border-0">
                      <Card.Body>
                        <h4 className="fw-bold mb-3">Buyer Enquiries</h4>
                        <p className="text-muted">You haven’t received any enquiries yet.</p>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>

                  {/* Documents Tab */}
                  <Tab.Pane eventKey="documents">
                    <Card className="shadow-sm border-0">
                      <Card.Body>
                        <h4 className="fw-bold mb-3">Certificates & Documents</h4>
                        <p className="text-muted">
                          Upload your certificates here. Redactions (if required) will be handled
                          server-side.
                        </p>
                        <Button variant="primary" size="sm">
                          <FaUpload className="me-1" /> Upload Document
                        </Button>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>

                  {/* Billing Tab */}
                  <Tab.Pane eventKey="billing">
                    <Card className="shadow-sm border-0">
                      <Card.Body>
                        <h4 className="fw-bold mb-3">Plan & Billing</h4>
                        <p><strong>Current Plan:</strong> Branded — Annual (£500/year, 25 listings)</p>
                        <p><strong>Listings Used:</strong> 3 / 25</p>
                        <div className="mt-3">
                          <Button variant="outline-primary" className="me-2">Add More Listings</Button>
                          <Button variant="outline-success" className="me-2">Upgrade Plan</Button>
                          <Button variant="outline-danger">Downgrade</Button>
                        </div>
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

export default SupplierDashboard;
