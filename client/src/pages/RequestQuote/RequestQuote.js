import axios from 'axios';
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import API from "../../utils/API";
import "../../css/main.css";
import "../../css/noscript.css";
import RaisedButton from 'material-ui/RaisedButton';
// import SubmitButton from '../../components/SubmitButton';

 class CreateQuotePage extends Component {
  state = {
    fromName: null,
    fromAddress1: null,
    fromAddress2: null,
    fromCity: null,
    fromState: null,
    fromZip: null,
    fromContact: null,
    fromPhone: null,
    toName: null,
    toAddress1: null,
    toAddress2: null,
    toCity: null,
    toState: null,
    toZip: null,
    toContact: null,
    toPhone: null,
    estPickup: null,
    estDelivery: null,
    contentDesc: null,
    contentWeight: null,
    contentQuantity: null,
    contentUoM: null,
    specialInstruct: null
  }
   handleInputChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleLogin = (event) => {
    event.preventDefault();
     const { fromName,
      fromAddress1,
      fromAddress2,
      fromCity,
      fromState,
      fromZip,
      fromContact,
      fromPhone,
      toName,
      toAddress1,
      toAddress2,
      toCity,
      toState,
      toZip,
      toContact,
      toPhone,
      estPickup,
      estDelivery,
      contentDesc,
      contentWeight,
      contentQuantity,
      contentUoM,
      specialInstruct} = this.state;
    const { history } = this.props;
     // post an auth request
    API.saveQuote('/api/auth', {
      fromName,
      fromAddress1,
      fromAddress2,
      fromCity,
      fromState,
      fromZip,
      fromContact,
      fromPhone,
      toName,
      toAddress1,
      toAddress2,
      toCity,
      toState,
      toZip,
      toContact,
      toPhone,
      estPickup,
      estDelivery,
      contentDesc,
      contentWeight,
      contentQuantity,
      contentUoM,
      specialInstruct
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
        error: err.response.status === 401 ? 'Please review your input and resubmit. Thank You. Call us direct if you still experieince issues.' : err.message
      });
    });
  }
   render() {
    const { error } = this.state;
     return (
      <Grid fluid>
        <Row>
          <Col xs={6} xsOffset={3}>
            <form onSubmit={this.handleLogin}>
              <h1>Online Quote Request</h1>
              <h4> All fields are required in order to get a timely quote.</h4>
              {error &&
                <div>
                  {error}
                </div>
              }
              <div>
                <TextField
                  name="fromName"
                  hintText="Shipper Name"
                  floatingLabelText="*Shipper Name"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="fromAddress1"
                  hintText="From Address Line 1"
                  floatingLabelText="From Address Line 1"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="fromAddress2"
                  hintText="From Address Line 2"
                  floatingLabelText="From Address Line 2"
                  onChange={this.handleInputChanged}
                />
              </div>
              
              <div>
                <TextField
                  name="fromCity"
                  hintText="From City"
                  floatingLabelText="From City"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="fromState"
                  hintText="From State"
                  floatingLabelText="From State"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="fromZip"
                  hintText="From Zip Code (5 digits)"
                  floatingLabelText="From Zip Code (5 digits)"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="fromContact"
                  hintText="From Contact"
                  floatingLabelText="From Contact"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="fromPhone"
                  hintText="From Contact Phone"
                  floatingLabelText="From Contact Phone"
                  onChange={this.handleInputChanged}
                />
                </div>
            </form>
          </Col>
        </Row>
        <Row>
          <Col xs={6} xsOffset={3}>
            <form onSubmit={this.handleLogin}>
              {error &&
                <div>
                  {error}
                </div>
              }
              <div>
                <TextField
                  name="toName"
                  hintText="Receiver Name"
                  floatingLabelText="Receiver Name"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="toAddress1"
                  hintText="To Address Line 1"
                  floatingLabelText="To Address Line 1"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="toAddress2"
                  hintText="To Address Line 2"
                  floatingLabelText="To Address Line 2"
                  onChange={this.handleInputChanged}
                />
              </div>
              
              <div>
                <TextField
                  name="toCity"
                  hintText="To City"
                  floatingLabelText="To City"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="toState"
                  hintText="To State"
                  floatingLabelText="To State"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="toZip"
                  hintText="To Zip Code (5 digits)"
                  floatingLabelText="To Zip Code (5 digits)"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="toContact"
                  hintText="To Contact"
                  floatingLabelText="To Contact"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="toPhone"
                  hintText="To Contact Phone"
                  floatingLabelText="To Contact Phone"
                  onChange={this.handleInputChanged}
                />
                </div>
            </form>
          </Col>
        </Row>
         <Row>
          <Col xs={6} xsOffset={3}>
            <form onSubmit={this.handleLogin}>
               <div>
                <TextField
                  name="estPickup"
                  hintText="*First Name"
                  floatingLabelText="*First Name"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="estDelivery"
                  hintText="*Last Name"
                  floatingLabelText="*Last Name"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="contentDesc"
                  hintText="Current Title"
                  floatingLabelText="Current Title"
                  onChange={this.handleInputChanged}
                />
              </div>
              
              <div>
                <TextField
                  name="contentWeight"
                  hintText="*Role with MVP"
                  floatingLabelText="*Role with MVP"
                  onChange={this.handleInputChanged}
                />
              </div>
              
              <div>
                <TextField
                  name="contentQuantity"
                  hintText="*Email Address"
                  floatingLabelText="*Email Address"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="contentUoM"
                  hintText="*Phone Number"
                  floatingLabelText="*Phone Number"
                  onChange={this.handleInputChanged}
                />
                </div>

                <div>
                <TextField
                  name="specialInstruct"
                  hintText="*Password"
                  floatingLabelText="*Password"
                  onChange={this.handleInputChanged}
                />
                </div>

                
                <div>
                <RaisedButton primary type="submit">
                 Submit Quote Request
                </RaisedButton>
              </div>
             </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default CreateQuotePage