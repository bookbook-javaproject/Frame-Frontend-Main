<template>
  <div class="PICommentItem-container">
      <img alt="프로필 이미지" class="PICommentItem-userImage" :src="detail.writer.imageUri ? `http://52.79.253.30:5001/file?id=${detail.writer.imageUri}` : defaultProfileImage" />

      <div class="PICommentItem-content">
          <div class="PICommentItem-userInformation">
              <div class="PICommentItem-userNickname">
                {{detail.writer.nickname}}
              </div>
              <div class="PICommentItem-userPostDate">
                {{createdAtDate}}
              </div>
              <img class="PICommentItem-Trashcomment-icon" :src="trashCommentIcon" v-if="detail.writer.email === user.email"  @click="onClickDeleteComment" />
          </div>
          <div class="PICommentItem-comment-content">
              {{detail.comment}}
          </div>
      </div>
  </div>
</template>

<script>
import {trashCommentIcon, authArt } from '@/assets/img';
import { getClientAccessToken } from '../../api/client';
import { mapActions, mapState } from 'vuex';

export default {
    props:['detail', 'index', 'postId'],
    computed:{
            createdAtDate: function(){
                const Date = this.detail.createdAt.split('T')
                return Date[0]
            },
            ...mapState(['user']),
    },
    data(){
        return{
            trashCommentIcon,
            defaultProfileImage: authArt,
        }
    },
    methods: {
        ...mapActions(['GET_POST_DETAIL']),
        onClickDeleteComment() {
            if (confirm('정말로 댓글을 삭제하시겠습니까?')) {
                console.log(this.detail)
                getClientAccessToken().delete('/post/comment', {
                    data: {
                        postId: this.postId,
                        commentIndex: this.index,
                    }
                }).then(() => {
                    this.GET_POST_DETAIL({ postId: this.postId });
                }).catch(() => {
                    alert('댓글을 삭제하는 중 오류가 발생하였습니다.')
                })
            }
        }
    },
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