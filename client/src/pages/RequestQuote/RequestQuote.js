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
    originZip: null,
    destinationZip: null,
    weight: null,
    classification: null,
    dimensions: null,
    pieces: null,
    hazMat: null,
    specialRequest: null,
    specialInstructions: null

  }
   handleInputChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleLogin = (event) => {
    event.preventDefault();
     const { originZip,
      destinationZip,
      weight,
      classification,
      dimensions,
      pieces,
      hazMat,
      specialRequest,
      specialInstructions} = this.state;
      
    const { history } = this.props;
     // post an auth request
    API.saveQuote('/api/auth', {
      originZip,
      destinationZip,
      weight,
      classification,
      dimensions,
      pieces,
      hazMat,
      specialRequest,
      specialInstructions
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
                  name="originZip"
                  hintText="Origin Zip Code"
                  floatingLabelText="Origin Zip Code"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="destinationZip"
                  hintText="Desitination Zip Code"
                  floatingLabelText="Destination Zip Code"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="weight"
                  hintText="Shipment Weight"
                  floatingLabelText="Shipment Weight"
                  onChange={this.handleInputChanged}
                />
              </div>
              
              <div>
                <TextField
                  name="classification"
                  hintText="Shipment Class"
                  floatingLabelText="Shipment Class"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="dimensions"
                  hintText="Shipment Dimensions"
                  floatingLabelText="Shipment Dimensions"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="pieces"
                  hintText="Number of Pieces"
                  floatingLabelText="Number of Pieces"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="hazMat"
                  hintText="Hazard Materials (Y/N)"
                  floatingLabelText="Hazard Materials (Y/N)"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="specialRequest"
                  hintText="Special Requests/Needs"
                  floatingLabelText="Special Requests/Needs"
                  onChange={this.handleInputChanged}
                />
                </div>
          
              <div>
                <TextField
                  name="specialInstructions"
                  hintText="Special Instructions"
                  floatingLabelText="Special Instructions"
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