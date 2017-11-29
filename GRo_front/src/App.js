import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/Login/LoginPage";
import SignupPage from "./components/pages/Signup/SignupPage";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import NavigationPanel from "./components/navigation/NavigationPanel";
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage'
import './main_style.scss'
import './_variables.scss'


const App = ({ location, isAuthenticated }) => (
  <div>
    {/* {isAuthenticated && <NavigationPanel location={location} />} */}
    {/* <DashboardPage location={location} /> */}

    <Route
      location={location}
      path="/"
      exact
      component={HomePage}
    />
    <GuestRoute
      location={location}
      path="/login"
      exact
      component={LoginPage}
    />
    <GuestRoute
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
    <Route exact path="/sign_out" render={() =>  (
      <Redirect to={{
        pathname: '/login',
        state: { from: location }
        }}
      />)}
    />
  </div>
);

App.propTypes = {
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

export default connect(mapStateToProps)(App);
