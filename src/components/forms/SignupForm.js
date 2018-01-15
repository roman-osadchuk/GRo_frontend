import React from "react";
import PropTypes from "prop-types";
import isEmail from "validator/lib/isEmail";
import InlineError from "../messages/InlineError";
import logo_key from '../../images/Login/logo_key.png';
import logo_person from '../../images/Login/logo_person.png';
import Spinner from '../ctas/Spinner'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {orange200, blue700} from 'material-ui/styles/colors'

const styles = {
  errorStyle: {
    color: orange200,
  },
  underlineStyle: {
    borderColor: orange200,
  },
  floatingLabelStyle: {
    color: orange200,
  },
  floatingLabelFocusStyle: {
    color: blue700,
  },
};

class SignupForm extends React.Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true }, function() {
        console.log(this.state);
      });
      this.props
        .submit(this.state.data)
        .catch(err => {
          console.log(err);
          this.setState({ errors: err.response.data.errors, loading: false })
        });
    }
  };

  validate = data => {
    const errors = {};

    if (!isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Can't be blank";
    
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    
    return (
      <form className="form_login" onSubmit={this.onSubmit}>
        { errors.global && <AlertMessage text={errors.global} /> }
        <div className="login_form_field" error={!!errors.email}>
          <span className="icon icon-user"></span>
          <TextField
            floatingLabelText="Email"
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            id="email"
            type="email"
            className="input-field-email"
            name="email"
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <span className="alert__inline">{errors.email}</span>}
        </div>
        <div className="login_form_field" error={!!errors.password}>
          <span className="icon icon-key"></span>
          <TextField
            floatingLabelText="Email"
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            id="password"
            type="password"
            className="input-field-email"
            name="password"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <span className="alert__inline">{errors.password}</span>}
        </div>
        <RaisedButton label="Sign Up" type="submit" fullWidth={true} primary={true} className="login_btn"/>
        { loading && <Spinner /> }
      </form>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignupForm;
