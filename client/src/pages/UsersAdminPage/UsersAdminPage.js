import React, { Component, Fragment } from 'react';
// import { Grid, Row, Col } from 'react-flexbox-grid';
// import { List, ListItem } from 'material-ui/List';
// import TextField from 'material-ui/TextField';
import API from "../../utils/API";
// import { withUser } from '../../services/withUser';
import Auth from '../../utils/Auth';
import "../../css/main.css";
import "../../css/noscript.css";
import EnhancedTable from "./UserTable"

class UserAdminPage extends Component {

    state = {
        userToken: null,
        userData: []
    };

    componentDidMount() {

        
        this.loadUsers();
        //console.log(this.state.users)
    };
    
    loadUsers = () => {
        
        const userTokenEncoded = Auth.getToken()
        // only try loading stuff if the user is logged in.
        if (!userTokenEncoded) {
            return;
        }
        const userToken = Auth.decodeToken(userTokenEncoded);
        this.setState({ userToken })
        
        // const userData = API.getUsers(userTokenEncoded);
        // this.setState({ userData })
        // console.log(userData);

        // API.getUsers(userTokenEncoded).then(res => console.log(res.data))
        // console.log("User Data" + this.state.userData)


        API.getUsers(userTokenEncoded)
            .then(res =>
                {console.log(res.data),
                this.setState({ userData: res.data })}
            )
            .catch(err => console.log(err)
        );

        console.log(this.state.userData);    
    };

    render() {
        const user = this.state.userToken; // get the user prop from props
        const users = this.state.userData

        return (
            <Fragment>
                {user &&
                    <div>
                        <h1>Here are the Users {user.firstName}!</h1>

                        <EnhancedTable />

                    </div>
                }
                {!user &&
                    <div>Hey! I don't recognize you! Register and log in using the link above</div>
                }
            </Fragment>
        )
    }
}

export default UserAdminPage;