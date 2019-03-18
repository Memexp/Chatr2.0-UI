import React, { Component } from "react";

import AddChannelForm from "./AddChannelForm";
import Modal from "react-responsive-modal";

class ChannelModal extends Component {
  state = {
    open: false
  };

  onOpenModal = () => this.setState({ open: true });

  onCloseModal = () => this.setState({ open: false });

  componentDidMount() {
    this.onOpenModal();
  }
  render() {
    const { open } = this.state;
    return (
      <div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <AddChannelForm closeModal={this.onCloseModal} />
        </Modal>
      </div>
    );
  }
}

export default ChannelModal;
