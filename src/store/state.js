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
  userError : null,
  file : null,
  applyError : writerApplyData()
};

export default state;