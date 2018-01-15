import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import decode from "jwt-decode";
import { composeWithDevTools } from "redux-devtools-extension";
//import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import rootReducer from "./rootReducer";
import { userLoggedIn } from "./actions/auth";
import UserRoute from './components/routes/UserRoute'
import setAuthorizationHeader from "./utils/setAuthorizationHeader";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import LoginPage from "./components/pages/Login/LoginPage";
import SignupPage from "./components/pages/Signup/SignupPage";
import NavigationPanel from "./components/navigation/NavigationPanel/NavigationPanel";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

if (localStorage.bookwormJWT) {
  const payload = decode(localStorage.bookwormJWT);
  const user = {
    token: localStorage.bookwormJWT,
    email: payload.email,
    confirmed: payload.confirmed
  };
  console.log(user);
  setAuthorizationHeader(localStorage.bookwormJWT);
  store.dispatch(userLoggedIn(user));
}

injectTapEventPlugin();

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <Route component={App} />
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById("root")
// );

const App = props => (
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <UserRoute path="/dashboard" component={NavigationPanel} />
          <Redirect to="/login" />
        </Switch>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker();
