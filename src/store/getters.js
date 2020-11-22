export default {
  isAuth(state) {
    return !!state.accessToken;
  },
  isSignUp(state) {
    return state.userError;
  }
};