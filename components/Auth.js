import React, { Component } from "react";
import AuthService from "../../utils/tokenService";
import Router from "next/router";

export default function withAuth(AuthComponent) {
  const Auth = new AuthService();
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true
      };
    }

    componentDidMount() {
      if (!Auth.isLoggedIn) {
        Router.push("/");
      } else if (Auth.isLoggedIn) {
        if (Auth.isExpired) {
          Router.push("/");
        }
      }
      this.setState({ isLoading: false });
    }

    render() {
      return (
        <div>
          {this.state.isLoading ? (
            <div>LOADING....</div>
          ) : (
            <AuthComponent {...this.props} auth={Auth} />
          )}
        </div>
      );
    }
  };
}
