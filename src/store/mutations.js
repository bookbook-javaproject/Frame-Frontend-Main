import { setAuthInHeader } from "../api/user";

export default {
  LOGIN(state, data) {
    const accessToken = data.accessToken;
    const refreshToken = data.refreshToken;
    if (!accessToken) return;
    state.accesstoken = accessToken;
    state.refreshToken = refreshToken;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    setAuthInHeader(accessToken, refreshToken);
  },
  SIGN_UP(state, data) {
    state.userError = data;
  },
  FILE_UPLOAD(state, data) {
    state.file = data;
  },
  APPLY_AUTH(state, data) {
    state.applyError.auth = data;
  },
  APPLY_CODE(state, data) {
    state.applyError.codeCheck = data;
  },
  APPLY_FORM(state, data) {
    state.applyError.form = data;
  }
};