import axios from "axios";

export const client = axios.create({
  baseURL: "http://18.217.200.165/"
});

client.interceptors.response.use(
  response => response,
  error => {
    const { response } = error;
    if (response.data.responseCode === 401) {
      return message;
    } else if (response.data.responseCode === 400) {
      // console.log(message);
      return response;
    } else {
      return response;
      // console.log(message);
    }

    return Promise.reject(error.response);
  }
);
