import { getClientAccessToken, uploadFile} from "./client";

export const fileUpload = (file) => {
    return uploadFile.post("/file", {file})
    .then(({data}) => data)
};

export const poembookApplycation = (link, fileId) => {
    return getClientAccessToken.post("/submission/anthology", { link, fileId })
    .then(res => console.log(res))
    .catch(err => console.log(err))
};

export const writerAuth = (email) => {
  return getClientAccessToken.post("/submission/author/auth", { email })
  .then(({ data })=> data)
  .catch(({ data }) => data);
};

export const writerCheckCode = (code) => {
    return getClientAccessToken.get(`/submission/author/auth?code=${ code }`)
    .then(({ data })=> data)
    .catch(() => {
        alert("인증번호가 잘못되었습니다.");
        location.reload();
    });
};

export const writerApplycation = (goal, link) => {
    return getClientAccessToken.post("/submission/author", { goal, link })
    .then(({ data })=> data)
    .catch(({ data }) => data);
};