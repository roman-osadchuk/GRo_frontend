import React from "react"
import PropTypes from "prop-types"
import Validator from "validator"
import AlertMessage from '../messages/AlertMessage'
import logo_key from '../../images/Login/logo_key.png'
import logo_person from '../../images/Login/logo_person.png'
import spinner from '../../images/Animation/Spinner.gif'
import Spinner from '../ctas/Spinner'



class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: "",
        password: ""
      },
      loading: false,
      errors: {}
    };

    //this.highlightIcon = this.highlightIcon.bind(this);
    //this.blurIcon = this.blurIcon.bind(this);
  }


  onChange = e =>
    this.setState({
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
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "email can't be empty";
    if (!data.password) errors.password = "password can't be empty";
    return errors;
  };

  // highlightIcon(e) {
  //   document.getElementsByClassName('icon').className = 'highlight_icon';
  //   //e.target.parentNode.parentNode.children[0].className = 'highlight_icon';
  // }

  // blurIcon(e) {
  //   e.target.parentNode.parentNode.children[0].classList.remove('highlight_icon');
  // }

  render() {
    const { data, errors, loading } = this.state;

    return (
      <form className="form__login" onSubmit={this.onSubmit}>
        { errors.global && <AlertMessage text={errors.global} /> }
        <div className="login_form_div">
          <div className="login_form_field" error={!!errors.email}>
            <span className="icon icon-user"></span>
            <div className="input-field input-field-login">
              <input
                id="email"
                type="email"
                className="validate"
                name="email"
                value={data.email}
                onChange={this.onChange}
                onFocus={this.highlightIcon}
                onBlur={this.blurIcon}
              />
              <label htmlFor="email">Email</label>
            </div>
            {errors.email && <span className="alert__inline">{errors.email}</span>}
          </div>
          <div className="login_form_field" error={!!errors.password}>
            <span className="icon icon-key"></span>
            <div className="input-field input-field-login">
              <input
                id="password"
                type="password"
                className="validate"
                name="password"
                value={data.password}
                onChange={this.onChange}
                onFocus={this.highlightIcon}
                onBlur={this.blurIcon}
              />
              <label htmlFor="password">Password</label>
            </div>
            {errors.password && <span className="alert__inline">{errors.password}</span>}
          </div>
          <button type="submit" className="waves-effect waves-light btn-large login_btn">Login</button>
          { loading && <Spinner /> }
        </div>
    </form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
