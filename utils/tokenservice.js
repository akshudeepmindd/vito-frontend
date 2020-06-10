import jwtDecode from "jwt-decode";
import { setCookie, getCookie } from "./cookie";
import Router from "next/router";

export default class AuthService {
  static async storeToken(token, path) {
    setCookie("token", token);
    await Router.push(path);
  }
  constructor() {
    try {
      this.token = getCookie("token");
      this.isLoggedIn = getCookie("isLoggedIn");
      if (this.isLoggedIn) {
        this.decodedTOken = jwtDecode(this.token);
      }
      return this.isLoggedIn;
    } catch (e) {
      console.log(e, "error in auth");
    }
  }
  get authorizationString() {
    return `Bearer ${this.token}`;
  }
  get expiresAt() {
    return new Date(this.decodedTOken.exp * 1000);
  }

  get isExpired() {
    return new Date() > this.expiresAt;
  }
}
