import React, { Component} from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import SubmitButton from './SubmitButton';

export default class AccountForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: "",
            companyAddress1: "",
            companyAddress2: "",
            companyCity: "",
            companyState: "",
            companyURL: "",
            companyContact: "",
            companyContactPhone: "",
            userFirstName: "",
            userLastName: "",
            userTitle: "",
            userRole: "",
            userEmail: "",
            userPhone: "",
            password: "",
            confirmPassword: ""
        }
    }
    render() {                         
         return (
          <Grid fluid>
            <Row>
              <Col xs={6} xsOffset={3}>
                <form>
                  <div>
                    <TextField
                      name="companyName"
                      hintText="*Company Name"
                      floatingLabelText="*Company Name"
                      onChange={this.handleInputChanged}
                    />
                  </div>
                  <div>
                    <TextField
                      name="companyAddress1"
                      hintText="*Company Address Line 1"
                      floatingLabelText="*Company Address Line 1"
                      onChange={this.handleInputChanged}
                    />
                  </div>
                  <div>
                    <TextField
                      name="companyAddress2"
                      hintText="Company Address Line 2"
                      floatingLabelText="Company Address Line 2"
                      onChange={this.handleInputChanged}
                    />
                  </div>
                  
                  <div>
                    <TextField
                      name="companyCity"
                      hintText="*City"
                      floatingLabelText="*City"
                      onChange={this.handleInputChanged}
                    />
                  </div>
                  <div>
                    <TextField
                      name="companyState"
                      hintText="*State"
                      floatingLabelText="*State"
                      onChange={this.handleInputChanged}
                    />
                  </div>
                  <div>
                    <TextField
                      name="companyZip"
                      hintText="*Zip Code (5 digits)"
                      floatingLabelText="*Zip Code (5 digits)"
                      onChange={this.handleInputChanged}
                    />
                  </div>
                  <div>
                    <TextField
                      name="companyContact"
                      hintText="Primary Company Contact"
                      floatingLabelText="Primary Company Contact"
                      onChange={this.handleInputChanged}
                    />
                  </div>
                  <div>
                    <TextField
                      name="companyContactPhone"
                      hintText="Company Contact Phone"
                      floatingLabelText="Company Contact Phone"
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
                      name="userFirstName"
                      hintText="*First Name"
                      floatingLabelText="*First Name"
                      onChange={this.handleInputChanged}
                    />
                  </div>
                  <div>
                    <TextField
                      name="userLastName"
                      hintText="*Last Name"
                      floatingLabelText="*Last Name"
                      onChange={this.handleInputChanged}
                    />
                  </div>
                  <div>
                    <TextField
                      name="userTitle"
                      hintText="Current Title"
                      floatingLabelText="Current Title"
                      onChange={this.handleInputChanged}
                    />
                  </div>
                  
                  <div>
                    <TextField
                      name="userRole"
                      hintText="*Role with MVP"
                      floatingLabelText="*Role with MVP"
                      onChange={this.handleInputChanged}
                    />
                  </div>
                  
                  <div>
                    <TextField
                      name="userEmail"
                      hintText="*Email Address"
                      floatingLabelText="*Email Address"
                      onChange={this.handleInputChanged}
                    />
                  </div>
                  <div>
                    <TextField
                      name="userPhone"
                      hintText="*Phone Number"
                      floatingLabelText="*Phone Number"
                      onChange={this.handleInputChanged}
                    />
                    </div>
    
                    <div>
                    <TextField
                      name="password"
                      hintText="*Password"
                      floatingLabelText="*Password"
                      onChange={this.handleInputChanged}
                    />
                    </div>
    
                    <div>
                    <TextField
                      name="confirmPassword"
                      hintText="*Confirm Password"
                      floatingLabelText="*Confirm Password"
                      onChange={this.handleInputChanged}
                    />
                    </div>
                    
                    <div>
                    <SubmitButton primary type="submit" onClick={this.handleLogin}>
                      Log In
                    </SubmitButton>
                  </div>
                 </form>
              </Col>
            </Row>
          </Grid>
        );
      }
}



