import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";
import MessageT from "./MessageT";
import MessageForm from "./MessageForm";
import { Redirect } from "react-router-dom";
import Loading from "../components/Loading";

class ChannelDetail extends Component {
  interval = setInterval(() => {
    this.props.getChannel(this.props.match.params.channelID);
  }, 4000);

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

  componentWillUpdate(prevState) {
    if (
      this.props.user === prevState.user ||
      prevState.match.params.channelID === this.props.match.params.channelID
    ) {
      return this.interval;
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let channel = this.props.channel;
    // redirect the non logged in users
    if (!this.props.user) {
      return <Redirect to="/login" />;
    }
    // loading page
    // if (this.props.loading) {
    //   return <Loading />;
    // } else {
    if (this.props.channels.length !== 0 && this.props.user) {
      let channelInfo = this.props.channels.find(channel => {
        if (channel.id === +this.props.match.params.channelID) {
          return channel;
        }
      });
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
// }

const mapStateToProps = state => {
  return {
    channels: state.channels.channels,
    channel: state.channelM.channel,
    user: state.auth.user
    // loading: state.channelM.loading
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
