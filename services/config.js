import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:5000/"
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
