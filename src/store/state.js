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
  isFile : true,
  file : null,
  passwordError : false,
  userError : false,
  applyError : writerApplyData(),
  posts:[],
  posts_detail:[],
  user:{}
};

export default state;