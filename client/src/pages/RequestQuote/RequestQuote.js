import axios from 'axios';
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
// import API from "../../utils/API";
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
  handleSubmit(event){
    event.preventDefault();
    const originZip = document.getElementById('originZip').value;
    const destinationZip = document.getElementById('destinationZip').value;
    const weight = document.getElementById('weight').value;
    const classification = document.getElementById('classification').value;
    const dimensions = document.getElementById('dimensions').value;
    const pieces = document.getElementById('pieces').value;
    const hazMat = document.getElementById('hazMat').value;
    const specialRequest = document.getElementById('specialRequest').value;
    const specialInstructions = document.getElementById('specialInstructions').value;

    // post an auth request
    axios({
      method: "POST",
      url: "http://localhost:3002/request",
      data: {
        originZip: originZip,
        destinationZip: destinationZip,
        weight: weight,
        classification: classification,
        dimensions: dimensions,
        pieces: pieces,
        hazMat: hazMat,
        specialRequest: specialRequest,
        specialInstructions: specialInstructions
      }
    }).then((response) => {
      if (response.data.msg === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.msg === 'fail') {
        alert("Message failed to send.")
      }
    })
  }
  resetForm() {
    document.getElementById('request-form').reset();
  }

  render() {
    // const { error } = this.state;
    return (
      <Grid fluid>
        <Row>
          <Col xs={6} xsOffset={3}>
            <form id="request-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <h1>Online Quote Request</h1>
              <h4> All fields are required in order to get a timely quote.</h4>
              {/* {error &&
              <div>
                {error}
              </div>
            } */}
              <div>
                <TextField
                  name="originZip"
                  id="originZip"
                  hintText="Origin Zip Code"
                  floatingLabelText="Origin Zip Code"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="destinationZip"
                  id="destinationZip"
                  hintText="Desitination Zip Code"
                  floatingLabelText="Destination Zip Code"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="weight"
                  id="weight"
                  hintText="Shipment Weight"
                  floatingLabelText="Shipment Weight"
                  onChange={this.handleInputChanged}
                />
              </div>

              <div>
                <TextField
                  name="classification"
                  id="classification"
                  hintText="Shipment Class"
                  floatingLabelText="Shipment Class"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="dimensions"
                  id="dimensions"
                  hintText="Shipment Dimensions"
                  floatingLabelText="Shipment Dimensions"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="pieces"
                  id="pieces"
                  hintText="Number of Pieces"
                  floatingLabelText="Number of Pieces"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="hazMat"
                  id="hazMat"
                  hintText="Hazard Materials (Y/N)"
                  floatingLabelText="Hazard Materials (Y/N)"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="specialRequest"
                  id="specialRequest"
                  hintText="Special Requests/Needs"
                  floatingLabelText="Special Requests/Needs"
                  onChange={this.handleInputChanged}
                />
              </div>

              <div>
                <TextField
                  name="specialInstructions"
                  id="specialInstructions"
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