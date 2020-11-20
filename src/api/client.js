import axios from "axios";

export const client = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const uploadFile = axios.create({
    baseURL : process.env.VUE_APP_FILE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});