import React, { Component } from "react";
import Auth from './utils/Auth';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Users from "./pages/Users";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Logout from "./components/Logout";
import SignUp from "./pages/SignUp";
import Dummy from "./components/Dummy";
import CreateAccountForm from "./pages/CreateAccountPage";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isUserAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Nav/>
        <Router>
          <MuiThemeProvider>
            <Switch>
              <Route exact path="/" component={Dummy} />
              <Route exact path="/home" component={Dummy} />
              <PrivateRoute exact path="/protected" component={Users} />
              <Route exact path="/users" component={Users} />
              <Route exact path="/create" component={CreateAccountForm} />
              <Route exact path="/request" component={Dummy} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/admin/users" component={Dummy} />
              <Route exact path="/admin/partners" component={Dummy} />
              <Route exact path="/admin/roles" component={Dummy} />
              <Route component={NoMatch} />
            </Switch>
          </MuiThemeProvider>
        </Router>
      </div>
    );
  }
}

export default App;

