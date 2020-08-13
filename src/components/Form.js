import React from "react";
import "../form.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const Forms = (props) => {
  return (
    <div className="container form-container">
     <Form onSubmit={props.getWeather}>
      <FormGroup>
        <Label for="exampleEmail">City</Label>
        <Input  type="text"
              name="city"
              className="form-control"
              placeholder="City" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Country</Label>
        <Input  type="text"
              name="country"
              className="form-control"
              placeholder="Country"/>
      </FormGroup>
                 <Button className="submit-btn">Get Weather</Button>
    </Form>

    </div>
    
  );
};

export default Forms;
