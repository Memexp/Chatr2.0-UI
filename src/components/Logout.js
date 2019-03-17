import * as actionCreators from "../store/actions";

import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Logout = props => {
  return (
    <li className="nav-item">
      <span className="nav-link" onClick={props.logout}>
        <FontAwesomeIcon icon={faSignOutAlt} /> Logout {props.user.username}
      </span>
    </li>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actionCreators.logout())
  };
};
const mapStateToProps = state => ({
  user: state.auth.user
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
