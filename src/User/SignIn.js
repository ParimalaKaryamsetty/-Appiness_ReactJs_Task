import React from "react";
import { clone, isEmpty, every } from "lodash";
// Routes
import { HOME } from "./../routes";
//css
import "./user.css";
import auth from "../utils/auth";

class UserSignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      loginState: this.initialLoginState(),
      disableBtn: false,
      errors: this.initialErrorState(),
      formErrorMessage: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  initialLoginState = () => ({
    username: "",
    password: "",
  });

  initialErrorState = () => ({
    username: [],
    wrong: [],
    password: [],
  });

  onTextChange = (event) => {
    const { loginState } = this.state;
    loginState[event.currentTarget.name] = event.currentTarget.value;
    this.setState(loginState);
  };

  isValid = () => {
    const { password, username } = this.state;
    debugger;
    const errors = clone(this.initialErrorState());
    if (isEmpty(username)) {
      errors.username.push("User Name is mandatory field.");
    }
    if (isEmpty(password)) {
      errors.password.push("Password is mandatory field.");
    }
    if (
      username !="" &&
      password != "" &&
      username != "hruday@gmail.com" ||
      password != "hruday123"
    ) {
      errors.wrong.push("Please check User Name or Password must be wrong.");
    }
    if (every(errors, (error) => isEmpty(error))) {
      return true;
    }
    this.setState({
      formErrorMessage: "Please correct the errors and Login.",
      errors,
    });
    return false;
  };

  onSubmit = () => {
    if (this.isValid()) {
      const { username, password } = this.state;
      auth.signIn(true);
      window.location.pathname = "/home";
    } else {
      auth.signOut();
    }
  };

  onSubmitKeyUp = (event) => {
    if (event.keyCode === 13) {
      this.onSubmit();
    }
  };

  render() {
    const { loginState, formErrorMessage, disableBtn, errors } = this.state;

    const { username, password } = loginState;
    return (
      <div className="login-page">
        <div className="form">
          <div className="text-danger">{errors.wrong}</div>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={username}
            onChange={this.onTextChange}
          />
          <div className="text-danger">{errors.username}</div>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={this.onTextChange}
          />
          <div className="text-danger">{errors.password}</div>
          <button onClick={this.onSubmit}>login</button>
          <p className="message">
            Not registered? <a href="#">Create an account</a>
          </p>

          <div className="text-danger">{formErrorMessage}</div>
        </div>
      </div>
    );
  }
}

export default UserSignIn;
