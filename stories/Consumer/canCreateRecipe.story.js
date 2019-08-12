import React from 'react'

import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'

import CreateRecipe from '../../src/components/CreateRecipe'

storiesOf('Consumer', module).add(
  'Can Create Recipe',
  () => <CreateRecipe showApp={linkTo('Button')} />,
  {
    info: {
      text: `Consumers should be able to create a custom recipe.`,
    },
  }
)
