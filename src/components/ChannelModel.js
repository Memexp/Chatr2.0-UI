import React, { Component } from "react";

import AddChannelForm from "./AddChannelForm";
import Modal from "react-responsive-modal";

class ChannelModal extends Component {
  state = {
    open: false
  };

  onOpenModal = () => this.setState({ open: true });

  onCloseModal = () => this.setState({ open: false });

  render() {
    const { open } = this.state;
    return (
      <div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <AddChannelForm closeModal={this.onCloseModal} />
        </Modal>
        <input
          type="button"
          onClick={this.onOpenModal}
          value="Add New Channel!"
        />
      </div>
    );
  }
}

export default ChannelModal;
