import React, { Component } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { getConsumer } from './graphql'

// Route pages
// import Discover from '../Discover'
import Navigation from '../../components/Navigation'
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
  state = { consumer: null }

  componentDidMount() {
    if (!this.state.consumer) {
      API.graphql(
        graphqlOperation(getConsumer, {
          user: this.props.user.id.split(':')[1],
        })
      )
        .then(result => {
          this.setState({ consumer: result })
          console.log(result)
        })
        .catch(error => {
          console.error('Yo, broken:', error)
        })
    }
  }

  render() {
    const { user } = this.props

    return <Navigation user={user} routes={routes} />
  }
}

export default Consumer
