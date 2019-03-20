import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";
import MessageT from "./MessageT";
import MessageForm from "./MessageForm";
import { Redirect } from "react-router-dom";

class ChannelDetail extends Component {
  interval = 0;

  componentDidMount() {
    if (this.props.user) {
      this.props.getChannel(this.props.match.params.channelID);
      if (this.props.channel.length !== 0) {
        this.interval = setInterval(() => {
          this.props.timeStamp(
            this.props.match.params.channelID,
            this.props.channel[this.props.channel.length - 1].timestamp
          );
        }, 4000);
      }
    }
  }

  async componentDidUpdate(prevState) {
    if (
      prevState.match.params.channelID !== this.props.match.params.channelID
    ) {
      await clearInterval(this.interval);
      await this.props.getChannel(this.props.match.params.channelID);

      if (this.props.channel.length !== 0) {
        await clearInterval(this.interval);
        this.interval = setInterval(() => {
          this.props.timeStamp(
            this.props.match.params.channelID,
            this.props.channel[this.props.channel.length - 1].timestamp
          );
        }, 4000);
      } else {
        this.interval = setInterval(
          this.props.getChannel(this.props.match.params.channelID),
          3000
        );
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let channel = this.props.channel;
    if (!this.props.user) {
      return <Redirect to="/login" />;
    }

    if (this.props.channels.length !== 0 && this.props.user) {
      let channelInfo = this.props.channels.find(channel => {
        if (channel.id === +this.props.match.params.channelID) {
          return channel;
        }
      });
      // console.log("[ChannelDetail.js] channelinfo", channelInfo);
      // console.log("[ChannelDetail.js] channel", channel);

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
      dispatch(actionCreators.fetchChannelDetail(channelID)),
    timeStamp: (channelid, channel) =>
      dispatch(actionCreators.lastTimestamp(channelid, channel))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelDetail);
