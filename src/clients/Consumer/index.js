import React, { Component } from 'react'
import Navigation from '../../components/Navigation'

// Route pages
// import Discover from '../Discover'
import CreateRecipe from '../../components/CreateRecipe'
import DataIcon from '../../media/icons/data.svg'

const routes = [
  // {
  //   name: 'Discover',
  //   path: '/',
  //   exact: true,
  //   main: Discover,
  // },
  {
    name: 'Create Recipe',
    path: '/create-recipe',
    icon: DataIcon,
    exact: false,
    main: CreateRecipe,
  },
]

class Consumer extends Component {
  render() {
    const { user } = this.props

    return <Navigation user={user} routes={routes} />
  }
}

export default Consumer
