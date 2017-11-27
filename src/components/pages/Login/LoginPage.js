import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import LoginForm from "../../forms/LoginForm"
import { login } from "../../../actions/auth"
import Logo from '../../../images/Login/Logo.png'
import './style.css'

class LoginPage extends React.Component {
  submit = data =>
    this.props.login(data).then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <div className="login_container">
        <img src={Logo} />

        <LoginForm submit={this.submit} />

        <div className="login_options">
          <Link to="/signup">Create Account</Link>
          <Link to="/forgot_password">Forgot Password?</Link>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(null, { login })(LoginPage);
