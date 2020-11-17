import axios from "axios";
import client from "./client";

export const login = (email, password) => {
  return client.post("/user/auth", { email, password })
    .then(({ data }) => data)
    .catch((err) => console.log(err));
};

export const setAuthInHeader = (accessToken, refreshToken) => {
  axios.defaults.headers.common["Authorization"] = accessToken ? `${accessToken}` : null;
  axios.defaults.headers.common["Authorization"] = refreshToken ? `${refreshToken}` : null;
};

export const signUp = (email, nickname, password) => {
    return client.post("/user", { email, nickname, password })
    .then(({data}) => data)
    .catch((err) => console.log(err));
};

export const signUpCheck = (code) => {
    return client.get(`/user/auth?auth-code=${code}`)
    .then(({data})=> data)
    .catch((err) => console.log(err));
};