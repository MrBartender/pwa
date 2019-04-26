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

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';

import { API, graphqlOperation } from 'aws-amplify';
import { listIngredients } from './graphql';
import { createComponent, createRecipe } from './graphql';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const SliderWithTooltip = createSliderWithTooltip(Slider);

class CreateRecipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      ingredients: [],
      selected: [],
      total: 0.0,
      price: 0
    }
    this.loadIngredients()
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this)
    this.handleRatioChange = this.handleRatioChange.bind(this)
    this.handlePriceChange = this.handlePriceChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handlePriceChange(event) {
    this.setState({
      price: Math.floor(event.target.value)
    })
  }

  handleIngredientsChange(selected) {
    this.setState({ selected })
  }

  handleRatioChange(value, index) {
    this.setState(prevState => {
      let total = 0.0
      const ingredients = prevState.ingredients.map((item, j) => {
        if (j === index) {
          item.ratio = Number((value / 100.0).toFixed(2))
        }
        total += item.ratio
        return item
      });

      return {
        ingredients,
        total
      };
    });
  }

  _createComponents = async (recipeId) => {
    for (let ingredient of this.state.ingredients) {
      if (ingredient.ratio > 0) {
        // upload the component and save the id?
        let componentId = await API.graphql(graphqlOperation(createComponent, { input: {
          ratio: ingredient.ratio,
          componentIngredientId: ingredient.id,
          recipeComponentsId: recipeId
        }}))
        console.log(componentId)
      }
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    console.log(this.state)

    const createRecipeBase = await API.graphql(graphqlOperation(createRecipe, { input: {
      name: this.state.name,
      price: this.state.price
    }}))
    const recipeId = createRecipeBase.data.createRecipe.id
    const components = await this._createComponents(recipeId)
    console.log(components)
  }

  loadIngredients = async () => {
    const response = await API.graphql(graphqlOperation(listIngredients, {}))
    const ingredients = response.data.listIngredients.items
    
    this.setState({
      ingredients: ingredients.map((ingredient) => {
        ingredient['value'] = ingredient.id
        ingredient['label'] = ingredient.name
        ingredient['ratio'] = 0.0
        return ingredient
      })
    })
  }

  render() {
    return (
      <Card style={{ maxWidth: "900px" }}>
        <CardBody>
          <CardTitle>Create New Drink</CardTitle>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <label htmlFor="#name">Name</label>
              <FormInput id="#name" onChange={this.handleNameChange} placeholder="Pink Polar Bear" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="#price">Price</label>
              <FormInput id="#price" type="number" onChange={this.handlePriceChange} placeholder="Cost in cents (433 = $4.33)" />
            </FormGroup>
            <FormGroup>
              <DualListBox
                  options={this.state.ingredients}
                  selected={this.state.selected}
                  onChange={this.handleIngredientsChange}
              />
            </FormGroup>
            <FormGroup>
              { this.state.selected.map((ingredient, index) => {
                let i = 0
                const ing = this.state.ingredients.filter((element, index2) => {
                  if (element.value === ingredient) {
                    i = index2
                    return true
                  }
                  return false
                })[0]

                return (
                  <div style={{ marginBottom: "15px" }} key={index}>
                    <SliderWithTooltip 
                      min={0}
                      max={100}
                      defaultValue={Math.floor(100 / this.state.selected.length.toFixed(1))}
                      tipFormatter={value => `${value}%`}
                      onAfterChange={value => this.handleRatioChange(value, i)}
                    />
                    <p>{ing.label}</p>
                  </div>
                )
              })}
            </FormGroup>
            <p>Total: {this.state.total}</p>
            <Button disabled={this.state.total!==1.0 || this.state.name === ""} type="submit">Save</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default CreateRecipe;
