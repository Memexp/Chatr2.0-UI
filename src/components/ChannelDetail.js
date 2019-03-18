import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";

class ChannelDetail extends Component {
  state = {
    channelInfo: {}
  };
  componentDidMount() {
    if (this.props.user) {
      this.props.getChannel(this.props.match.params.channelID);
    }
  }
  componentDidUpdate(prevState) {
    if (
      prevState.match.params.channelID !== this.props.match.params.channelID &&
      this.props.user
    ) {
      this.props.getChannel(this.props.match.params.channelID);
    }
  }

  render() {
    const channel = this.props.channel;
    if (this.props.channels.length !== 0 && this.props.user) {
      let channelInfo = this.props.channels.find(channel => {
        if (channel.id === +this.props.match.params.channelID) {
          return channel;
        }
      });
      console.log(channelInfo);

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

          {this.props.user ? <h1>Hi</h1> : <div />}
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
