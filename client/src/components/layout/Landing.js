import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Particles from "react-particles-js";
import { whileStatement } from "babel-types";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing">
        <Particles height={"100vh"} width={"100vw"} params={particleOpt} />
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Social Devs</h1>
                <p className="lead">
                  {" "}
                  Create a developer profile/portfolio, share posts, and read up
                  company profiles
                </p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Define settings for particles
const particleOpt = {
  particles: {
    number: {
      value: 50
    },
    shape: {
      stroke: {
        width: 4,
        color: "white"
      }
    }
  }
};

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
