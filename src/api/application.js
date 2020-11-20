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
