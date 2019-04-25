import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

import './style.css';

class CreateUserDetails extends Component {
  render() {
    return (
      <Card style={{ maxWidth: "300px" }}>
        <CardHeader>Profile</CardHeader>
        <CardBody>
          <CardTitle>Finish Setting up</CardTitle>
          <p>Lorem ipsum dolor sit amet.</p>
          <Button>Save</Button>
        </CardBody>
        <CardFooter>Card footer</CardFooter>
      </Card>
    );
  }
}

export default CreateUserDetails;
