const writerApplyData = () => {
    return {
      auth : false,
      codeCheck : false,
      form : false
    }
} 

const state = {
  accessToken: null,
  refreshToken: null,
  isFile: true,
  file: null,
  passwordError: false,
  userError: false,
  applyError: writerApplyData(),
  highlightPost: {
    statusCode: null,
    data: [],
  },
  posts: [],
  post_detail: {
    comments: [],
    hearts: [],
    createdAt: '',
    writer: {
      email: '',
      imageUri: null,
      nickname: '',
    },
  },
  user: {},
  patchHeartRequest: null,
  notices: [],
  writer: null,
  myPosts: [],
  userPosts: [],
  sympatheticPosts: [],
  follow: null,
};

export default state;