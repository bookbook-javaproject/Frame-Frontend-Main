<template>
  <div class="PICommentItem-container">
      <img alt="프로필 이미지" @click="goUserPage" class="PICommentItem-userImage" :src="detail.writer.imageUri ? `http://52.79.253.30:5001/file?id=${detail.writer.imageUri}` : defaultProfileImage" />

      <div class="PICommentItem-content">
          <div class="PICommentItem-userInformation">
              <div class="PICommentItem-userNickname">
                {{detail.writer.nickname}}
                <img :src="checkBadge" v-if="detail && detail.writer && detail.writer.userType === 'AUTHOR'" class="badge" @mouseover="badgeOver" @mouseleave="badgeLeave" />
                <p v-if="isHoveredBadge">이 사용자는 작가 인증을 받았습니다.</p>
              </div>
              <div class="flex">
                <div class="PICommentItem-userPostDate">
                    {{createdAtDate}}
                </div>
                <img class="PICommentItem-Trashcomment-icon" :src="trashCommentIcon" v-if="detail.writer.email === user.email"  @click="onClickDeleteComment" />
              </div>
          </div>
          <div class="PICommentItem-comment-content">
              {{detail.comment}}
          </div>
      </div>
  </div>
</template>

<script>
import {trashCommentIcon, authArt, checkBadge } from '@/assets/img';
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
            checkBadge,
            isHoveredBadge: false,
        }
    },
    methods: {
        goUserPage() {
               this.$router.push(`/userpage/${this.detail.writer.email}`)
        },
        badgeOver() {
                this.isHoveredBadge = true;
            },
            badgeLeave() {
                this.isHoveredBadge = false;
            },
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

<style lang="scss">
    /* 레이아웃 */
.PICommentItem-container{
    margin-top: 2rem;
    display:flex;
    align-items: center;
    justify-content: flex-start;
}

.PICommentItem-content{
    flex: 1;
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
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    border-radius: 100px;
}
.PICommentItem-userNickname{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-right: 0.3rem;

    > img {
        margin-left: 4px;
    }

    > p {
        width: 300px;
        position: absolute;
        right: -305px;
        top: 0;
    }
}
.PICommentItem-userPostDate{
    font-size: 0.75rem;
    margin-right: 0.2rem;
}
.PICommentItem-Trashcomment-icon{
    cursor: pointer;
}
</style>