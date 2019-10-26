import React, { Component } from 'react'
import { connect } from 'react-redux'
import { vendorActions } from '../../../../core/store/vendor'
// import LoadingPage from '../../../../core/pages/LoadingPage'
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Button,
} from 'shards-react'

// API
import { API } from 'aws-amplify'
import { createVendor } from './graphql'

class Vendors extends Component {
  // componentDidMount() {
  //   const { host } = this.props

  //   API.graphql({
  //     query: getVendors,
  //     variables: {
  //       input: {
  //         semanticId,
  //         name,
  //         vendorOwnerId: host.user,
  //       },
  //     },
  //     authMode: 'OPENID_CONNECT',
  //   })
  //     .then(createResult => {
  //       setVendor(createResult.data.createVendor)
  //     })
  //     .catch(error => {
  //       console.error('Error creating vendor:', error)
  //     })
  // }

  createVendor(name, semanticId) {
    const { host, setVendor } = this.props

    API.graphql({
      query: createVendor,
      variables: {
        input: {
          semanticId,
          name,
          vendorOwnerId: host.user,
        },
      },
      authMode: 'OPENID_CONNECT',
    })
      .then(createResult => {
        setVendor(createResult.data.createVendor)
      })
      .catch(error => {
        console.error('Error creating vendor:', error)
      })
  }

  render() {
    const { host } = this.props

    if (!host || !Object.keys(host).length) {
      return null
    }

    return (
      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Vendors</CardTitle>
              <ListGroup>
                {host.vendorsOwned.items.length <= 0 ? (
                  <ListGroupItem>No Vendors Found</ListGroupItem>
                ) : (
                  host.vendorsOwned.items.map(vendor => {
                    return (
                      <ListGroupItem
                        onClick={() => console.log('clicked', vendor.name)}
                        key={vendor.id}
                      >
                        {vendor.name} - {vendor.semanticId}
                      </ListGroupItem>
                    )
                  })
                )}
              </ListGroup>
              <Button
                className="float-right mr-0"
                onClick={() => this.createVendor('First Vendor', 'XKCD')}
              >
                Add Vendor &rarr;
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default connect(
  state => ({
    host: state.host,
  }),
  dispatch => ({
    setVendor: vendor => dispatch(vendorActions.setVendor(vendor)),
  })
)(Vendors)
