import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const SingUpPage = () => (
  <div>
    <h1>SingUp</h1>
  </div>
);

const INTIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INTIAL_STATE };
  }

  onSubmit = event => {

  }

  onChange = event => {

  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>

      </form>
    )
  }
}

const SignUpLink = () => (
  <p>
    Dont have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SingUpPage;

export { SignUpForm, SignUpLink };
