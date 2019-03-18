import React, { Component } from "react";

class MessageRow extends Component {
  render() {
    const { channel } = this.props;
    return (
      <tr>
        <td>{channel.username}</td>
        <td> {channel.message}</td>
        <td>{channel.timestamp}</td>
      </tr>
    );
  }
}

export default MessageRow;
