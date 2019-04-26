import React, { Component } from 'react';
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  Badge
} from 'shards-react';
import Ratings from 'react-ratings-declarative';
import './style.css';

class PreviewContent extends Component {
  ingredientNames(components) {
    let nameList = []
    for (let component of components) {
      nameList.push(component.ingredient.name)
    }
    return nameList.join(', ')
  }

  // Convert # of cents to a money format
  formatPrice(price) {
    return "$" + (price / 100.0).toFixed(2).toString()
  }

  render() {
    const recipe = this.props.recipe;
    const type = this.props.type;

    return (
      <Card className="previewContentCard">
        <CardBody className={type + "PreviewContent"}>
          <CardTitle className="recipeName">
            {recipe.name}
            <Badge theme="success" className="price">{this.formatPrice(recipe.price)}</Badge>
          </CardTitle>

          <CardSubtitle className="recipeIngredients">
            {this.ingredientNames(recipe.components.items)}
          </CardSubtitle>

          <Ratings
            rating={recipe.rating}
            widgetDimensions="25px"
            widgetSpacings="4px"
          >
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings>
        </CardBody>
      </Card>
    );
  }
}

export default PreviewContent;
