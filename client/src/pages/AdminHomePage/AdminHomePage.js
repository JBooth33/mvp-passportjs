import React, { Component, Fragment } from 'react';
import Auth from '../../utils/Auth';
import { List, ListItem } from 'material-ui/List';
import { withUser } from '../../services/withUser';
import API from "../../utils/API";

class AdminHomePage extends Component {
    state = {
        stuff: null,
        userToken: null,
    }

    componentDidMount() {
        const userTokenEncoded = Auth.getToken()
        // only try loading stuff if the user is logged in.
        if (!userTokenEncoded) {
            return;
        }
        const userToken = Auth.decodeToken(userTokenEncoded);
        this.setState({userToken})


        API.getUsers(userTokenEncoded).then(res => console.log(res)) 

    }
    render() {
        const user = this.state.userToken; // get the user prop from props
        const { stuff } = this.state; // get stuff from state

        return (
            <Fragment>
                {user && stuff &&
                    <div>
                        <h1>Welcome back, {user.firstName}!</h1>
                        <List>
                            {stuff.map((s, i) => <ListItem key={i} primaryText={s} />)}
                        </List>
                    </div>
                }
                {user && !stuff &&
                    <div>Hold on, looking for your stuff...</div>
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
