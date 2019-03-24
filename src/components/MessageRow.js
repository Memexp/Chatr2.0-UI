import React, { Component } from "react";

class MessageRow extends Component {
  render() {
    const { channel } = this.props;
    return (
      <div className=" my-3 col-5">
        <div className="card">
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{channel.message}</p>
              <footer className="blockquote-footer">{channel.username}</footer>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageRow;
