import React from "react"
import { Route, Link } from "react-router-dom"
import logo_face from '../../../images/Navigation/logo_face.png'
import '../../../main_style.scss'
import './style.scss'

class NavSidePanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }


  render() {
    return (
    <aside>
        <div className="user_logo">
          <Link to={'/'}>
            <div>
              <img src={logo_face} />
            </div>
            <span>JOHN SMITH</span>
          </Link>
        </div>
        <ul className="side_menu">
          <li>
            <Link to={'/dashboard/students'} >
              <i className="material-icons">perm_identity</i>
              <span>STUDENTS</span>
            </Link>
          </li>
          <li>
            <Link to={'/dashboard/groups'} >
              <i className="material-icons">group</i>
              <span>GROUPS</span>
            </Link>
          </li>
          <li>
            <Link to={'/dashboard/calendar'} >
              <i className="material-icons">event_note</i>
              <span>CALENDAR</span>
            </Link>
          </li>
          <li>
            <Link to={'/dashboard/lesson_plan'} >

              <i className="material-icons">schedule</i>
              <span>LESSONS PLAN</span>
            </Link>
          </li>
          <li>
            <Link to={'/dashboard/assessments'} >
              <i className="material-icons">event_available</i>
              <span>ASSESSMENTS</span>
            </Link>
          </li>
        </ul>
        <div className="sign_out">
          <Link to={'/sign_out'}>
            <i className="material-icons">subdirectory_arrow_left</i>
            <span>LOG OUT</span>
          </Link>
        </div>
      </aside>
    );
  }
}



export default NavSidePanel;
