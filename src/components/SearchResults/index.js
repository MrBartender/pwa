import React, { Component } from 'react';
import RecipePreviewCard from '../RecipePreviewCard';

class SearchResults extends Component {
  render() {
    const results = this.props.results

    if (results.length === 0) {
      return <h4 style={{ color: 'white' }}>No drinks available.</h4>
    }

    return (
      <ul>
        {results.map((recipe, index) => (
          <RecipePreviewCard recipe={recipe} key={index} />
        ))}
      </ul>
    )
  }
}

export default SearchResults;
