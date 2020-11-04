import axios from "axios";

const client = axios.create({
  baseURL: "baseUrl",
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;