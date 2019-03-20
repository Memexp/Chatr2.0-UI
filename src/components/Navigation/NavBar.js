import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import SideNav from "./SideNav";
import AuthButton from "./AuthButton";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg fixed-top"
          color-on-scroll="100"
        >
          <Link className="navbar-brand" to="/welcome">
            Chatr2.0
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
            Hi
          </button>
        </nav>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <SideNav />
          <AuthButton history={this.props.history} />
        </div>
      </div>
    );
  }
}

export default NavBar;
