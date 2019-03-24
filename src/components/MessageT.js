import React, { Component } from "react";

import MessageRow from "./MessageRow";

class MessageT extends Component {
  render() {
    const messageRows = this.props.channel.map(channel => (
      <MessageRow key={channel.id} channel={channel} />
    ));
    return <div>{messageRows}</div>;
  }
}

export default MessageT;
