import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import * as actionCreators from "../store/actions";

class MessageForm extends Component {
  state = {
    message: ""
  };

  onTextChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = event => {
    event.preventDefault();
    this.props.postMessage(this.state, this.props.channelID);
  };

  render() {
    return (
      <div className="mt-5 p-2">
        <form onSubmit={this.onSubmit}>
          <div className="input-group mb-3">
            <div className="input-group-prepend" />
            <div className="col">
              <label>Message</label>
              <input
                type="text"
                className="form-control"
                name="message"
                onChange={this.onTextChange}
              />
            </div>
          </div>
        </form>
      </div>
    );
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
    postMessage: (message, channelID) =>
      dispatch(actionCreators.postMessage(message, channelID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm);
