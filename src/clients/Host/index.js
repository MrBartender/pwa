import React, { Component } from 'react'

// API
import { API } from 'aws-amplify'
import { getHost, createHost } from './graphql'

// Redux
import { connect } from 'react-redux'
import { hostActions } from '../../core/store/host'

// Components
import LoadingPage from '../../core/pages/LoadingPage'
import Vendors from './components/Vendors'
// import VendorStore from './components/VendorStore'
import Introduction from './components/Introduction'
// import Devices from './components/Devices'
import { Container } from 'shards-react'

// Styles
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'

class Host extends Component {
  componentDidMount() {
    const { host, user, setHost } = this.props

    // Retrieve host and sync with it
    if (!host || !Object.keys(host).length) {
      const userId = user.id.split(':')[1]

      // Get host associated with this user
      API.graphql({
        query: getHost,
        variables: { id: userId },
        authMode: 'OPENID_CONNECT',
      })
        .then(async getResult => {
          let host = getResult.data.getHost

          // If no host, create one
          if (!host) {
            host = (await API.graphql({
              query: createHost,
              variables: {
                input: { id: userId },
              },
              authMode: 'OPENID_CONNECT',
            })).data.createHost
          }
          console.log('host ready:', host)

          setHost(host)
        })
        .catch(error => {
          console.error('Error getting host:', error)
        })
    }
  }

  render() {
    const { host, user } = this.props

    // If no host, wait for componentDidMount to create one
    if (!host) {
      return <LoadingPage />
    }

    // If host owns no vendors, go to the vendor store to get one
    // if (!host.vendorsOwned || host.vendorsOwned.length === 0) {
    //   return <VendorStore />
    // }

    // If host has not selected a vendor, select one
    // if (!host.vendor || !Object.keys(host.vendor).length) {
    //   console.log('No vendor selected')
    //   return <LoadingPage />
    // }

    // Vendor selected, welcome to the Dashboard
    return (
      <Container className="linear-cards">
        <Introduction user={user} />
        <Vendors />
        {/* <Devices /> */}
      </Container>
    )
  }
}

export default connect(
  state => ({
    host: state.host,
  }),
  dispatch => ({
    setHost: host => dispatch(hostActions.setHost(host)),
  })
)(Host)
