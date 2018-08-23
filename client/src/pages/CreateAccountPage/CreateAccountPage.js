import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-flexbox-grid';
//import TextField from 'material-ui/TextField';
import API from "../../utils/API";
// import RaisedButton from 'material-ui/RaisedButton';
//import SubmitButton from '../../components/SubmitButton';
import "../../css/main.css";
import "../../css/noscript.css";

class CreateAccountPage extends Component {
  state = {
    companyName: null,
    companyAddress1: null,
    companyAddress2: null,
    companyCity: null,
    companyState: null,
    companyZip: null,
    companyURL: null,
    companyContact: null,
    companyContactPhone: null,
    userFirstName: null,
    userLastName: null,
    userTitle: null,
    userRole: null,
    userEmail: null,
    userPhone: null,
    password: null,
    confirmPassword: null
  }
  handleInputChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleLogin = (event) => {
    event.preventDefault();
    console.log("Button Clicked");
    const { history } = this.props;
    // post an auth request
    API.saveUser({
      companyName: this.state.companyName,
      companyAddress1: this.state.companyAddress1,
      companyAddress2: this.state.companyAddress2,
      companyCity: this.state.companyCity,
      companyState: this.state.companyState,
      companyZip: this.state.companyZip,
      companyURL: this.state.companyURL,
      companyContact: this.state.companyContact,
      companyContactPhone: this.state.companyContactPhone,
      firstName: this.state.userFirstName,
      lastName: this.state.userLastName,
      title: this.state.userTitle,
      role: this.state.userRole,
      email: this.state.userEmail,
      phoneNumber: this.state.userPhone,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    })
      .then(user => {
        // if the response is successful, update the current user and redirect to the home page
        // update(user.data);
        history.push('/');
      })
      .catch(err => {
        // an error occured, so let's record the error in our state so we can display it in render
        // if the error response status code is 401, it's an invalid username or password.
        // if it's any other status code, there's some other unhandled error so we'll just show
        // the generic message.
        this.setState({
          error: err.response.status === 401 ? 'Invalid Company Id, Username or Password. Please try again or contact us for assistance.' : err.message
        });
      });
  }
  render() {
    const { error } = this.state;

    return (

        <body className="is-preload">


			<header id="header">
				<h1>Welcome to MVP Insight Access Request Form</h1>
				<p>All fields are required. </p>
			</header>


<Col s={6}>
<Row>
<form id="signup-form" method="post" action="#">
				<ul>
        <input type="text" name="compnayName" id="companyName" placeholder="Company Name" />
<br></br>
        <input type="text" name="companyAddress1" id="companyAddress1" placeholder="Company Address" />
 <br></br>
        <input type="text" name="companyAddress2" id="companyAddress2" placeholder="Company Address" />
<br></br>        
        <input type="text" name="companyCity" id="companyCity" placeholder="City" />
<br></br>
        <input type="text" name="companyState" id="companyState" placeholder="State" />
 <br></br>
        <input type="text" name="companyZip" id="companyZip" placeholder="Postal Code" />

<br></br>
        <input type="text" name="companyURL" id="companyURL" placeholder="Company Website (URL)" />
<br></br>
        <input type="text" name="companyContact" id="companyContact" placeholder="Primary Contact" />
 <br></br>
        <input type="text" name="companyContactPhone" id="companyContactPhone" placeholder="Primary Contact Phone Number" />
<br></br>
</ul>
</form>
</Row>
</Col>

<Col s={6}>
<Row>
<form id="signup-form" method="post" action="#">
<ul>
        <input type="text" name="userFirstName" id="userFirstName" placeholder="First Name" />
 <br></br>
        <input type="text" name="userLastName" id="userLastName" placeholder="Last Name" />
<br></br>        
        <input type="text" name="userTitle" id="userTitle" placeholder="Title" />
<br></br>
        <fieldset>
                      <label>Role with MVP</label>
                         <select id = "myList">
                           <option value = "1">Warehouse</option>
                           <option value = "2">Logisitics</option>
                           <option value = "3">Carrier</option>
                           <option value = "4">Supply Chain Management</option>
                           <option value = "5">Supply Chain Specialist</option>
                           <option value = "6">TT Access</option>
                           <option value = "7">MVP Team Member</option>
                           <option value = "8">MVP Admin</option>
                        </select>
            
        </fieldset>
 <br></br>
        <input type="email" name="userEmail" id="userEmail" placeholder="E-mail Address" />

<br></br>
        <input type="text" name="userPhone" id="userPhone" placeholder="Phone Number" />
<br></br>
        <input type="text" name="password" id="password" placeholder="Password" />
 <br></br>
        <input type="text" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" />
<br></br>
        <input type="submit" value="Register" />
			  </ul>
                          </form>
                          </Row>
</Col>



              <p href="">Contact Support</p>
                
    </body>

    );
  }
}

export default CreateAccountPage;