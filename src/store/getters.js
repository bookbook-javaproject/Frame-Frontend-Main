export default {
  isAuth(state) {
    return !!state.accessToken;
  },
  isPassword(state) {
    return state.passwordError;
  }
};