import React, { Component } from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormInput,
  FormGroup
} from "shards-react";

import './style.css';

const names = [
  "Tyrion Lannister",
  "Cersei Lannister",
  "Daenerys Targaryen",
  "Jon Snow",
  "Robb Stark",
  "Jorah Mormont",
  "Catelyn Stark",
  "Petyr Baelish",
  "Tywin Lannister",
  "Margaery Tyrell",
  "Theon Greyjoy",
  "Varys",
  "Bronn",
  "Shae",
  "Ygritte",
  "Joffrey Baratheon",
  "Robert Baratheon"
]

class CreateUserDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onCompleted(this.state.name)
  }

  render() {
    let templateName = names[Math.floor(Math.random()*names.length)]

    return (
      <Card style={{ maxWidth: "300px" }}>
        <CardBody>
          <CardTitle>Finish Setting up</CardTitle>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <label htmlFor="#name">Name</label>
              <FormInput id="#name" placeholder={templateName} onChange={this.handleChange} />
            </FormGroup>
            <Button type="submit">Save</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default CreateUserDetails;
