import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"
import './style.scss'


class NotFoundPage extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="page_not_found_container">
        <div>
          <span>Page not found</span>
          <Link to={"/dashboard/students"}>Go Home</Link>
        </div>
      </div>


    );
  }
}


export default NotFoundPage;
