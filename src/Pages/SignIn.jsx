import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [role, setRole] = useState("buyer");

  const handleRoleChange = (val) => setRole(val);

  return (
    <div>
      {/* Hero */}
      <section className="bg-dark text-light text-center py-5">
        <Container>
          <h1 className="display-5 fw-bold">{isSignUp ? "Sign Up" : "Sign In"}</h1>
          <p className="lead mt-3">
            {isSignUp
              ? "Create an account to get started as a Buyer or Supplier."
              : "Welcome back! Please sign in to your account."}
          </p>
        </Container>
      </section>

      {/* Form Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <Card className="shadow-sm border-0">
                <Card.Body className="p-4">
                  {/* Toggle between Sign In & Sign Up */}
                  <div className="d-flex justify-content-center mb-4">
                    <Button
                      variant={!isSignUp ? "primary" : "outline-primary"}
                      className="me-2"
                      onClick={() => setIsSignUp(false)}
                    >
                      Sign In
                    </Button>
                    <Button
                      variant={isSignUp ? "primary" : "outline-primary"}
                      onClick={() => setIsSignUp(true)}
                    >
                      Sign Up
                    </Button>
                  </div>

                  {/* Sign In Form */}
                  {!isSignUp && (
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" required />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" required />
                      </Form.Group>
                      <Button variant="primary" type="submit" className="w-100">
                        Sign In
                      </Button>
                      <div className="text-center mt-3">
                        <Button variant="outline-secondary" size="sm">Sign in with Google</Button>
                      </div>
                    </Form>
                  )}

                  {/* Sign Up Form */}
                  {isSignUp && (
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" required />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Create a password" required />
                      </Form.Group>

                      {/* Role Picker */}
                      <Form.Group className="mb-3">
                        <Form.Label>Register as:</Form.Label>
                        <br />
                        <ToggleButtonGroup
                          type="radio"
                          name="roles"
                          value={role}
                          onChange={handleRoleChange}
                        >
                          <ToggleButton id="buyer" value="buyer" variant="outline-primary">
                            I’m a Buyer
                          </ToggleButton>
                          <ToggleButton id="supplier" value="supplier" variant="outline-primary">
                            I’m a Supplier
                          </ToggleButton>
                        </ToggleButtonGroup>
                      </Form.Group>

                      {/* Accept T&Cs */}
                      <Form.Group className="mb-3">
                        <Form.Check
                          type="checkbox"
                          label={
                            <span>
                              I agree to the{" "}
                              <Link to="/legal" className="text-primary fw-bold">Terms & Conditions</Link> 
                              {" "}and{" "}
                              <Link to="/legal" className="text-primary fw-bold">Privacy Policy</Link>.
                            </span>
                          }
                          required
                        />
                      </Form.Group>

                      <Button variant="primary" type="submit" className="w-100">
                        Sign Up
                      </Button>
                      <div className="text-center mt-3">
                        <Button variant="outline-secondary" size="sm">Sign up with Google</Button>
                      </div>
                    </Form>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default SignIn;
