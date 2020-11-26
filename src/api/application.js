import { getClientAccessToken, uploadFile} from "./client";

export const fileUpload = (file) => {
    return uploadFile.post("/file", {file})
};

export const poembookApplycation = (link, fileId) => {
    return getClientAccessToken.post("/submission/anthology", { link, fileId })
    .then(res => console.log(res))
    .catch(err => console.log(err))
};

export const writerAuth = (email) => {
  return getClientAccessToken.post("/submission/author/auth", { email })
};

export const writerCheckCode = (code) => {
    return getClientAccessToken.get(`/submission/author/auth?code=${ code }`)
    .then(({ data })=> data);
};

export const writerApplycation = (goal, link) => {
    return getClientAccessToken.post("/submission/author", { goal, link })
    .then(({ data })=> data)
    .catch(({ data }) => data);
};