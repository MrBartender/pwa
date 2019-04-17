import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import RecipePreviewCard from '../components/RecipePreviewCard';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import "../components/App/style.css";

const recipe = {
  name: text("Name", "Appletini"),
  price: number("Price", 499),
  components: [
    {
      ingredient: {
        name: text("Ingredient 1", "Vodka")
      }
    },
    {
      ingredient: {
        name: text("Ingredient 2", "Apple Juice")
      }
    },
    {
      ingredient: {
        name: text("Ingredient 3", "Lemon")
      }
    }
  ],
  images: {
    banner: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=2249&q=80"
  },
  averageRating: number("Rating", 4.8),
  reviewCount: number("Review Count", 458)
}

storiesOf('Recipes', module)
  .addParameters({
    backgrounds: [
      { name: 'dark', value: '#252D4A', default: true },
    ],
  })
  .addDecorator(withKnobs)
  .add('in Featured Collection', () => (
    <RecipePreviewCard recipe={recipe} />
  ));
