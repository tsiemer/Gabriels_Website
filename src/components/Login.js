import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { Auth } from '../index.js';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: "Gkrizin",
      password: "Trinity",
      error: false
    };
  }
  
  render() {
    return (
      
      <div className="Login">
            <h1>Login</h1>
        <form className="Login_Form">
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl autoFocus type="text"/>
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
            />
          </FormGroup>
          <Button block bsSize="large" type="submit" onClick={this.login}>
            Login
          </Button>
        </form>
      </div>
    );
  }
}