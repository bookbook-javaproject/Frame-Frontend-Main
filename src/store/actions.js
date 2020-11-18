import { login, signUp, signUpCheck, passwordReset, passwordResetAuth } from "../api/user";

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
};