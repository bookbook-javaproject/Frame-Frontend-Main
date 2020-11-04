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
};