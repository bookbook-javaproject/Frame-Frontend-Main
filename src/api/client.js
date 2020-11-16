import axios from "axios";

export const client = axios.create({
  baseURL: "baseUrl",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getClientAccessToken = axios.create({
    baseURL: "baseUrl",
    headers: {
        Authorization : localStorage.getItem('accessToken'),
    },
  });
