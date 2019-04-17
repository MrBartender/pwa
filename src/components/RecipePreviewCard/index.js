import React, { Component } from 'react';
import Banner from '../Banner';
import PreviewContent from '../PreviewContent';
import './style.css';

class RecipePreviewCard extends Component {
  render() {
    const recipe = this.props.recipe;

    return (
      <li className="recipePreviewCard">
        <Banner type="horizontal" image={recipe.images.banner} />
        <PreviewContent type="horizontal" recipe={recipe} />
      </li>
    );
  }
}

export default RecipePreviewCard;
