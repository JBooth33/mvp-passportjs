import React, { Component, Fragment } from 'react';
import Auth from '../../utils/Auth';
import { List, ListItem } from 'material-ui/List';
import { withUser } from '../../services/withUser';
import API from "../../utils/API";
import "../../css/main.css";
import "../../css/noscript.css";

class AdminHomePage extends Component {
    state = {
        //stuff: null,
        userToken: null,
    }

    componentDidMount() {
        const userTokenEncoded = Auth.getToken()
        // only try loading stuff if the user is logged in.
        if (!userTokenEncoded) {
            return;
        }
        const userToken = Auth.decodeToken(userTokenEncoded);
        this.setState({ userToken })


        API.getUsers(userTokenEncoded).then(res => console.log(res))


    }
    render() {
        const user = this.state.userToken; // get the user prop from props
        //const { stuff } = this.state; // get stuff from state

        return (
            <Fragment>
                {user &&
                    <div className="card">
                        <h1>Welcome back, {user.firstName}!</h1>
                        <body className="is-preload">
                            <div id="wrapper">
                                <div id="main">
                                    <div className="inner">
                                        <section className="tiles">
                                            <article className="style1">
                                                <span className="image">
                                                    <img src="assets/images/pic01.jpg" alt="" />
                                                </span>
                                                <a href="/admin/users">
                                                    <h2>Users</h2>
                                                    <div className="content">
                                                        <p>Manage User Information.</p>
                                                    </div>
                                                </a>
                                            </article>
                                            <article className="style2">
                                                <span className="image">
                                                    <img src="assets/images/pic02.jpg" alt="" />
                                                </span>
                                                <a href="/admin/partners">
                                                    <h2>Partners</h2>
                                                    <div className="content">
                                                        <p>Manage Partner Information. </p>
                                                    </div>
                                                </a>
                                            </article>
                                            <article className="style3">
                                                <span className="image">
                                                    <img src="assets/images/pic03.jpg" alt="" />
                                                </span>
                                                <a href="/admin/roles">
                                                    <h2>Roles</h2>
                                                    <div className="content">
                                                        <p>Manage Roles and User Access.</p>
                                                    </div>
                                                </a>
                                            </article>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </body>
                    </div>
                    // }
                    // {user && !stuff &&
                    //     <div>Hold on, looking for your stuff...</div>
                }
                {!user &&
                    <div>Hey! I don't recognize you! Register and log in using the link above</div>
                }
            </Fragment>
        );
    }
}

// withUser function will wrap the specified component in another component that will
// inject the currently logged in user as a prop called "user"
export default withUser(AdminHomePage);
