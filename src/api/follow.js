import { getClientAccessToken } from "./client";


export const getFollowNumber = (email)=>{
     return getClientAccessToken().get(`/user/relation/number?email=${email}`);
}
