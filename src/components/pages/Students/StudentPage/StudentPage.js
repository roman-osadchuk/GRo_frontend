import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"
import StudentNotePage from '../StudentNotePage/StudentNotePage'
import StudentBodyMenu from '../StudentBodyMenu/StudentBodyMenu'
import student_circle from '../../../../images/Students/student_circle.png'
import './style.scss'

class StudentPage extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {
    
    // const student = this.props.match.params.student;
    // this.props.history.push(`/dashboard/students/${student}`);
  
  }

  



  render() {
    console.log(document.getElementById('header'));
    //document.getElementsByTagName('header')[0].style.display = 'none';
    //this.props.match.params.student;
    const student = this.props.match.params.student;

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
                <span className="icon icon-arrow-left-circle"></span>
                <span>Back to students</span>
              </Link>
            </div>
            <div>
              <Link to={`/dashboard/students/`}>
                <span className="icon icon-multiple-share"></span>
                <span>Share</span>
              </Link>
            </div>
            <div>
              <Link to={`/dashboard/students/`}>
                <span className="icon-folder"></span>
                <span>Export</span>
              </Link>
            </div>
            <div>
              <Link to={`/dashboard/students/`}>
                <span className="icon icon-writing"></span>
                <span>Edit</span>
              </Link>
            </div>
            <div>
              <Link to={`/dashboard/students/`}>
                <span className="icon icon-trash"></span>
                <span>Delete</span>
              </Link>
            </div>
          </div>
        </div>

        <StudentBodyMenu />

      </div>
    );
  }
}


export default StudentPage;
