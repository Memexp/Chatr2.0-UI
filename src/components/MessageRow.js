import React, { Component } from "react";

class MessageRow extends Component {
  render() {
    const { channel } = this.props;
    return (
      // <tr>
      //   <td>{channel.username}</td>
      //   <td> {channel.message}</td>
      //   <td>{channel.timestamp}</td>
      // </tr>
      <div className=" my-3 col-5">
        <div class="card">
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>{channel.message}</p>
              <footer class="blockquote-footer">{channel.username}</footer>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageRow;
