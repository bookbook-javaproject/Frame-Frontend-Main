export default {
  isAuth(state) {
    return !!state.accessToken;
  },
  isFile(state) {
    return state.isFile;
  }
};