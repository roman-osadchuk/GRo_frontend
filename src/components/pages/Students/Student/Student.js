import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"
import './style.css'

class Student extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const img = this.props.image;
    const student = this.props.name;
    return (
      <div className="circle__students--container">
        <Link to={`/dashboard/students/${student}`}>
          <div className="circle__students--image">
            <img src={img} />
          </div>
          <span>{this.props.name}</span>
        </Link>
      </div>
    );
  }
}


export default Student;
