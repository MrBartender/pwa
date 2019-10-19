import React, { Component } from 'react'

// API
import { API } from 'aws-amplify'
import { createVendor, updateHost } from './graphql'

// Components
import { MDBContainer, MDBCard, MDBCardBody, MDBBtn } from 'mdbreact'
import SignOut from '../../core/components/SignOut'

class VendorStore extends Component {
  async createVendor(save) {
    const { user } = this.props
    const userId = user.id.split(':')[1]

    // Get or create Vendor object
    API.graphql({
      query: createVendor,
      variables: {
        input: {
          name: 'First Vendor',
          semanticId: 'XKCD',
        },
      },
      authMode: 'OPENID_CONNECT',
    })
      .then(async createResult => {
        const newVendor = createResult.data.createVendor

        // Link new vendor to this host
        await API.graphql({
          query: updateHost,
          variables: {
            input: {
              user: userId,
              hostVendorId: newVendor.id,
            },
          },
          authMode: 'OPENID_CONNECT',
        })

        save(newVendor)
      })
      .catch(error => {
        console.error('Error creating vendor:', error)
      })
  }

  render() {
    const { setVendor } = this.props

    return (
      <MDBContainer fluid className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Become a Vendor
        </h2>

        <MDBCard pricing>
          <div className="peach-gradient white-text rounded-top">
            <h4
              className="option"
              style={{
                padding: '2.5rem',
                marginBottom: 0,
                fontWeight: 500,
              }}
            >
              Personal
            </h4>
          </div>
          <MDBCardBody className="striped orange-striped white-text card-background px-5">
            <h2 className="my-4 pb-3 h1">$899</h2>
            <ul>
              <li>
                <p>
                  <strong>1</strong> device
                </p>
              </li>
              <li>
                <p>
                  <strong>20+</strong> guests
                </p>
              </li>
              <li>
                <p>
                  <strong>50+</strong> drink recipes
                </p>
              </li>
              <li>
                <p>
                  <strong>1</strong> incredible event
                </p>
              </li>
            </ul>
            <MDBBtn
              rounded
              gradient="peach"
              className="mb-3 mt-3"
              onClick={() => this.createVendor(setVendor)}
            >
              Get Started
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <SignOut />
      </MDBContainer>
    )
  }
}

export default VendorStore
