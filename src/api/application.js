import { getClientAccessToken } from "./client";

export const writerAuth = (email) => {
  return getClientAccessToken.post("/submission/author/auth", { email })
    .then(({ data }) => data)
    .catch((err) => console.log(err));
};
