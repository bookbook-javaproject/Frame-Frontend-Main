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
  userError : false,
  file : null,
  applyError : writerApplyData()
};

export default state;