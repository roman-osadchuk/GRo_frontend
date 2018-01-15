import React from "react"
import PropTypes from "prop-types"
import './style.scss'


const AlertMessage = ({ text }) => (
  <div className="alert__message--container">
    <b>Error: </b>
    <br/>
    <span className="alert__message--text"> {text} </span>
  </div>
);

AlertMessage.propTypes = {
  text: PropTypes.string.isRequired
};

export default AlertMessage;
