import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"
import student_circle from '../../../../images/Students/student_circle.png'
import './style.css'

class StudentPage extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  // componentWillMount() {
  //   const student = this.props.match.params.student;
  //   this.props.history.push(`/dashboard/students/${student}`);
  //
  // }



  render() {
    //console.log(this.props);
    //console.log(this.rest);
    const student = this.props.match.params.student;
    //const teacher = this.state.teacher;
    //console.log(this);
    return (
      <div className="student_container">
        <div className="student_header">
          <div className="student_header_left">
            <div className="student_header_image">
              <img src={student_circle} alt="avatar"/>
            </div>
            <div className="student_header_classInfo">
              <span>{student}</span>
              <br />
              <span>John Smith</span>
            </div>
          </div>
          <div className="student_header_right">
            <div>
              <Link to={`/dashboard/students/`}>
                <span className="icon-arrow-left-circle"></span>
                Back to students
              </Link>
            </div>
            <div>
              <span className="icon-multiple-share"></span>
              <Link to={`/dashboard/students/`}>Share</Link>
            </div>
            <div>
              <span className="icon-folder"></span>
              <Link to={`/dashboard/students/`}>Export</Link>
            </div>
            <div>
              <span className="icon-writing"></span>
              <Link to={`/dashboard/students/`}>Edit</Link>
            </div>
            <div>
              <span className="icon-trash"></span>
              <Link to={`/dashboard/students/`}>Delete</Link>
            </div>
          </div>
        </div>
      </div>

    );
  }
}


export default StudentPage;
