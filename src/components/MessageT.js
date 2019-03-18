import React, { Component } from "react";

import MessageRow from "./MessageRow";

class MessageT extends Component {
  render() {
    // let channel = this.props.channel;

    const messageRows = this.props.channel.map(channel => (
      <MessageRow key={channel.id} channel={channel} />
    ));
    return (
      <table className="mt-3 table">
        <thead>
          <tr>
            <th>Author</th>
            <th>Message</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>{messageRows}</tbody>
      </table>
    );
  }
}

export default MessageT;
