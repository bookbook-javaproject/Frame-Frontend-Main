<template>
  <div class="postItem-container">
    <div class="postItem-card-title">
      <img class="postItem-userImage" :src="user.userProfilePicture" >
      <div class="postItem-card-subtitle">
        <p>
            {{user.nickname}}
        </p>
        <p style="color: #555555">
            {{post.dateTime}}
        </p>
      </div>
    </div>
    <div class="postItem-card-content" v-on:click="postItemClicked">
            {{post.content}}
    </div>
    <div class="postItem-card-ev"> <!-- ev means Evaluation-->
        <div class="postItem-card-ev-items" v-on:click="empth">
            <img :src="isEmotioned ? emotionButtonClicked :emotionButton " />
            <p>
                {{post.emotionSum}}
            </p>
        </div>
        <div class="postItem-card-ev-items" >
            <img :src="commentButton" />
            <p>
                {{post.comment}}
            </p>
        </div>
    </div>
  </div>

</template>

<script>
import {commentButton,emotionButton,emotionButtonClicked} from '@/assets/img'
import router from '@/router';
export default {
    props:['post','user'],

    data:function() {
        return {
                
                commentButton,
                emotionButton,
                emotionButtonClicked,
                isEmotioned: false
            };
        },
        methods:{
            empth :function(){ // empth means  공감
                console.log("empth버튼 눌림");
                this.isEmotioned = !this.isEmotioned
            },
            postItemClicked: function(){
                router.push(`/post/${this.post.id}`);
            }
        },
        created(){
            console.log("postitem생성됨");
        }

}
</script>

<style>
    .postItem-container{
            display:flex;
            flex-direction: column;
            justify-content: space-around;
            border: 10px solid rgba(15,76,129,0.06);
            width: 55rem;
            height: 15rem;
            margin-top:2rem;
            margin-bottom: 2rem;
    }
    .postItem-card-title{
        display:flex;
        flex-direction: row;
        align-items: center;
        margin-left: 1rem;
    }
    .postItem-card-subtitle p{
        margin-left: 1rem;
        margin-top: 0.1rem;

    }
    .postItem-userImage{
        width: 3rem;
        height: 3rem;
        border-radius: 100px;
    }
    .postItem-card-content{
        width: 95%;
        margin-left: 1.75rem;

    }
    .postItem-card-ev{
        display:flex;
        flex-direction: row;
        padding-top: 1rem;
        margin-left: 1.75rem;
        border-top: 1px solid rgba(155,155,155,0.49);
        margin-right: 1.75rem;


    }
    .postItem-card-ev-items{
        display: flex;
        flex-direction: row;
        align-items: center;
        
        

    }
    .postItem-card-ev-items img{
        margin-right: 0.75rem;
        cursor: pointer;
        
    }
    .postItem-card-ev-items p{
        margin-right: 1.75rem;
    }

    
</style>    