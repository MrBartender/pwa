import React, { Component } from 'react';
import RecipePreviewCard from '../RecipePreviewCard';
import './style.css';

class SearchResults extends Component {
  render() {
    const results = this.props.results

    if (results.length === 0) {
      return <h4 style={{ color: 'white' }}>No drinks available.</h4>
    }

    return (
      <ul>
        {results.map((recipe, index) => (
          <div className="recipeItem" onClick={() => this.props.setRecipe(recipe)} key={index}>
            <RecipePreviewCard recipe={recipe} />
          </div>
        ))}
      </ul>
    )
  }
}

export default SearchResults;
