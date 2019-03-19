import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

// Components
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Welcome from "./components/Welcome";
import RegistrationForm from "./components/RegistrationForm";
import SuperSecretPage from "./components/SuperSecretPage";
import { connect } from "react-redux";
import * as actionCreators from "../src/store/actions";
import ChannelModel from "./components/ChannelModel";
import ChannelDetail from "./components/ChannelDetail";

class App extends Component {
  componentDidMount() {
    // main();
    this.props.checkForExpiredToken();
  }

  render() {
    return (
      <div className="content-wrapper">
        <NavBar history={this.props.history} />
        <Switch>
          <Route path="/welcome" component={Welcome} />
          <Route path="/(login|signup)" component={RegistrationForm} />
          <Route path="/createChannel" component={ChannelModel} />
          <PrivateRoute path="/private" component={SuperSecretPage} />
          <Route path="/channels/:channelID" component={ChannelDetail} />
          <Redirect to="/welcome" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     user: state.auth.user
//   };
// };
const mapDispatchToProps = dispatch => ({
  checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken())
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
