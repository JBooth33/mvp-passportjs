import React, { Component } from 'react';
import Auth from '../../utils/Auth';
import { Link } from 'react-router-dom'

class Nav extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    }
  }

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus();
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="http://www.mvplogistics.com">MVP</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      {this.state.authenticated ? (
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/admin">Admin</a>
          </li>
          
        </ul>
        <span className="navbar-text">
          <a className="nav-link" href="/logout">Logout</a>
        </span>
      </div>
      ) : (
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
        </ul>
        <span>
          <a className="nav-link" href="/login">Login</a>
          {/* <Link className="nav-link" to="/login">Login</Link> */}
        </span>
        <span>
          <a className="nav-link" href="/create">Sign up</a>
        </span>
      </div>
      )}
    </nav>
    );
  }
}

export default Nav;
