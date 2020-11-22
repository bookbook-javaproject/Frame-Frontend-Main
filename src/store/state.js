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
  file : null,
  passwordError : false,
  userError : false,
  applyError : writerApplyData(),
  highlightPost: {
    statusCode: null,
    data: [],
  },
};

export default state;