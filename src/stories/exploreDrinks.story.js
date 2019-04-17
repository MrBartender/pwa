import React from 'react';

import { storiesOf } from '@storybook/react';

import RecipePreviewCard from '../components/RecipePreviewCard';
import FeaturedCollection from '../components/FeaturedCollection';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

const recipe = {
  name: "Appletini",
  price: 499,
  components: [
    {
      ingredient: {
        name: "Vodka"
      }
    },
    {
      ingredient: {
        name: "Apple Juice"
      }
    },
    {
      ingredient: {
        name: "Lemon"
      }
    }
  ],
  images: {
    banner: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=2249&q=80"
  },
  averageRating: 4.8,
  reviewCount: 458
}

const user = {
  currentVendor: {
    collections: [
      {
        name: "Under $5",
        collectionSize: 13,
        drinks: [
          recipe,
          recipe
        ]
      },
      {
        name: "Best Vodka Cocktails",
        collectionSize: 29,
        drinks: [
          recipe,
          recipe
        ]
      },
      {
        name: "Rum & Sun",
        collectionSize: 43,
        drinks: [
          recipe,
          recipe
        ]
      }
    ]
  }
}

storiesOf('Recipes', module)
  .addParameters({
    backgrounds: [
      { name: 'dark', value: '#252D4A', default: true },
    ],
  })
  .add('in Featured Collection', () => (
    <RecipePreviewCard recipe={recipe} />
  ))
  .add('on Search Landing Page', () => (
    <FeaturedCollection collection={user.currentVendor.collections[0]} />
  ));
