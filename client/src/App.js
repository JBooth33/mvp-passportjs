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
import AdminHomePage from "./pages/AdminHomePage";
import UserAdminPage from "./pages/UsersAdminPage";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       Auth.isUserAuthenticated() ? (
//         <Component {...props} />
//       ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: props.location }
//             }}
//           />
//         )
//     }
//   />
// );

class App extends Component {
  state = { userToken: null }
  setLogin(userToken) {
    this.setState({
      userToken
    })
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Router>
          <MuiThemeProvider>
            <Switch>
              <Route exact path="/" userToken={this.state.userToken} component={Dummy} />
              {/* <Route exact path="/home" userToken={this.state.userToken} component={Dummy} /> */}
              {/* <PrivateRoute exact path="/protected" component={Users} /> */}
              <Route exact path="/users" userToken={this.state.userToken} component={Users} />
              <Route exact path="/create" component={CreateAccountForm} />
              <Route exact path="/request" userToken={this.state.userToken} component={Dummy} />
              <Route exact path="/login" render={(props) => <Login {...props} onLogin={this.setLogin.bind(this)} /> } />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/admin" userToken={this.state.userToken} component={AdminHomePage} />
              <Route exact path="/admin/users" userToken={this.state.userToken} component={UserAdminPage} />
              <Route exact path="/admin/partners" userToken={this.state.userToken} component={Dummy} />
              <Route exact path="/admin/roles" userToken={this.state.userToken} component={Dummy} />
              <Route component={NoMatch} />
            </Switch>
          </MuiThemeProvider>
        </Router>
      </div>
    );
  }
}

export default App;

