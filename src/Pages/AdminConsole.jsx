import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav, Card, Table, Button, Form } from "react-bootstrap";
import { FaCheck, FaTimes, FaSearch } from "react-icons/fa";

const AdminConsole = () => {
  const [suppliers, setSuppliers] = useState([
    { id: 1, name: "CocoaWorld Ltd.", status: "Pending" },
    { id: 2, name: "Mediterraneo Oils", status: "Pending" },
  ]);

  const [products, setProducts] = useState([
    { id: 101, name: "Organic Cocoa Powder", status: "Awaiting Approval" },
    { id: 102, name: "Soy Protein Isolate", status: "Changes Requested" },
  ]);

  const [auditLog] = useState([
    { id: 1, action: "Created", target: "Supplier: CocoaWorld Ltd.", date: "2025-10-05" },
    { id: 2, action: "Updated", target: "Product: Soy Protein Isolate", date: "2025-10-04" },
    { id: 3, action: "Deleted", target: "Lead: Buyer123", date: "2025-10-03" },
  ]);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark text-light text-center py-5">
        <Container>
          <h1 className="display-5 fw-bold">Admin Console</h1>
          <p className="lead mt-2">Internal use only: Manage approvals, screening, and audit logs.</p>
        </Container>
      </section>

      {/* Tabs Section */}
      <section className="py-5">
        <Container>
          <Tab.Container defaultActiveKey="suppliers">
            <Row>
              <Col md={3} className="mb-4 mb-md-0">
                <Nav variant="pills" className="flex-column shadow-sm rounded bg-light p-3">
                  <Nav.Item>
                    <Nav.Link eventKey="suppliers">New Suppliers</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="products">Product Approvals</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="changes">Changes Requested</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="screening">Screening Management</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="leads">Lead Quality Queue</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="audit">Audit Log</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              <Col md={9}>
                <Tab.Content>
                  {/* New Suppliers */}
                  <Tab.Pane eventKey="suppliers">
                    <Card className="shadow-sm border-0">
                      <Card.Body>
                        <h4 className="fw-bold mb-3">New Suppliers</h4>
                        <Table hover responsive>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Supplier</th>
                              <th>Status</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {suppliers.map((s, idx) => (
                              <tr key={s.id}>
                                <td>{idx + 1}</td>
                                <td>{s.name}</td>
                                <td>{s.status}</td>
                                <td>
                                  <Button variant="success" size="sm" className="me-2">
                                    <FaCheck /> Approve
                                  </Button>
                                  <Button variant="danger" size="sm">
                                    <FaTimes /> Reject
                                  </Button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>

                  {/* Product Approvals */}
                  <Tab.Pane eventKey="products">
                    <Card className="shadow-sm border-0">
                      <Card.Body>
                        <h4 className="fw-bold mb-3">Product Approvals</h4>
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
                            {products.map((p, idx) => (
                              <tr key={p.id}>
                                <td>{idx + 1}</td>
                                <td>{p.name}</td>
                                <td>{p.status}</td>
                                <td>
                                  <Button variant="success" size="sm" className="me-2">
                                    <FaCheck /> Approve
                                  </Button>
                                  <Button variant="warning" size="sm">
                                    Request Changes
                                  </Button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>

                  {/* Changes Requested */}
                  <Tab.Pane eventKey="changes">
                    <Card className="shadow-sm border-0">
                      <Card.Body>
                        <h4 className="fw-bold mb-3">Changes Requested</h4>
                        <p className="text-muted">Track products pending supplier updates.</p>
                        <Table hover responsive>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Product</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {products
                              .filter((p) => p.status === "Changes Requested")
                              .map((p, idx) => (
                                <tr key={p.id}>
                                  <td>{idx + 1}</td>
                                  <td>{p.name}</td>
                                  <td>{p.status}</td>
                                </tr>
                              ))}
                          </tbody>
                        </Table>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>

                  {/* Screening Management */}
                  <Tab.Pane eventKey="screening">
                    <Card className="shadow-sm border-0">
                      <Card.Body>
                        <h4 className="fw-bold mb-3">Screening Management</h4>
                        <Form>
                          <Form.Group className="mb-3">
                            <Form.Label>Product/Supplier ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter ID to screen" />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Checks Completed</Form.Label>
                            <Form.Check type="checkbox" label="Company registration check" />
                            <Form.Check type="checkbox" label="Document validation" />
                            <Form.Check type="checkbox" label="Insurance verified" />
                            <Form.Check type="checkbox" label="Regulatory compliance" />
                          </Form.Group>
                          <Button variant="primary">Add Screened Tag</Button>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>

                  {/* Lead Quality Queue */}
                  <Tab.Pane eventKey="leads">
                    <Card className="shadow-sm border-0">
                      <Card.Body>
                        <h4 className="fw-bold mb-3">Lead Quality Queue</h4>
                        <p className="text-muted">
                          Review and triage buyer enquiries for unbranded suppliers before release.
                        </p>
                        <Button variant="outline-primary" size="sm">
                          <FaSearch className="me-1" /> Review Leads
                        </Button>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>

                  {/* Audit Log */}
                  <Tab.Pane eventKey="audit">
                    <Card className="shadow-sm border-0">
                      <Card.Body>
                        <h4 className="fw-bold mb-3">Audit Log</h4>
                        <Table striped hover responsive>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Action</th>
                              <th>Target</th>
                              <th>Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            {auditLog.map((log, idx) => (
                              <tr key={log.id}>
                                <td>{idx + 1}</td>
                                <td>{log.action}</td>
                                <td>{log.target}</td>
                                <td>{log.date}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
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

export default AdminConsole;
