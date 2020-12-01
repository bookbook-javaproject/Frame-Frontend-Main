<template>
  <div class="PICommentForm-container PICommentForm-layout">
      <div class="PICommentForm-header PICommentForm-layout">
      <div  class="PICommentForm-header2">
          <img class="PICommentForm-userImage" alt="프로필 사진" :src="post_detail.writer.imageUri ? post_detail.writer.imageUri : defaultProfileImage" />
          
          <div class="PICommentForm-userInformation">
              <div class="PICommentForm-userNickName"> 
                {{post_detail.writer.nickname}}
              </div>
              <div class="PICommentForm-WroteDate"> 
                {{createdAtDate}}
              </div>
          </div>
        </div>
        <div class="PICommentForm-backMain" @click="goHome">
            메인으로
        </div>
      </div>

      <div class="PICommentForm-section PICommentForm-layout">
          <div class="PICommentForm-postContent"> 
              {{post_detail.content}}
          </div>
      </div>
      <div class="PICommentForm-article PICommentForm-layout">
          <div class="PICommentForm-emotion"> 
            <img class="empth" :src="~post_detail.hearts.indexOf(user.email) ? emotionButtonClicked :emotionButton" @click="empth"  /> 
            <div class="PICommentForm-emotionSum" > 
              {{post_detail.hearts.length}}
            </div>
          </div>
          <div class="PICommentForm-emotion"> 
            <img :src="commentButton" />
            <div class="PICommentForm-emotionSum">
              {{post_detail.comments.length  }}
            </div>
          </div>
      </div>
      <div class="PICommentForm-content PICommentForm-layout" >
        <div class="PICommentForm-commentList">
          <PICommentItem v-for="(item,index) of this.post_detail.comments" v-bind:key="index" :detail="item" />   
            
        </div>
      
      </div>
      <div class="PICommentForm-footer PICommentForm-layout">
          <img :src="post_detail.writer.imageUri ? post_detail.writer.imageUri : defaultProfileImage" class="PICommentForm-userImage" />
          <input type="text" placeholder="댓글을 입력하세요" class="PICommentForm-mainComment" v-model="comment">
          <div v-on:click="submitComment" class="PICommentForm-commentSubmit-button">입력</div>
      </div>
  </div>
</template>

<script>
import {emotionButton,emotionButtonClicked, commentButton, authArt } from '@/assets/img';
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
    }
  },
   components:{PICommentItem},
    watch: {
          async patchHeartRequest() {
              await this.GET_POST_DETAIL( {postId: this.$route.params.id});
          },
          post: {
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
     submitComment: function(){
       this.POST_COMMENT({comment:this.comment}).then(()=>{
         console.log("성공")
       }).catch(()=>{
         console.log("실패")
       })
     },
     goHome() {
       this.$router.push('/')
     },
      empth :function(){ // empth means  공감
        this.PATCH_HEART();
        
    },
   },
    computed:{
      ...mapState(['post_detail', 'user', 'patchHeartRequest']),
    createdAtDate: function(){
        const Date = this.post_detail.createdAt.split('T')
        return Date[0]
    },

    },
  created(){
    this.GET_POST_DETAIL({ postId: this.$route.params.id });
  }
  
          
      


}
</script>

<style>
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
  .PICommentForm-header img{
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
    text-decoration: underline;
    cursor: pointer;
    color: blue;
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