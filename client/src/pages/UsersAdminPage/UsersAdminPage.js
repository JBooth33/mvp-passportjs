import React, { Component, Fragment } from 'react';
// import { Grid, Row, Col } from 'react-flexbox-grid';
// import { List, ListItem } from 'material-ui/List';
// import TextField from 'material-ui/TextField';
import API from "../../utils/API";
// import { withUser } from '../../services/withUser';
import Auth from '../../utils/Auth';
import "../../css/main.css";
import "../../css/noscript.css";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
            .then(res => {
                console.log(res.data),
                    this.setState({ userData: res.data })
            }
            )
            .catch(err => console.log(err)
            );

        console.log(this.state.userData);
    };

    render() {
        const user = this.state.userToken; // get the user prop from props
        const users = this.state.userData

        const styles = theme => ({
            root: {
                width: '90%',
                marginTop: theme.spacing.unit * 3,
                overflowX: 'auto',
            },
            table: {
                minWidth: 700,
            },
        });

        return (
            <Fragment>
                {user &&
                    <div>
                        <h1>Here are the Users {users.firstName}!</h1>

                        <Paper >
                            <Table >
                                <TableHead>
                                    <TableRow>
                                        <TableCell numeric>User Number</TableCell>
                                        <TableCell string>First Name</TableCell>
                                        <TableCell string>Last Name</TableCell>
                                        <TableCell numeric>Phone Number</TableCell>
                                        <TableCell string>Title</TableCell>
                                        <TableCell string>Role</TableCell>
                                        <TableCell string>Email Address</TableCell>
                                        <TableCell string>Status</TableCell>
                                        <TableCell string>Date Created</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {users.map(user => {
                                        return (
                                            <TableRow key={user.id}>
                                                <TableCell component="th" scope="row">
                                                    {user.id}
                                                </TableCell>
                                                <TableCell string>{user.firstName}</TableCell>
                                                <TableCell string>{user.lastName}</TableCell>
                                                <TableCell numeric>{user.phoneNumber}</TableCell>
                                                <TableCell string>{user.title}</TableCell>
                                                <TableCell string>{user.role}</TableCell>
                                                <TableCell string>{user.emailAddress}</TableCell>
                                                <TableCell string>{user.status}</TableCell>
                                                <TableCell string>{user.dateCreated}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </Paper>

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