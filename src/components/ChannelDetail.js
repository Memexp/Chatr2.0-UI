import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";
import MessageT from "./MessageT";
import MessageForm from "./MessageForm";

class ChannelDetail extends Component {
  state = { seconds: 0 };

  componentDidMount() {
    if (this.props.user) {
      this.props.getChannel(this.props.match.params.channelID);
    }
  }

  componentDidUpdate(prevState) {
    if (
      this.props.user !== prevState.user ||
      prevState.match.params.channelID !== this.props.match.params.channelID
    ) {
      this.props.getChannel(this.props.match.params.channelID);
    }
  }

  render() {
    let channel = this.props.channel;

    if (this.props.channels.length !== 0 && this.props.user) {
      let channelInfo = this.props.channels.find(channel => {
        if (channel.id === +this.props.match.params.channelID) {
          return channel;
        }
      });
      console.log("[ChannelDetail.js] channelinfo", channelInfo);
      console.log("[ChannelDetail.js] channel", channel);

      return (
        <div>
          <div>
            <h3>{channelInfo.name}</h3>
            <img
              src={channelInfo.image_url}
              className="img-thumbnail img-fluid"
              alt={channelInfo.name}
            />
          </div>
          <h5>{channel && <MessageT channel={this.props.channel} />}</h5>
          {this.props.user ? (
            <MessageForm channelID={this.props.match.params.channelID} />
          ) : (
            <div />
          )}
        </div>
      );
    } else {
      return <h1> loading</h1>;
    }
  }
}

const mapStateToProps = state => {
  return {
    channels: state.channels.channels,
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
