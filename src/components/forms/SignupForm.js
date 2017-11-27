import React from "react";
import PropTypes from "prop-types";
import isEmail from "validator/lib/isEmail";
import InlineError from "../messages/InlineError";
import logo_key from '../../images/Login/logo_key.png';
import logo_person from '../../images/Login/logo_person.png';

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
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err => {

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
      <form className="form__login" onSubmit={this.onSubmit} loading={loading}>
        <div className="login_form_div">
          <div className="login_form_field" error={!!errors.email}>
            <img src={logo_key} />
            <div className="input-field input-field-login">
              <input
                id="email"
                type="email"
                className="validate"
                name="email"
                value={data.email}
                onChange={this.onChange}
              />
              <label htmlFor="email">Email</label>
            </div>
            {errors.email && <InlineError text={errors.email} />}
          </div>
          <div className="login_form_field" error={!!errors.password}>
            <img src={logo_person} />
            <div className="input-field input-field-login">
              <input
                id="password"
                type="password"
                className="validate"
                name="password"
                value={data.password}
                onChange={this.onChange}
              />
              <label htmlFor="password">Password</label>
            </div>
            {errors.password && <InlineError text={errors.password} />}
          </div>
          <button type="submit" className="waves-effect waves-light btn-large login_btn">Sign Up</button>
        </div>
    </form>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignupForm;
