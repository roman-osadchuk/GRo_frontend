import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"
import student_circle from '../../../../images/Students/student_circle.png'
import './style.scss'

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
                <span className="icon icon-arrow-left-circle"></span>
                Back to students
              </Link>
            </div>
            <div>
              <Link to={`/dashboard/students/`}>
                <span className="icon icon-multiple-share"></span>
                Share
              </Link>
            </div>
            <div>
              <Link to={`/dashboard/students/`}>
                <span className="icon-folder"></span>
                Export
              </Link>
            </div>
            <div>
              <Link to={`/dashboard/students/`}>
                <span className="icon icon-writing"></span>
                Edit
              </Link>
            </div>
            <div>
              <Link to={`/dashboard/students/`}>
                <span className="icon icon-trash"></span>
                Delete
              </Link>
            </div>
          </div>
        </div>

        <div className="student_body">
          <div className="student_body_header">
            <div>
              <span>INFO</span>
              <span>NOTES</span>
              <span>ASSESSMENTS</span>
              <span>GRAPHS</span>
            </div>
            <div className="student_toggle_window">
              <div>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software l
                  ike Aldus PageMaker including versions of Lorem Ipsum.
                </span>
              </div>
              <div className="toggle_window_attachments">
                <div>
                  <div>
                    <span className="icon-folder"></span>
                    <span>ADD ATTACHMENT</span>
                  </div>
                  <div>
                    <span className="icon-folder"></span>
                    <span>12/2/2017</span>
                  </div>
                  <div>
                    <span className="icon-folder"></span>
                    <span>CHOOSE SUBJECT</span>
                  </div>
                </div>
                <div>
                  <span>SUBMIT</span>
                </div>
              </div>
            </div>
          </div>

          <div className="student_note">
            <div className="student_note_header">
              <div>
                <b>Big Title 1</b>
                <br />
                <span>10.06.2017</span>
              </div>
              <div>
                <div>
                  <span className="icon-folder"></span>
                  <span>EDIT</span>
                </div>
                <div>
                  <span className="icon-folder"></span>
                  <span>DELETE</span>
                </div>
                <div>
                  <span className="icon-folder"></span>
                  <span>SEE ATTACHMENT</span>
                </div>
              </div>
              </div>
              <div className="student_note_nody">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </div>
            </div>

            <div className="student_note">
              <div className="student_note_header">
                <div>
                  <b>Big Title 1</b>
                  <br />
                  <span>10.06.2017</span>
                </div>
                <div>
                  <div>
                    <span className="icon-folder"></span>
                    <span>EDIT</span>
                  </div>
                  <div>
                    <span className="icon-folder"></span>
                    <span>DELETE</span>
                  </div>
                  <div>
                    <span className="icon-folder"></span>
                    <span>SEE ATTACHMENT</span>
                  </div>
                </div>
                </div>
                <div className="student_note_nody">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>
              </div>

          </div>

        </div>

    );
  }
}


export default StudentPage;
