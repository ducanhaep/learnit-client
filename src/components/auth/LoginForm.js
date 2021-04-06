import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function LoginForm() {
  // Context
  const { loginUser } = useContext(AuthContext);
  // Router
  const history = useHistory();
  // Local State
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const { username, password } = loginForm;
  const onChangeLoginForm = (event) =>
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const login = async (event) => {
    event.preventDefault();
    try {
      const loginData = await loginUser(loginForm);
      if (loginData.success) {
        history.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Form className="my-4" onSubmit={login}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            required
            value={username}
            onChange={onChangeLoginForm}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={onChangeLoginForm}
          ></Form.Control>
        </Form.Group>
        <Button variant="success" type="submit">
          Login
        </Button>
        <p>
          Don't have an account?
          <Link to="/register">
            <Button variant="info" size="sm" className="ml-2">
              Register
            </Button>
          </Link>
        </p>
      </Form>
    </>
  );
}

export default LoginForm;
