import React, { Component } from 'react';
import Banner from '../Banner';
import PreviewContent from '../PreviewContent';
import './style.css';

const images = [
  "https://images.unsplash.com/photo-1527761939622-9119094630cf?auto=format&fit=crop&w=934&q=80",
  "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=2249&q=80",
  "https://images.unsplash.com/photo-1512103865222-dcf9531c9961?auto=format&fit=crop&w=934&q=80",
  "https://images.unsplash.com/photo-1486947799489-3fabdd7d32a6?auto=format&fit=crop&w=1275&q=80",
  "https://images.unsplash.com/photo-1468465236047-6aac20937e92?auto=format&fit=crop&w=931&q=80",
  "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=934&q=80",
  "https://images.unsplash.com/photo-1438522014717-d7ce32b9bab9?auto=format&fit=crop&w=1949&q=80",
  "https://images.unsplash.com/photo-1541288892379-c987c60cd049?auto=format&fit=crop&w=934&q=80",
  "https://images.unsplash.com/photo-1523371054106-bbf80586c38c?auto=format&fit=crop&w=934&q=80",
  "https://images.unsplash.com/photo-1536510706413-09e79952656d?auto=format&fit=crop&w=934&q=80",
  "https://images.unsplash.com/photo-1545840773-548aee9b448a?auto=format&fit=crop&w=934&q=80",
  "https://images.unsplash.com/photo-1550583429-ef06ff4d5a10?auto=format&fit=crop&w=934&q=80",
  "https://images.unsplash.com/photo-1530523836022-dca9976dee6d?auto=format&fit=crop&w=932&q=80",
  "https://images.unsplash.com/photo-1548148210-bdd9aa423ff4?auto=format&fit=crop&w=934&q=80",
  "https://images.unsplash.com/photo-1552642697-08964e95914c?auto=format&fit=crop&w=1234&q=80",
  "https://images.unsplash.com/photo-1524439786248-e168955562d7?auto=format&fit=crop&w=1955&q=80",
  "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=934&q=80"
]

class RecipePreviewCard extends Component {
  render() {
    const recipe = this.props.recipe;
    let image = images[Math.floor(Math.random()*images.length)]
    
    return (
      <li className="recipePreviewCard">
        <Banner type="horizontal" image={image} />
        <PreviewContent type="horizontal" recipe={recipe} />
      </li>
    );
  }
}

export default RecipePreviewCard;
