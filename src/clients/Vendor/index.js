import React, { Component } from 'react'
import { API } from 'aws-amplify'
import { getHost, createHost } from './graphql'
import { connect } from 'react-redux'
import { vendorActions } from '../../core/store/vendor'
import VendorStore from '../../components/VendorStore'

// Styles
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'

class Vendor extends Component {
  state = { vendor: null }

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

          console.log(host.vendor)
          setVendor(host.vendor)
          this.setState({ vendor: host.vendor })
        })
        .catch(error => {
          console.error('Error getting host:', error)
        })
    } else {
      this.setState({ vendor })
    }
  }

  render() {
    const { vendor } = this.state

    // If no vendor attached to this host, go make one
    if (!vendor) {
      return <VendorStore />
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
