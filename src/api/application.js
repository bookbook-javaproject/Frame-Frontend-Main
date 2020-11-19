import { getClientAccessToken } from "./client";

export const writerAuth = (email) => {
  return getClientAccessToken.post("/auth", { email })
    .then(({ data }) => data)
    .catch((err) => console.log(err));
};

export const writerCheckCode = (code) => {
    return getClientAccessToken.post("/auth", { code })
    .then(({ data }) => data)
    .catch((err) => console.log(err));
};

export const writerApplycation = (link, goal) => {
    return getClientAccessToken.post("/apply", { link, goal })
      .then(({ data }) => data)
      .catch((err) => console.log(err));
};