import React, { Component } from 'react';
import RecipePreviewCard from '../RecipePreviewCard';
import './style.css';

class FeaturedCollection extends Component {
  render() {
    const collection = this.props.collection;
    const collectionPreview = collection.drinks.map((recipe, index) => (
      <RecipePreviewCard recipe={recipe} key={index} />
    ))

    return (
      <div className="featuredCollection">
        <h2>{ collection.name }</h2>
        <ul>{ collectionPreview }</ul>
      </div>
    );
  }
}

export default FeaturedCollection;
