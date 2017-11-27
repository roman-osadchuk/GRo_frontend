import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Route, Link } from "react-router-dom"
import * as actions from "../../actions/auth"

import UserRoute from '../routes/UserRoute'
import Students from '../pages/Students/Students/Students'
import StudentPage from '../pages/Students/StudentPage/StudentPage'
import Groups from '../pages/Groups/Groups'
import Group from '../pages/Groups/Group'
import Calendar from '../pages/Calendar/Calendar'
import CalendarStudent from '../pages/CalendarStudent/CalendarStudent'
import LessonPlan from '../pages/LessonPlan/LessonPlan'
import Assessments from '../pages/Assessments/Assessments'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'

import logo_gro from '../../images/Navigation/logo_gro.png'
import menu_pic_1 from '../../images/Navigation/menu_pic_1.png'
import menu_pic_2 from '../../images/Navigation/menu_pic_2.png'
import menu_pic_3 from '../../images/Navigation/menu_pic_3.png'
import menu_pic_4 from '../../images/Navigation/menu_pic_4.png'
import menu_pic_5 from '../../images/Navigation/menu_pic_5.png'
import top_face_1 from '../../images/Navigation/top_face_1.png'
import top_face_2 from '../../images/Navigation/top_face_2.png'
import top_face_3 from '../../images/Navigation/top_face_3.png'
import logo_face from '../../images/Navigation/logo_face.png'
import add_class from '../../images/Navigation/add_class.png'
import settings from '../../images/Navigation/settings.png'
import sign_out from '../../images/Navigation/sign_out.png'
import '../../main_style.css'
import './style.css'

class NavigationPanel extends Component {
  constructor(props) {
      super(props);

      this.state = {
        teacher: "John Smith"
      };
      this.props.location.state = {teacher: this.state.teacher};
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.location.pathname !== nextProps.location.pathname
  }





  render() {
    const teacher = this.state.teacher;
    return (
      <div className="nav__container">
        <header>
          <div className="header__left">
            <div>
              <Link to={'/'}>
                <img src={logo_gro} />
              </Link>
            </div>
            <div>
              <span>CLASS</span>
              <div className="circle__image--container">
                <img src={top_face_1} />
              </div>
              <div className="circle__image--container">
                <img src={top_face_2} />
              </div>
              <div className="circle__image--container">
                <img src={top_face_3} />
              </div>
            </div>
            <div>
              <img src={add_class} />
              <span>ADD CLASS</span>
            </div>
          </div>
          <div className="header__right">
            <img src={settings} />
          </div>
        </header>
        <main>
          <aside>
            <div className="user__logo">
              <div className="user__image--container">
                <img src={logo_face} />
              </div>
              <span>JOHN SMITH</span>
            </div>
            <ul className="side_menu">
              <li>
                <Link to={'/dashboard/students'} >
                  {/* <img src={menu_pic_1} /> */}
                  <span className="icon-students"></span>
                  <span>STUDENTS</span>
                </Link>
              </li>
              <li>
                <Link to={'/dashboard/groups'} >
                  {/* <img src={menu_pic_2} /> */}
                  <span className="icon-groups"></span>
                  <span>GROUPS</span>
                </Link>
              </li>
              <li>
                <Link to={'/dashboard/calendar'} >
                  {/* <img src={menu_pic_3} /> */}
                  <span className="icon-calendar"></span>
                  <span>CALENDAR</span>
                </Link>
              </li>
              <li>
                <Link to={'/dashboard/lesson_plan'} >
                  {/* <img src={menu_pic_4} /> */}
                  <span className="icon-lesson-plans"></span>
                  <span>LESSONS PLAN</span>
                </Link>
              </li>
              <li>
                <Link to={'/dashboard/assessments'} >
                  {/* <img src={menu_pic_5} /> */}
                  <span className="icon-assessments"></span>
                  <span>ASSESSMENTS</span>
                </Link>
              </li>
            </ul>
            <div className="sign_out">
              <Link to={'/sign_out'}>
                <img src={sign_out} />
                <span>LOG OUT</span>
              </Link>
            </div>
          </aside>
          <section>
            <div className="MAIN_CONTAINER">
              <UserRoute
                location={this.props.location}
                path="/dashboard/students"
                exact
                component={Students}
              />
              <UserRoute
                location={this.props.location}
                path="/dashboard/students/:student"
                exact
                component={StudentPage}
              />
              <UserRoute
                location={this.props.location}
                path={"/dashboard/groups"}
                exact
                component={Groups}
              />
              <UserRoute
                location={this.props.location}
                path={"/dashboard/groups/group"}
                exact
                component={Group}
              />
              {/* render={ (props) => <EscapeErrorRoute {...props} lockdownRoute={lockdownRoute} /> } */}
              <UserRoute
                location={this.props.location}
                path="/dashboard/calendar"
                exact
                component={Calendar}
              />
              <UserRoute
                location={this.props.location}
                path="/dashboard/lesson_plan"
                component={LessonPlan}
              />
              <UserRoute
                location={this.props.location}
                path="/dashboard/assessments"
                component={Assessments}
              />
            </div>
          </section>
        </main>
      </div>
    )
  }
}


export default NavigationPanel;
