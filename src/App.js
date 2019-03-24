import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

//Scripts
import squares from "./assets/js/squares";

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
    squares();
  }

  componentDidUpdate() {
    squares();
  }

  render() {
    return (
      <div className="content-wrapper">
        <header>
          <div className="container text-center my-auto z-1">
            <div className="page-header header-filter">
              <div className="squares square1" id="square1" />
              <div className="squares square2" id="square2" />
              <div className="squares square3" id="square3" />
              <div className="squares square4" id="square4" />
              <div className="squares square5" id="square5" />
              <div className="squares square6" id="square6" />
              <div className="squares square7" id="square7" />
              <div className="container">
                <div className="content-center brand">
                  <h1 className="h1-seo">BLK•</h1>
                  <h3>WELCOME TO CHATR</h3>
                </div>
              </div>
            </div>
          </div>
        </header>
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
