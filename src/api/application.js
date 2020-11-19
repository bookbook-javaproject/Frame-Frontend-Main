import { getClientAccessToken } from "./client";

export const writerAuth = (email) => {
  return getClientAccessToken.post("/submission/author/auth", { email })
    .then(({ data }) => data)
    .catch((err) => console.log(err));
};

export const writerCheckCode = (code) => {
    return getClientAccessToken.get(`/submission/author/auth?code=${ code }`)
    .then(({ data }) => data)
    .catch((err) => console.log(err));
};
