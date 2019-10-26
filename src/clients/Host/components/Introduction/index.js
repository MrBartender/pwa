import React from 'react'
import { Row, Col, Card, CardBody, CardTitle } from 'shards-react'

const Introduction = ({ user }) => {
  return (
    <Row>
      <Col>
        <Card>
          <CardBody>
            <CardTitle>Host Dashboard</CardTitle>
            Welcome to the host dashboard, {user.name.split(' ')[0]}.
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default Introduction
