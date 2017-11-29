import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import SignupForm from "../../forms/SignupForm"
import { signup } from "../../../actions/users"
import Logo from '../../../images/Login/Logo.png'
import './style.scss'

class SignupPage extends React.Component {
  submit = data =>
    this.props.signup(data).then(() => this.props.history.push("/dashboard"));

  render() {
    return (

      <div className="login_container">
        <img src={Logo} />

        <span className="create_account_title">Create your account</span>

        <SignupForm submit={this.submit} />
      </div>
    );
  }
}

SignupPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired
};

export default connect(null, { signup })(SignupPage);
