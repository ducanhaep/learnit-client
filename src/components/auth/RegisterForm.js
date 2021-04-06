import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <>
      <Form className="my-4">
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
          ></Form.Control>
        </Form.Group>
        <Button variant="success" type="submit">
          Register
        </Button>
        <p>
          Already have an account?
          <Link to="/login">
            <Button variant="info" size="sm" className="ml-2">
              Login
            </Button>
          </Link>
        </p>
      </Form>
    </>
  );
}

export default RegisterForm;
