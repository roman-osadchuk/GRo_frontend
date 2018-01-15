import React from "react"
import PropTypes from "prop-types"
import Validator from "validator"
import AlertMessage from '../messages/AlertMessage'
import logo_key from '../../images/Login/logo_key.png'
import logo_person from '../../images/Login/logo_person.png'
//import spinner from '../../images/Animation/Spinner.gif'
import Spinner from '../ctas/Spinner'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import {orange500, blue500} from 'material-ui/styles/colors'

const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};


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
    console.log(this.state.data);
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      //console.log(this.state.data);
      this.props
        .submit(this.state.data)
        .catch(err => {
          this.setState({ errors: err.response.data.errors, loading: false })
        });
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
              onFocus={this.highlightIcon}
              onBlur={this.blurIcon}
            />
            {errors.email && <span className="alert__inline">{errors.email}</span>}
          </div>
          <div className="login_form_field" error={!!errors.password}>
            <span className="icon icon-key"></span>
            <TextField
              floatingLabelText="Password"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              id="password"
              type="password"
              className="input-field-password"
              name="password"
              value={data.password}
              onChange={this.onChange}
              onFocus={this.highlightIcon}
              onBlur={this.blurIcon}
            />
            {errors.password && <span className="alert__inline">{errors.password}</span>}
          </div>
          <RaisedButton label="Login" type="submit" fullWidth={true} primary={true} className="login_btn"/>
          { loading && <Spinner /> }
      </form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
