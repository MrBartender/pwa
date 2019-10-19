import React, { Component } from 'react'
import { connect } from 'react-redux'
import { vendorActions } from '../../../../core/store/vendor'
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
import { createDevice } from './graphql'

class Devices extends Component {
  createDevice() {
    const { vendor, setVendor } = this.props

    API.graphql({
      query: createDevice,
      variables: {
        input: {
          status: 'INACTIVE',
          name: 'Woodhouse',
          clientId: 'WOOD',
          calibration: {
            formula: 'x+y',
          },
          deviceVendorId: vendor.id,
        },
      },
      authMode: 'OPENID_CONNECT',
    })
      .then(createResult => {
        setVendor(createResult.data.createDevice.vendor)
      })
      .catch(error => {
        console.error('Error creating device:', error)
      })
  }

  render() {
    const { vendor } = this.props

    return (
      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Devices</CardTitle>
              <ListGroup>
                {vendor.devices.items.length <= 0 ? (
                  <ListGroupItem>No Devices Found</ListGroupItem>
                ) : (
                  vendor.devices.items.map(device => {
                    return (
                      <ListGroupItem
                        onClick={() => console.log('clicked', device.name)}
                      >
                        {device.name} - {device.status}
                      </ListGroupItem>
                    )
                  })
                )}
              </ListGroup>
              <Button
                className="float-right mr-0"
                onClick={() => this.createDevice()}
              >
                Add Device &rarr;
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
    vendor: state.vendor,
  }),
  dispatch => ({
    setVendor: vendor => dispatch(vendorActions.setVendor(vendor)),
  })
)(Devices)
