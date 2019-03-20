import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import squares from "../assets/js/squares";
class Welcome extends Component {
  // componentDidMount() {
  //   squares();
  // }

  // componentDidUpdate() {
  //   squares();
  // }
  render() {
    return (
      <header className="masthead d-flex">
        {/* <h1 className="mb-1">WELCOME TO CHATR</h1> */}
        {!this.props.user && (
          <div>
            <h3 className="mb-5">
              <em>You're gonna need to login to see the messages</em>
            </h3>
            <Link to="/login" className="btn btn-primary btn-lg">
              Login
            </Link>
          </div>
        )}

        <div className="overlay z-0" />
      </header>
    );
  }
}
const mapStateToPtops = state => {
  return {
    user: state.auth.user
  };
};
export default connect(mapStateToPtops)(Welcome);
