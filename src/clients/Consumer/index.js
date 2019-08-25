import React, { Component } from 'react'
import { API } from 'aws-amplify'
import { getConsumer, createConsumer } from './graphql'
import { connect } from 'react-redux'
import { consumerActions } from '../../core/store/consumer'
import { BrowserRouter } from 'react-router-dom'

// Route pages
import Navigation from '../../components/Navigation'
import CreateRecipe from '../../components/CreateRecipe'

// icons
import SocialIcon from './media/icons/social.svg'
import CollectionsIcon from './media/icons/collections.svg'
import DataIcon from './media/icons/data2.svg'
import HomeIcon from './media/icons/home.svg'

const routes = [
  {
    name: 'Social',
    path: '/social',
    exact: false,
    icon: SocialIcon,
    position: 'first',
    component: null,
  },
  {
    name: 'Collections',
    path: '/collections',
    exact: false,
    icon: CollectionsIcon,
    position: 'second',
    component: CreateRecipe,
  },
  {
    name: 'Data',
    path: '/data',
    exact: false,
    icon: DataIcon,
    position: 'third',
    component: null,
  },
  {
    name: 'Home',
    path: '/home',
    exact: false,
    icon: HomeIcon,
    position: 'last',
    component: null,
  },
]

class Consumer extends Component {
  componentDidMount() {
    const { consumer, user, setConsumer } = this.props

    // Retrieve or Create Consumer object and sync with it
    if (!consumer || !Object.keys(consumer).length) {
      const userId = user.id.split(':')[1]

      API.graphql({
        query: getConsumer,
        variables: {
          user: userId,
        },
        authMode: 'OPENID_CONNECT',
      })
        .then(getResult => {
          const consumer = getResult.data.getConsumer
          console.log(consumer)

          if (!consumer) {
            API.graphql({
              query: createConsumer,
              variables: {
                input: { user: userId },
              },
              authMode: 'OPENID_CONNECT',
            })
              .then(createResult => {
                setConsumer(createResult.data.createConsumer)
              })
              .catch(error => {
                console.error('Error creating consumer:', error)
              })
          } else {
            setConsumer(consumer)
          }
        })
        .catch(error => {
          console.error('Error getting consumer:', error)
        })
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Navigation routes={routes} />
      </BrowserRouter>
    )
  }
}

export default connect(
  state => ({
    consumer: state.consumer,
  }),
  dispatch => ({
    setConsumer: consumer => dispatch(consumerActions.setConsumer(consumer)),
  })
)(Consumer)
