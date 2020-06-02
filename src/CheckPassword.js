import React from "react";
import Bar from "./Bar";
import "./CheckPassword.css";
import PasswordStrength from "./PasswordStrength";

class CheckPassword extends React.Component {
  constructor() {
    super();

    this.state = {
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    let score = PasswordStrength(this.state.password);
    let backgroundColor = "";
    let message = "";
    switch (score) {
      case 0:
        message = "Start typing your Password";
        break;
      case 1:
        message = "Your Password is too weak";
        backgroundColor = "red";
        break;
      case 2:
        message = "Your Password is still weak";
        backgroundColor = "orangered";
        break;
      case 3:
        message = "Your Password is not strong yet";
        backgroundColor = "orange";
        break;
      case 4:
        message = "Your Password is still can be improved";
        backgroundColor = "yellowgreen";
        break;
      case 5:
        message = "Your Password is strong but can be improved";
        backgroundColor = "#6aaf02";
        break;
      default:
        message = "Your Password is strong";
        backgroundColor = "green";
    }

    return (
      <div className="password-validator">
        <h1>Enter your Password</h1>
        <input type="text" onChange={this.handleChange} />
        <div className="message">{message}</div>
        <div className="progressbar">
          <label>Password Strength: </label>
          <Bar width={score} backgroundColor={backgroundColor} />
        </div>
      </div>
    );
  }
}

export default CheckPassword;
