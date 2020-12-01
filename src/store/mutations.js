import { setAuthInHeader } from "../api/user";

export const GET_HIGLIGHT_POSTS_SUCCESS = 'GET_HIGLIGHT_POSTS_SUCCESS';
export const GET_HIGLIGHT_POSTS_FAILURE = 'GET_HIGLIGHT_POSTS_FAILURE';

export default {
  LOGIN(state, data) {
    const accessToken = data.accessToken;
    const refreshToken = data.refreshToken;
    if (!accessToken) return;
    state.accesstoken = accessToken;
    state.refreshToken = refreshToken;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    setAuthInHeader(accessToken, refreshToken);
  },
  SIGN_UP(state, data) {
    state.userError = data;
  },
  FILE_UPLOAD(state, data) {
    state.file = data;
  },
  IS_FILE(state, data) {
    state.isFile = data;
  },
  CHANGE_PASSWORD(state, data) {
    state.passwordError = data;
  },
  APPLY_AUTH(state, data) {
    state.applyError.auth = data;
  },
  APPLY_CODE(state, data) {
    state.applyError.codeCheck = data;
  },
  APPLY_FORM(state, data) {
    state.applyError.form = data;
  },
  GET_HIGLIGHT_POSTS_SUCCESS(state, payload) {
    state.highlightPost = {
      status: payload.status,
      data: payload.data.posts,
    };
  },
  GET_HIGLIGHT_POSTS_FAILURE(state, payload) {
    const { status } = payload.response;
    state.highlightPost = { status };
  },
  GET_USER(state, data) {
    state.user = data;
  },
  GET_POST(state, data) {
    state.posts = data;
  },
  GET_POST_DETAIL(state, data) {
    state.post_detail = data;
  },
  PATCH_HEART(state, data) {
    state.patchHeartRequest = data;
  },
  GET_NOTICE(state, data) {
    state.notices = data;
  },
};