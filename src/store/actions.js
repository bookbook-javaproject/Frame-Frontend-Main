import { login, signUp, signUpCheck, passwordReset, passwordResetAuth } from "../api/user";
import { writerApplycation, writerAuth } from "../api/application";

export default {
  LOGIN({ commit }, { email, password }) {
    return login(email, password).then((data) => {
      commit("LOGIN", data);
    });
  },
  SIGN_UP({ commit }, { email, nickname, password }) {
    return signUp(email, nickname, password).then((data) => {
      commit("SIGN_UP", data);
    });
  },
  SIGN_UP_CHECK(_, { code }) {
    return signUpCheck(code).then((res) => { console.log(res);
    }).catch(err => {
        console.log(err);
    })
  },
  PASSWORD_RESET(_, { newPassword, authCode }) {
    return passwordReset(newPassword, authCode).then((res) => { console.log(res);
    }).catch(err => {
        console.log(err);
    })
  },
  PASSWORD_RESET_AUTH(_, { email }) {
    return passwordResetAuth(email).then((res) => { console.log(res);
    }).catch(err => {
        console.log(err);
    })
  },
  WRITER_APPLYCATION(_, {link, goal}) {
    return writerApplycation(goal, link);
  },
  WRITER_AUTH(_, {email}) {
    return writerAuth(email);
  }
};