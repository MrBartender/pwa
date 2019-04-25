import React, { Component } from 'react';
import SearchResults from '../SearchResults';
import { API, graphqlOperation } from 'aws-amplify';
import { listRecipes } from './graphql';

class Discover extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: []
    }
    this.getRecipes()
  }

  getRecipes = async () => {
    const recipes = await API.graphql(graphqlOperation(listRecipes, { limit: 10 }))
    this.setState({
      recipes: recipes.data.listRecipes.items
    })
  }

  render() {
    return (
      <SearchResults results={this.state.recipes} />
    )
  }
}

export default Discover;
