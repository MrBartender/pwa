import React, { Component } from 'react';
import Banner from '../Banner';
import PreviewContent from '../PreviewContent';
import './style.css';

class RecipePreviewCard extends Component {
  render() {
    const recipe = this.props.recipe;
    console.log(recipe)
    return (
      <li className="recipePreviewCard">
        <Banner type="horizontal" image="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=2249&q=80" />
        <PreviewContent type="horizontal" recipe={recipe} />
      </li>
    );
  }
}

export default RecipePreviewCard;
