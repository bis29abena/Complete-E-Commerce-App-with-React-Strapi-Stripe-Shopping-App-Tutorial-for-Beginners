import React from "react";
import { Form, Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="left">
        <span>AJSTORES</span>
      </div>
      <div className="right">
        <h2>Login</h2>
        <Form method="post" className="formGroup">
          <div className="inputText">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div className="inputText">
            <label htmlFor="email">Password</label>
            <input type="password" name="password" />
          </div>
          <div className="actionBtns">
            <button type="submit" className="login">
              Login
            </button>
            <Link to="/signup">
              <button className="signUp">SignUp</button>
            </Link>
          </div>
        </Form>
        <span>Forgotten Password</span>
      </div>
    </div>
  );
};

export default Login;
