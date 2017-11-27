import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"


class NotFoundPage extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div>Page not found</div>
        <Link to={"/"}>Go Home</Link>
      </div>


    );
  }
}


export default NotFoundPage;
