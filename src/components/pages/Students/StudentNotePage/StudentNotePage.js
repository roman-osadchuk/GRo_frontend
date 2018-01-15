import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"
import './style.scss'

class StudentNotePage extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    
    return (
        <div className="student_body">
          <div className="student_body_header">
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
                  <span className="icon-attachment"></span>
                  <span>ADD ATTACHMENT</span>
                </div>
                <div>
                  <span className="icon-calendar"></span>
                  <span>12/2/2017</span>
                </div>
                <div>
                  <span className="icon-checked-mark"></span>
                  <span>CHOOSE SUBJECT</span>
                </div>
              </div>
              <div>
                <span>SUBMIT</span>
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
    );
  }
}


export default StudentNotePage;