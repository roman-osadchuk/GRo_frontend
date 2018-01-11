import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import AsidePanel from '../AsidePanel/AsidePanel'

import UserRoute from '../../routes/UserRoute'
import Students from '../../pages/Students/Students/Students'
import StudentPage from '../../pages/Students/StudentPage/StudentPage'
import AddStudent from '../../pages/Students/AddStudent/AddStudent'
import Groups from '../../pages/Groups/Groups'
import Group from '../../pages/Groups/Group'
import Calendar from '../../pages/Calendar/Calendar'
import CalendarStudent from '../../pages/CalendarStudent/CalendarStudent'
import LessonPlan from '../../pages/LessonPlan/LessonPlan'
import Assessments from '../../pages/Assessments/Assessments'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
import NavSidePanel from '../NavSidePanel/NavSidePanel'

import '../../../main_style.scss'
import './style.scss'


const NavigationPanel = ({ match }) => (
  <AsidePanel>
    <Switch>
      <UserRoute path={`${match.path}/students`} exact component={Students} />
      <UserRoute path={`${match.path}/students/:student`} component={StudentPage} />
      <UserRoute path={`${match.path}/add_student`} component={AddStudent} />
      <UserRoute path={`${match.path}/groups`} component={Groups} />
      <UserRoute path={`${match.path}/group`} component={Group} />
      <UserRoute path={`${match.path}/calendar`} component={Calendar} />
      <UserRoute path={`${match.path}/lesson_plan`} component={LessonPlan} />
      <UserRoute path={`${match.path}/assessments`} component={Assessments} />
      <Route to={`${match.path}/404`} component={NotFoundPage}/>
    </Switch>
  </AsidePanel>
)

{/* render={ (props) => <EscapeErrorRoute {...props} lockdownRoute={lockdownRoute} /> } */}

export default NavigationPanel





// import React, { Component } from "react"
// import PropTypes from "prop-types"
// import { connect } from "react-redux"
// import { Switch, Route, Link } from "react-router-dom"
// import * as actions from "../../../actions/auth"
//
// import UserRoute from '../../routes/UserRoute'
// import Students from '../../pages/Students/Students/Students'
// import StudentPage from '../../pages/Students/StudentPage/StudentPage'
// import AddStudent from '../../pages/Students/AddStudent/AddStudent'
// import Groups from '../../pages/Groups/Groups'
// import Group from '../../pages/Groups/Group'
// import Calendar from '../../pages/Calendar/Calendar'
// import CalendarStudent from '../../pages/CalendarStudent/CalendarStudent'
// import LessonPlan from '../../pages/LessonPlan/LessonPlan'
// import Assessments from '../../pages/Assessments/Assessments'
// import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
// import NavSidePanel from '../NavSidePanel/NavSidePanel'
//
//
// import logo_gro from '../../../images/Navigation/logo_gro.png'
// import top_face_1 from '../../../images/Navigation/top_face_1.png'
// import top_face_2 from '../../../images/Navigation/top_face_2.png'
// import top_face_3 from '../../../images/Navigation/top_face_3.png'
// import logo_face from '../../../images/Navigation/logo_face.png'
// import add_class from '../../../images/Navigation/add_class.png'
// import settings from '../../../images/Navigation/settings.png'
//
// import Drawer from 'material-ui/Drawer';
// import RaisedButton from 'material-ui/RaisedButton';
//
// import '../../../main_style.scss'
// import './style.scss'
//
// class NavigationPanel extends Component {
//   constructor(props) {
//       super(props);
//
//       this.state = {
//         open: false,
//         width: null
//       };
//       //this.props.location.state = {teacher: this.state.teacher};
//       this.handleToggle = this.handleToggle.bind(this);
//       this.handleClose = this.handleClose.bind(this);
//       this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
//       this.toggleHeaderOnTablets = this.toggleHeaderOnTablets.bind(this);
//
//
//   };
//
//   componentDidMount() {
//     this.updateWindowDimensions();
//     window.addEventListener('resize', this.updateWindowDimensions);
//     document.getElementsByTagName('header')[0].style.display = 'flex';
//   }
//
//   componentWillUnmount() {
//     window.removeEventListener('resize', this.updateWindowDimensions);
//   }
//
//   updateWindowDimensions() {
//     this.setState({ width: window.innerWidth });
//   }
//
//   // shouldComponentUpdate(nextProps, nextState) {
//   //   return this.props.location.pathname !== nextProps.location.pathname
//   // }
//
//   handleToggle() {
//     this.setState({open: !this.state.open});
//   }
//
//   handleClose() {
//     this.setState({open: false});
//   }
//
//   toggleHeaderOnTablets() {
//     console.log(this)
//   }
//
//   render() {
//     //console.log(this.state.width);
//     const width = this.state.width;
//     //const teacher = this.state.teacher;
//     return (
//       <div className="dashboard_container">
//
//
//
//         <header id="header">
//
//           <div>
//             <div>
//               <Link to={'/'}>
//                 <img src={logo_gro} />
//               </Link>
//             </div>
//             <div>
//               <span>CLASS</span>
//               <div className="circle_image_container">
//                 <img src={top_face_1} />
//               </div>
//               <div className="circle_image_container">
//                 <img src={top_face_2} />
//               </div>
//               <div className="circle_image_container">
//                 <img src={top_face_3} />
//               </div>
//             </div>
//             <div>
//               <img src={add_class} />
//               <span>ADD CLASS</span>
//             </div>
//           </div>
//           <div>
//             <img src={settings} />
//           </div>
//           <div className="toggled_header">
//             <div className="toggle_header_icon">
//               <i className="material-icons" onClick={this.handleToggle}>list</i>
//             </div>
//           </div>
//
//
//         </header>
//
//
//
//
//         <main>
//
//           {
//             (width > 980 && width !== null)
//             ?
//             <NavSidePanel />
//             :
//             <Drawer
//               docked={false}
//               width={215}
//               open={this.state.open}
//               onRequestChange={(open) => this.setState({open})}
//             >
//               <NavSidePanel />
//             </Drawer>
//           }
//
//           <section>
//             <div className="MAIN_CONTAINER">
//               <Switch>
//                 <UserRoute
//                   location={this.props.location}
//                   path="/dashboard/students"
//                   exact
//                   component={Students}
//                 />
//                 <UserRoute
//                   location={this.props.location}
//                   path="/dashboard/students/:student"
//                   exact
//                   component={StudentPage}
//                 />
//                 <UserRoute
//                   location={this.props.location}
//                   path="/dashboard/add_student"
//                   component={AddStudent}
//                 />
//                 <UserRoute
//                   location={this.props.location}
//                   path={"/dashboard/groups"}
//                   exact
//                   component={Groups}
//                 />
//                 <UserRoute
//                   location={this.props.location}
//                   path={"/dashboard/groups/group"}
//                   exact
//                   component={Group}
//                 />
//                 <UserRoute
//                   location={this.props.location}
//                   path="/dashboard/calendar"
//                   exact
//                   component={Calendar}
//                 />
//                 <UserRoute
//                   location={this.props.location}
//                   path="/dashboard/lesson_plan"
//                   component={LessonPlan}
//                 />
//                 <UserRoute
//                   location={this.props.location}
//                   path="/dashboard/assessments"
//                   component={Assessments}
//                 />
//               </Switch>
//             </div>
//           </section>
//         </main>
//       </div>
//     )
//   }
// }
//
//
// export default NavigationPanel;
