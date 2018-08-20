import React, { Component, Fragment } from 'react';
import "../../css/main.css";
import "../../css/noscript.css";
import Card from "./Homecard";
import Auth from '../../utils/Auth';

class HomePage extends Component {

  state ={
    userToken: null
  }

  componentDidMount() {

    this.loadHomePage();
  };

  loadHomePage = () => {
    const userTokenEncoded = Auth.getToken()
        // only try loading stuff if the user is logged in.
        if (!userTokenEncoded) {
            return;
        }
        const userToken = Auth.decodeToken(userTokenEncoded);
        this.setState({ userToken })
  }

  render() {
    const user = this.state.userToken; // get the user prop from props

    return (
        <Fragment>
            {user &&
                <div>

                    <Card/>

                </div>
            }
            {!user &&
                <div>Hey! I don't recognize you! Register and log in using the link above</div>
            }
        </Fragment>
    )
  }
}

export default HomePage;


