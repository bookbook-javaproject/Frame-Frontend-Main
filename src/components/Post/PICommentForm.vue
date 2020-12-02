<template>
  <div class="PICommentForm-container PICommentForm-layout">
      <div class="PICommentForm-header PICommentForm-layout">
      <div  class="PICommentForm-header2">
          <img class="PICommentForm-userImage" alt="프로필 사진" :src="post_detail ? post_detail.writer.imageUri ? `http://52.79.253.30:5001/file?id=${post_detail.writer.imageUri}` : defaultProfileImage : defaultProfileImage" @click="goUserPage" />
          
          <div class="PICommentForm-userInformation">
              <div class="PICommentForm-userNickName"> 
                {{ post_detail ? post_detail.writer.nickname : '...'}}
                <img :src="checkBadge" v-if="post_detail && post_detail.writer && post_detail.writer.userType === 'AUTHOR'" class="badge" @mouseover="badgeOver" @mouseleave="badgeLeave" />
                <p v-if="isHoveredBadge">이 사용자는 작가 인증을 받았습니다.</p>
              </div>
              <div class="PICommentForm-WroteDate"> 
                {{createdAtDate}}
              </div>
          </div>
        </div>
        <div class="PICommentForm-backMain" @click="goHome">
          <img :src="arrowHome" />
            메인으로
        </div>
      </div>

      <div class="PICommentForm-section PICommentForm-layout">
          <div class="PICommentForm-postContent"> 
              {{ post_detail ?  post_detail.content : '...'}}
          </div>
      </div>
      <div class="PICommentForm-article PICommentForm-layout">
          <div class="PICommentForm-emotion"> 
            <img class="empth" :src="post_detail && ~post_detail.hearts.indexOf(user.email) ? emotionButtonClicked :emotionButton" @click="empth"  /> 
            <div class="PICommentForm-emotionSum" > 
              {{post_detail ? post_detail.hearts.length : 0}}
            </div>
          </div>
          <div class="PICommentForm-emotion"> 
            <img :src="commentButton" />
            <div class="PICommentForm-emotionSum">
              {{post_detail ? post_detail.comments.length : 0 }}
            </div>
          </div>
      </div>
      <div class="PICommentForm-content PICommentForm-layout" >
        <div class="PICommentForm-commentList">
          <PICommentItem v-for="(item,index) of post_detail && post_detail.comments" v-bind:key="index" :detail="item" :index="index" :postId="post_detail ? post_detail.postId : 0" />   
            
        </div>
      
      </div>
      <div class="PICommentForm-footer PICommentForm-layout">
          <img :src="user ? user.imageUri ? `http://52.79.253.30:5001/file?id=${user.imageUri}` : defaultProfileImage : defaultProfileImage" class="PICommentForm-userImage" />
          <input type="text" placeholder="댓글을 입력하세요" class="PICommentForm-mainComment" v-model="comment">
          <div v-on:click="submitComment" class="PICommentForm-commentSubmit-button">입력</div>
      </div>
  </div>
</template>

<script>
import {emotionButton,emotionButtonClicked, commentButton, authArt, arrowHome, checkBadge } from '@/assets/img';
import PICommentItem from './PICommentItem.vue';
import {mapActions, mapState} from 'vuex';
export default {
  data(){
    return{
      emotionButton,
      emotionButtonClicked,
      commentButton,
      comment:'',
      items:null,
      defaultProfileImage: authArt,
      arrowHome,
      isHoveredBadge: false,
      checkBadge
    }
  },
   components:{PICommentItem},
    watch: {
          async patchHeartRequest() {
              await this.GET_POST_DETAIL( {postId: this.$route.params.id});
          },
          post_detail: {
              deep: true,
              handler(data) {
                  if (data) {
                      this.$store.commit('PATCH_HEART', false);
                  }
              }
          }
      },
   methods:{
     ...mapActions([
       'POST_COMMENT',
       'PATCH_HEART',
       'GET_POST_DETAIL'
     ]),
     goUserPage() {
       if (this.post_detail) {
         this.$router.push(`/userpage/${this.post_detail.writer.email}`);
       }
     },
     badgeOver() {
                this.isHoveredBadge = true;
            },
            badgeLeave() {
                this.isHoveredBadge = false;
            },
    submitComment(){
       if (this.post_detail) {
         this.POST_COMMENT({comment:this.comment, postId: this.post_detail.postId}).then(()=>{
           this.GET_POST_DETAIL({ postId: this.$route.params.id });
           this.comment = '';
         }).catch(()=>{
           alert('댓글 작성에 실패하였습니다.')
         })
       }
     },
     goHome() {
       this.$router.push('/')
     },
      empth :function(){ // empth means  공감
        this.PATCH_HEART(this.post_detail.postId);
        
    },
   },
    computed:{
      ...mapState(['post_detail', 'user', 'patchHeartRequest']),
    createdAtDate: function(){
       if (this.post_detail) {
         const Date = this.post_detail.createdAt.split('T')
        return Date[0]
       }
       return new Date();
    },

    },
  created(){
    this.GET_POST_DETAIL({ postId: this.$route.params.id });
  }
  
          
      


}
</script>

<style lang='scss'>
.PICommentForm-userNickName {
  display: flex;

  > img {
    margin: 0 4px;
  }
}
 .PICommentForm-layout{
    margin-top: 1.5rem
  }
  .PICommentForm-container{
    display:flex;
    flex-direction: column;
    width: 60%;
    border: 1rem solid rgba(15,76,129,0.06);
    padding: 0rem 1rem 1rem 1rem;
  }
  .PICommentForm-userInformation{
    display:flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .PICommentForm-commentList{
    display:flex;
    flex-direction: column;
    justify-content: space-around;

  }
  .PICommentForm-header > div > img{
    width: 3rem;
    height: 3rem;
    border-radius: 100px;
  }
  .PICommentForm-footer img{
    width: 3rem;
    height: 3rem;
    border-radius: 100px;
  }
  .PICommentForm-footer input[type="text"]{
    outline: none;
    border:none;
    width: 85%;
  }
  .PICommentForm-userImage {
    margin-right: 1rem;
    cursor: pointer;
  }
  .PICommentForm-header{
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .PICommentForm-header2{
    display:flex;
    align-items:center;
    justify-content: space-between;
  }
  .PICommentForm-article{
    display:flex;
    align-items: center;
    width: 100%;
    padding-top:2rem;
    margin-top: 2rem;
    border-top: 1px solid rgba(155,155,155,0.49);
  }
  .PICommentForm-backMain {
    cursor: pointer;
    color: #86A4BF;
    > img {
      width: 16px;
      height: 16px;
      object-fit: contain;
    }
  }
  .PICommentForm-article .PICommentForm-emotion{
    display:flex;
    align-items: center;
    width: 10%;
 
  }
  .PICommentForm-article  .PICommentForm-emotionSum{
    margin-left: 0.5rem;
  }
  .PICommentForm-footer .PICommentForm-commentForm{
    display:flex;
    align-items: center;
    justify-content: space-between;
  }
  .PICommentForm-footer{
    display:flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid rgba(155,155,155,0.49);
    padding-top:2rem;
  }
  .PICommentForm-commentSubmit-button{
    width: 50px;
    text-align: center;
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
    background-color:#0F4C81;
    color: white;
    border-radius: 100px;
    cursor: pointer;
  }
  .empth {
    cursor: pointer;
  }

</style>