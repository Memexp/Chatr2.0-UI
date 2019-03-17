import React, { Component } from "react";
import { connect } from "react-redux";
import ChannelCard from "./ChannelCard";
class ChannelList extends Component {
  render() {
    const { channels } = this.props;

    const channelCards = channels.map(channel => (
      <ChannelCard key={channel.name + channel.owner} channel={channel} />
    ));
    return <div className="row">{channelCards}</div>;
  }
}
const mapStateToProps = state => {
  return {
    channels: state.channels.channels
  };
};
export default connect(mapStateToProps)(ChannelList);
