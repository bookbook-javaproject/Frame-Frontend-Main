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
  PASSWORD_RESET(_, { newPassword, authCode }) {
    return passwordReset(newPassword, authCode)
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
  WRITER_APPLYCATION({ commit }, { link, goal }) {
    return writerApplycation(goal, link)
    .then(() => {
        commit("APPLY_FORM", true);
    })
    .catch(() => {
        commit("APPLY_FORM", false);
    })
  },
  WRITER_AUTH({ commit }, { email }) {
    return writerAuth(email)
    .then(() => {
        commit("APPLY_AUTH", true);
    })
    .catch(() => {
        commit("APPLY_AUTH", false);
    })
  },
  WRITER_CHECK_CODE({ commit }, { code }) {
    return writerCheckCode(code)
    .then(() => {
        commit("APPLY_CODE", true);
    })
    .catch(() => {
        commit("APPLY_CODE", false);
    })
  }
};