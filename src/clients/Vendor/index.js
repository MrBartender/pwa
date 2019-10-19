import React, { Component } from 'react'

// API
import { API } from 'aws-amplify'
import { getHost, createHost } from './graphql'

// Redux
import { connect } from 'react-redux'
import { vendorActions } from '../../core/store/vendor'

// Components
import VendorStore from '../../components/VendorStore'

// Styles
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'

class Vendor extends Component {
  componentDidMount() {
    const { vendor, user, setVendor } = this.props

    // Retrieve Vendor object inside this host and sync with it
    if (!vendor || !Object.keys(vendor).length) {
      const userId = user.id.split(':')[1]

      // Get host associated with this user
      API.graphql({
        query: getHost,
        variables: {
          user: userId,
        },
        authMode: 'OPENID_CONNECT',
      })
        .then(async getResult => {
          let host = getResult.data.getHost

          // If no host, create one
          if (!host) {
            host = await API.graphql({
              query: createHost,
              variables: {
                input: { user: userId },
              },
              authMode: 'OPENID_CONNECT',
            }).data.createHost
          }

          setVendor(host.vendor)
        })
        .catch(error => {
          console.error('Error getting host/vendor:', error)
        })
    }
  }

  render() {
    const { vendor, user, setVendor } = this.props

    // If no vendor attached to this host, go make one
    if (!vendor) {
      return (
        <VendorStore
          user={user}
          setVendor={newVendor => {
            setVendor(newVendor)
            this.setState({ vendor: newVendor })
          }}
        />
      )
    }

    // Vendor attached, welcome to the Dashboard
    return <h1>Welcome, Vendor.</h1>
  }
}

export default connect(
  state => ({
    vendor: state.vendor,
  }),
  dispatch => ({
    setVendor: vendor => dispatch(vendorActions.setVendor(vendor)),
  })
)(Vendor)
