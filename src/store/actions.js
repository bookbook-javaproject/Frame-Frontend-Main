import { login, signUp, signUpCheck, passwordReset, passwordResetAuth } from "../api/user";
import { fileUpload } from "../api/application";

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
    return signUpCheck(code).then(() => { 
    }).catch(err => {
        console.log(err);
    })
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
  }
};