import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../actions/auth";
import './style.scss';

const SignOut = ({  logout }) => (
    <div className="sign_out">
        <div onClick={() => logout()}>
            <i className="material-icons">subdirectory_arrow_left</i>
            <span>SIGN OUT</span>
        </div>
    </div>
);

function componentWillMount() {
    
}

SignOut.propTypes = {
  logout: PropTypes.func.isRequired
};


export default connect(null, { logout: actions.logout })(SignOut);