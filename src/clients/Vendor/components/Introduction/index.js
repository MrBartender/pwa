import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card, CardBody, CardTitle } from 'shards-react'

const Introduction = ({ vendor, user }) => {
  return (
    <Row>
      <Col>
        <Card>
          <CardBody>
            <CardTitle>{vendor.name}</CardTitle>
            Welcome to the host dashboard, {user.name.split(' ')[0]}.
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default connect(
  state => ({
    vendor: state.vendor,
  }),
  null
)(Introduction)
