export default {
  isAuth(state) {
    return !!state.accessToken;
  },
  isApplyError(state) {
    return state.applyError;
  }
};