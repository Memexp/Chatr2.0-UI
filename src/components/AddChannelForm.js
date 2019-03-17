import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../store/actions";

class AddChannelForm extends Component {
  state = {
    name: "",
    owner: this.props.user,
    image_url: ""
  };

  //   componentWillUnmount() {
  //     if (this.props.errors.length) this.props.setErrors();
  //   }

  submitChannel = event => {
    event.preventDefault();
    this.props.addChannel(this.state, this.props.closeModal);
  };

  textChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div className="mt-5 p-2">
        <form onSubmit={this.submitChannel}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Name</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.textChangeHandler}
              value={this.state.name}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Image URL</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="image_url"
              onChange={this.textChangeHandler}
            />
          </div>

          <input type="submit" />
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    errors: state.errors.errors,
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addChannel: (newChannel, closeModal) =>
      dispatch(actionCreators.addChannel(newChannel, closeModal)),
    setErrors: () => dispatch(actionCreators.setErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddChannelForm);
