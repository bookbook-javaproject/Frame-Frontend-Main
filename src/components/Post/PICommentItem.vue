<template>
  <div class="PICommentItem-container">
      <img :src="user.profileImage" class="PICommentItem-userImage"/>

      <div class="PICommentItem-content">
          <div class="PICommentItem-userInformation">
              <div class="PICommentItem-userNickname">
                {{user.nickname}}
              </div>
              <div class="PICommentItem-userPostDate">
                {{user.postDate}}
              </div>
              <img class="PICommentItem-Trashcomment-icon" :src="trashCommentIcon" />
          </div>
          <div class="PICommentItem-comment-content">
              {{user.comment}}
          </div>
      </div>
  </div>
</template>

<script>
import {trashCommentIcon} from '@/assets/img';

export default {
    props:['user'],

    data(){
        return{
            trashCommentIcon,
        }
    }

}
</script>

<style>
    /* 레이아웃 */
.PICommentItem-container{
    margin-top: 2rem;
    display:flex;
    align-items: center;
    justify-content: flex-start;
}

.PICommentItem-content{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 1rem;
}
.PICommentItem-userInformation{
    display:flex;
    justify-content: space-between;
    align-items: center;
    
}
.PICommentItem-userImage{
    width: 3rem;
    height: 3rem;
    border-radius: 100px;
}
.PICommentItem-userNickname{
    margin-right: 0.3rem;
}
.PICommentItem-userPostDate{
    font-size: 0.75rem;
    margin-right: 0.2rem;
}
.PICommentItem-Trashcomment-icon{
    cursor: pointer;
}
</style>