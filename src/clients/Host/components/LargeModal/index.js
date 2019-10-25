import React, { Component } from 'react'
import { Modal, ModalBody, ModalHeader } from 'shards-react'

class LargeModal extends Component {
  state = { open: false }

  constructor(props) {
    super(props)
    this.state = { open: props.open || false }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState(prevState => ({
      open: !prevState.open,
    }))
  }

  render() {
    const { open } = this.state

    return (
      <Modal size="lg" open={open} toggle={this.toggle}>
        <ModalHeader>Create Vendor</ModalHeader>
        <ModalBody>Hello there!</ModalBody>
      </Modal>
    )
  }
}

export default LargeModal
