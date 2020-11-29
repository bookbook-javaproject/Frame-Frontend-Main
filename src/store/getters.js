export default {
  isAuth(state) {
    return !!state.accessToken;
  },
  isFile(state) {
    return state.isFile;
  },
  isPassword(state) {
    return state.passwordError;
  },
  isSignUp(state) {
    return state.userError;
  },
  isApplyError(state) {
    return state.applyError;
  }
};