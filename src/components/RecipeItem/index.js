import React, { Component } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { createOrder } from './graphql';
import { getUserByUsername } from '../App/graphql';

import {
  Badge,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  FormInput
} from 'shards-react';
import Ratings from 'react-ratings-declarative';
import './style.css';

const styles = {
  recipeImageWrapper: {
    textAlign: "center",
    marginTop: "2rem"
  },
  recipeImage: {
    width: "95%",
    height: "18rem",
    borderRadius: 20,
  },
  recipeDrink: {
    color: "white",
    fontSize: "1.75em",
    fontWeight: "500",
    marginTop: "1em",
  },
  recipeDetails: {
    color: "#A4ADCF",
  },
  recipeDetailsWrapper: {
    marginLeft: "10%",
    marginRight: "10%",
  },
  orderButton: {
    width: "90%",
    textAlign: "center",
    height: "3.75rem",
    borderRadius: 30,
    fontSize: "1rem",
    fontWeight: 400,
    marginTop: "2rem",
    marginLeft: "1rem",
    marginRight: "1rem",
    backgroundColor: "#535BFE",
  },
  price: {
    float: "right",
    fontSize: "1rem",
  },
  confirm: {
    textAlign: "center"
  },
  confirmWrapper: {
    borderRadius: 60,
  },
  confirmOrder: {
    textAlign: "center",
    backgroundColor: "#252D4A",
    color: "white"
  },
  confirmOrderText: {
    color: "white",
    fontSize: "1.5rem"
  },
  confirmOrderTextDetails: {
    color: "#A4ADCF",
  },
  confirmOrderButton: {
    width: "15rem",
    height: "3rem",
    borderRadius: 30,
    backgroundColor: "#535BFE",
  }
}

class RecipeItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      complete: false,
      pourCode: ""
    }
    this.toggle = this.toggle.bind(this)
    this.handleOrderCreation = this.handleOrderCreation.bind(this)
    this.handlePourCodeChange = this.handlePourCodeChange.bind(this)
  }

  ingredientNames(components) {
    let nameList = []
    for (let component of components) {
      nameList.push(component.ingredient.name)
    }
    return nameList.join(', ')
  }

  handleOrderCreation = async (event) => {
    event.preventDefault()

    let recipe = this.props.recipe
    const cognitoUser = await Auth.currentAuthenticatedUser()
    const userResponse = await API.graphql(graphqlOperation(getUserByUsername, { filter: { username: { eq: cognitoUser.username } } }))
    const user = userResponse.data.searchUsers.items[0]

    const orderResponse = await API.graphql(graphqlOperation(createOrder, { input: {
      price: 0,
      cost: recipe.price,
      auth_code: 0,
      status: `pending`,
      timestamps: {
        ordered: new Date().getTime()
      },
      orderConsumerId: user.id,
      orderRecipeId: recipe.id,
      orderDeviceId: "7a97d96e-1963-4dad-b4e0-aab0906e5fe3",
      orderVendorId: "ba2ca783-3e75-4125-b2b6-d0d290e35f36"
    }}))

    const orderId = orderResponse.data.createOrder.id
    const postToQueue = await fetch('https://db9cqhrxrk.execute-api.us-east-1.amazonaws.com/dev/pour', {
      method: 'POST',
      body: JSON.stringify({ 'orderID': orderId , 'pourCode': this.state.pourCode })
    })

    console.log(await postToQueue.json())
    this.toggle()
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  toggleConfirm() {
    this.setState({
      confirm: !this.state.confirm
    });
  }

  handlePourCodeChange(event) {
    this.setState({
      pourCode: event.target.value
    })
  }

  // Currently there is something blocking the modals from opening which is the sidebar because it toggles whenever anywhere in the screen is selected.
  render() {
    const { open, complete } = this.state;
    return (
      <div style={styles.wrapper}>
        <h1 className="recipeTitle">{this.props.recipe.name}</h1>
        <div style={styles.recipeImageWrapper}>
          <img style={styles.recipeImage} src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=2249&q=80" alt="Logo" />;
        </div>
        <div style={styles.recipeDetailsWrapper}>
          <p style={styles.recipeDrink}>{this.props.recipe.name}</p>
          <p style={styles.recipeDetails}>{this.props.recipe.description}</p>
          <p style={styles.recipeDetails}>{this.ingredientNames(this.props.recipe.components.items)}</p>
          <Badge theme="success" style={styles.price}>${ (this.props.recipe.price / 100).toFixed(2) }</Badge>
          <Ratings
            widgetDimensions="25px"
            widgetSpacings="4px"
          >
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings>
        </div>
        <Button style={styles.orderButton} onClick={this.toggle}>Order Drink</Button>

        <div className="resetRecipe" onClick={() => this.props.reset()}>
          <i className="fas fa-times fa-3x"></i>
        </div>
        
        <Modal open={open} toggle={this.toggle} style={styles.confirmWrapper} centered backdropClassName="modal-backdrop">
          <ModalHeader style={styles.confirmOrder}><span style={styles.confirmOrderText}>So you want a drink, eh?</span></ModalHeader>
          <ModalBody style={styles.confirmOrder}>
            <p style={styles.confirmOrderTextDetails}>Enter Mr. Bartender's pour code.</p>

            <Form onSubmit={this.handleOrderCreation}>
              <FormGroup>
                <label htmlFor="#pourCode">Pour Code</label>
                <FormInput id="#pourCode" onChange={this.handlePourCodeChange} placeholder="1234" />
              </FormGroup>

              <Button type="submit" disabled={this.state.pourCode.length !== 4} style={styles.confirmOrderButton}>Submit Order</Button>
            </Form>
          </ModalBody>
        </Modal>

        <Modal open={complete} toggle={this.toggle} style={styles.confirmWrapper}  backdropClassName="modal-backdrop">
          <ModalBody style={styles.confirmOrder}>
            <p style={styles.confirmOrderTextDetails}>This drink costed x to pour for you - this one's on us. If you like this project, consider donating to our project. Venmo Jake@jakemitchellxyz if you like our work. </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default RecipeItem;
