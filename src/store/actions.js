import { login, signUp, signUpCheck, passwordReset, passwordResetAuth } from "../api/user";
import { writerApplycation, writerAuth, writerCheckCode, poembookApplycation, fileUpload } from "../api/application";

export default {
  LOGIN({ commit }, { email, password }) {
    return login(email, password).then((data) => {
      commit("LOGIN", data);
    });
  },
  SIGN_UP({ commit } , { email, nickname, password }) {
    return signUp(email, nickname, password).then((data) => {
      commit("SIGN_UP", data);
    });
  },
  SIGN_UP_CHECK(_ , { code }) {
    return signUpCheck(code)
  },
  PASSWORD_RESET({ commit }, { newPassword, authCode }) {
    return passwordReset(newPassword, authCode)
    .then(() => {
        commit("CHANGE_PASSWORD", true)
    })
    .catch((err) => {
        console.log(err.response.status)
        if(err.response.status == 400) commit("CHANGE_PASSWORD", "400");
        else commit("CHANGE_PASSWORD", false);
    })
  },
  PASSWORD_RESET_AUTH(_, { email }) {
    return passwordResetAuth(email)
  },
  FILE_UPLOAD({ commit }, { file }) {
    return fileUpload(file).then((data) => {
        commit("FILE_UPLOAD", data);
    })
  },
  POEMBOOK_APPLYCATION(_, { link, fileId }) {
    return poembookApplycation(link, fileId);
  },
  WRITER_APPLYCATION(_, { link, goal }) {
    return writerApplycation(goal, link);
  },
  WRITER_AUTH(_, { email }) {
    return writerAuth(email);
  },
  WRITER_CHECK_CODE(_, { code }) {
    return writerCheckCode(code);
  }
};