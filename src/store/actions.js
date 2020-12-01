import { login, signUp, signUpCheck, passwordReset, passwordResetAuth,getUser,getMypost,putUser } from "../api/user";
import { writerApplycation, writerAuth, writerCheckCode, poembookApplycation, fileUpload } from "../api/application";
import {getPost,patchHeart,getPostDetail,postComment,postCraetePost,getNotcie,getSearchPost,postReport} from '../api/post';

import { getHighlightPosts } from '../api/highlight';
import { GET_HIGLIGHT_POSTS_SUCCESS, GET_HIGLIGHT_POSTS_FAILURE } from './mutations';
import {getFollowNumber} from '../api/follow';
import router from "../router";
import { getClientAccessToken } from '../api/client';

export const GET_HIGLIGHT_POSTS = 'GET_HIGLIGHT_POSTS';

export default {
  LOGIN({ commit }, { email, password }) {
    return login(email, password).then((data) => {
      commit('LOGIN', data);
    });
  },
  SIGN_UP({ commit }, { email, nickname, password }) {
    return signUp(email, nickname, password).then((data) => {
      commit('SIGN_UP', data);
    });
  },
  SIGN_UP_CHECK({ commit }, { code }) {
    return signUpCheck(code)
      .then(() => commit('SIGN_UP', true))
      .catch((error) => {
        if (error.response.status == 409) commit('SIGN_UP', '409');
        else if (error.response.status == 404) commit('SIGN_UP', '404');
        else commit('SIGN_UP', false);
      });
  },
  PASSWORD_RESET({ commit }, { newPassword, authCode }) {
    return passwordReset(newPassword, authCode)
      .then(() => {
        commit('CHANGE_PASSWORD', true);
      })
      .catch((err) => {
        console.log(err.response.status);
        if (err.response.status == 400) commit('CHANGE_PASSWORD', '400');
        else commit('CHANGE_PASSWORD', false);
      });
  },
  PASSWORD_RESET_AUTH(_, { email }) {
    return passwordResetAuth(email);
  },
  FILE_UPLOAD({ commit }, { file }) {
    return fileUpload(file)
      .then((data) => {
        commit('FILE_UPLOAD', data);
      })
      .catch(() => {
        commit('IS_FILE', false);
      });
  },
  POEMBOOK_APPLYCATION(_, { link, fileId }) {
    return poembookApplycation(link, fileId);
  },
  WRITER_APPLYCATION({ commit }, { link, goal }) {
    return writerApplycation(goal, link)
      .then(() => {
        commit('APPLY_FORM', true);
      })
      .catch(() => {
        commit('APPLY_FORM', false);
      });
  },
  WRITER_AUTH({ commit }, { email }) {
    return writerAuth(email)
      .then(() => {
        commit('APPLY_AUTH', true);
      })
      .catch(() => {
        commit('APPLY_AUTH', false);
      });
  },
  WRITER_CHECK_CODE({ commit }, { code }) {
    return writerCheckCode(code)
      .then(() => {
        commit('APPLY_CODE', true);
      })
      .catch(() => {
        commit('APPLY_CODE', false);
      });
  },
  [GET_HIGLIGHT_POSTS]({ commit }) {
    getHighlightPosts()
      .then((res) => {
        commit(GET_HIGLIGHT_POSTS_SUCCESS, res);
      })
      .catch((err) => {
        commit(GET_HIGLIGHT_POSTS_FAILURE, err);
      });
  },
  GET_USER({ commit }) {
    return getUser()
      .then((res) => {
        commit('GET_USER', res.data);
      })
      .catch(() => {
        console.log('It works on my machine');
      });
  },
  GET_POST({ commit }) {
    return getPost()
      .then(({ data }) => {
        commit('GET_POST', data.posts);
      })
      .catch(() => {
        commit('GET_POST', false);
      });
  },
  PATCH_HEART({ commit }, postId) {
    return patchHeart(postId)
      .then(() => {
        commit('PATCH_HEART', true);
      })
      .catch(() => {
        commit('PATCH_HEART', false);
      });
  },
  GET_POST_DETAIL({ commit }, { postId }) {
    return getPostDetail(postId)
      .then(({ data }) => {
        console.log(data);
        commit('GET_POST_DETAIL', data);
      })
      .catch((err) => {
        console.log(err);
        commit('GET_POST_DETAIL', false);
      });
  },
  POST_COMMENT(_, { comment, postId }) {
    return postComment(comment, postId)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  POST_CREATE_POST(_, { accessType, contentType, content }) {
    return postCraetePost(contentType, accessType, content);
  },
  GET_MYPOST({ commit }, { accessType }) {
    return getMypost(accessType)
      .then(({ data: { posts } }) => {
        commit('GET_MYPOST', posts);
      })
      .catch(() => {
        commit('GET_MYPOST', false);
      });
  },
  GET_FOLLOW_NUMBER(_, { email }) {
    return getFollowNumber(email);
  },
  PUT_USER(_, { description, nickname, favoriteType, imageUri }) {
    return putUser(description, nickname, favoriteType, imageUri)
      .then(() => {
        router.push('/');
      })
      .catch((res) => {
        console.log(res);
        alert('프로필 수정 실패');
      });
  },
  GET_NOTICE({ commit }) {
    return getNotcie()
      .then(({ data }) => {
        commit('GET_NOTICE', data.notices);
      })
      .catch(() => {
        commit('GET_NOTICE', false);
      });
  },
  GET_SEARCH_POST({ commit }, { q }) {
    return getSearchPost(q)
      .then(({ data: { posts } }) => {
        commit('GET_POST', posts);
      })
      .catch(() => {
        commit('GET_POST', false);
      });
  },
  POST_REPORT(_, { content, postId }) {
    return postReport(content, postId);
  },
  GET_WRITER({ commit }, email) {
    getClientAccessToken()
      .get(`/user?email=${email}`)
      .then(({ data }) => {
        commit('GET_WRITER', data);
      })
      .catch(() => {
        commit('GET_WRITER', false);
      });
  },
  FOLLOW_USER(_, email) {
    return getClientAccessToken().put('/user/relation', {
      email,
    });
  },
  GET_USER_POSTS({ commit }, email) {
    getClientAccessToken().get(`/post/user?email=${email}`).then(({ data: { posts } }) => {
      commit('GET_USER_POSTS', posts);
    }).catch(() => {
      commit('GET_USER_POSTS', false);
    })
  },
  GET_SYMPATHETIC({ commit }) {
    getClientAccessToken()
      .get('/post/my/sympathetic')
      .then(({ data: { posts } }) => {
        commit('GET_SYMPATHETIC', posts);
      })
      .catch(() => {
        alert('공감한 게시글 불러오기에 실패하였습니다.');
        commit('GET_SYMPATHETIC', false)
      });
  }
};