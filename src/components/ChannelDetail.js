import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";

class ChannelDetail extends Component {
  componentDidMount() {
    this.props.getChannel(this.props.match.params.channelID);
  }

  render() {
    const channel = this.props.channel;
    return (
      <div>
        <div>
          <h3>{channel.name + " " + channel.owner}</h3>
          <img
            src={channel.image_url}
            className="img-thumbnail img-fluid"
            alt={channel.name + " " + channel.owner}
          />
        </div>

        {this.props.user ? <h1>Hi</h1> : <div />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    channel: state.channelM.channel,
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getChannel: channelID =>
      dispatch(actionCreators.fetchChannelDetail(channelID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelDetail);
