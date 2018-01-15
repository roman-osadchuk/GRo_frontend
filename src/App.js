import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/Login/LoginPage";
import SignupPage from "./components/pages/Signup/SignupPage";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import NavigationPanel from "./components/navigation/NavigationPanel/NavigationPanel";
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './main_style.scss'
import './_variables.scss'


const NavigationPanel = ({ location, match, isAuthenticated }) => (
  <MuiThemeProvider>
    <div>
      {/* {isAuthenticated && <NavigationPanel location={location} />} */}
      {/* <DashboardPage location={location} /> */}
        {/* <Redirect from="/" to="/dashboard" /> */}
        <Route
          location={location}
          path="/"
          exact
          component={HomePage}
        />
        <Route
          location={location}
          path="/login"
          exact
          component={LoginPage}
        />
        <Route
          location={location}
          path="/signup"
          exact
          component={SignupPage}
        />

        <UserRoute
          location={location}
          path="/dashboard"
          component={NavigationPanel}
        />

    </div>
  </MuiThemeProvider>
);

NavigationPanel.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email
  };
}

export default connect(mapStateToProps)(NavigationPanel);
