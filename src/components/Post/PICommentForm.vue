<template>
  <div class="PICommentForm-container PICommentForm-layout">
      <div class="PICommentForm-header PICommentForm-layout">
      <div  class="PICommentForm-header2">
          <img class="PICommentForm-userImage" :src="userImage" />
          <div class="PICommentForm-userInformation">
              <div class="PICommentForm-userNickName"> 
                벨근
              </div>
              <div class="PICommentForm-WroteDate"> 
                2020-10-28
              </div>
          </div>
        </div>
        <div class="PICommentForm-backMain">
            메인으로
        </div>
      </div>

      <div class="PICommentForm-section PICommentForm-layout">
          <div class="PICommentForm-postContent"> 
            오늘부터 넌 내 꿈만 꿔
            LALALALILALA
            LALALALILALA
            주문을 외울 테니
            Oh 넌 내 꿈만 꿔
            LALALALILALA
            LALALALILALA
            asdlfasdfkjasd
            flasdkjf
            asdjkfjasdkfjljasdkfhjas
            d';fkjja
            sd'fkjjasd
            kfjsdafk;asdjkfjasdkfjljasdkfhjasa'sdfl
            asd'fj
            asd'kfjkjasdkfjs
          </div>
      </div>
      <div class="PICommentForm-article PICommentForm-layout">
          <div class="PICommentForm-emotion"> 
            <img :src="emotionButton" />
            <div class="PICommentForm-emotionSum"> 
              15
            </div>
          </div>
          <div class="PICommentForm-emotion"> 
            <img :src="commentButton" />
            <div class="PICommentForm-emotionSum">
              10  
            </div>
          </div>
      </div>
      <div class="PICommentForm-content PICommentForm-layout" >
        <div class="PICommentForm-commentList">
            <PICommentItem v-for="(item,index) of items" v-bind:key="index" :user="item.user" /> 
            
        </div>
      
      </div>
      <div class="PICommentForm-footer PICommentForm-layout">
          <img  :src="userImage" class="PICommentForm-userImage" />
          <input type="text" placeholder="댓글을 입력하세요" class="PICommentForm-mainComment">
          <div class="PICommentForm-commentSubmit-button">입력</div>
      </div>
  </div>
</template>

<script>
import {emotionButton,emotionButtonClicked, commentButton} from '@/assets/img';
import PICommentItem from './PICommentItem.vue';
import axios from 'axios';
export default {
  data(){
    return{
      userImage: 'https://images8.alphacoders.com/958/958091.jpg',
      emotionButton,
      emotionButtonClicked,
      commentButton,
      items:null
    }
  },
   components:{PICommentItem},
  async created(){
    const data = await axios.get('https://raw.githubusercontent.com/zofqofhtltm8015/fs/master/fakeComment.json');
    this.items = data.data;
    console.log(this.items);
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

</style>