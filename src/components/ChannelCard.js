import React, { Component } from "react";
import { Link } from "react-router-dom";

class ChannelCard extends Component {
  render() {
    const channel = this.props.channel;
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <Link to={`welcome/`} className="card">
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={channel.image_url}
              alt={channel.name}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>{channel.name}</span>
            </h5>
            <small className="card-text">Created by: {channel.owner}</small>
          </div>
        </Link>
      </div>
    );
  }
}

export default ChannelCard;
