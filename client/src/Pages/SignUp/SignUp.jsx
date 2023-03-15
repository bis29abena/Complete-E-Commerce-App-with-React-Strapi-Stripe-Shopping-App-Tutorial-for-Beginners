import React from "react";
import { Form } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="signupTop">
        <img
          src="https://ionicframework.com/docs/img/demos/avatar.svg"
          alt=""
          className="signUpImg"
        />
        <input id="upload" type="file" className="signUpInputImg" />
        <label htmlFor="upload" className="signUpLabelImg">
          <EditIcon className="icon" />
        </label>
      </div>

      <Form method="post" className="signUpBottom">
        <input
          type="text"
          name="firstname"
          className="inputText"
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastname"
          className="inputText"
          placeholder="Last Name"
        />
        <input
          type="email"
          name="email"
          className="inputText"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          className="inputText"
          placeholder="Password"
        />
        <input
          type="password"
          name="confirmPassword"
          className="inputText"
          placeholder="Confirm Password"
        />
        <button type="submit">Create Account</button>
      </Form>
    </div>
  );
};

export default SignUp;
