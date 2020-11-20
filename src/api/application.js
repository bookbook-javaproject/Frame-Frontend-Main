import { uploadFile} from "./client";

export const fileUpload = (file) => {
    return uploadFile.post("/file", {file})
    .then(({data}) => data)
};
