import React, { Component } from 'react';
import SearchResults from '../SearchResults';
import { API, graphqlOperation } from 'aws-amplify';
import { listRecipes } from './graphql';
import RecipeItem from '../RecipeItem';

class Discover extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [],
      recipe: null
    }
    this.getRecipes()
    this.setRecipe = this.setRecipe.bind(this)
    this.resetRecipe = this.resetRecipe.bind(this)
  }

  resetRecipe() {
    this.setState({
      recipe: null
    })
  }

  setRecipe(recipe) {
    this.setState({ recipe })
  }

  getRecipes = async () => {
    const recipes = await API.graphql(graphqlOperation(listRecipes, { limit: 400 }))
    this.setState({
      recipes: recipes.data.listRecipes.items
    })
  }

  render() {
    if (this.state.recipe === null) {
      return (
        <SearchResults results={this.state.recipes} setRecipe={this.setRecipe} />
      )
    }

    return (
      <RecipeItem recipe={this.state.recipe} reset={this.resetRecipe} />
    )
  }
}

export default Discover;
