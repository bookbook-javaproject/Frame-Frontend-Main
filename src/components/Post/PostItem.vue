<template>
  <div class="postItem-container" v-on:click="setLocalUser">
    <div class="postItem-card-title">
      <img class="postItem-userImage" v-on:click="userImageClicked" alt="아직 구현 안됨" >
      <div class="postItem-card-subtitle">
        <p>
            {{post.writer}}
        </p>
        <p style="color: #555555">
            {{createdAtDate}}
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
                {{post.hearts}}
            </p>
        </div>
        <div class="postItem-card-ev-items" >
            <img :src="commentButton" />
            <p>
                {{post.comments}}
            </p>
        </div>
    </div>
  </div>

</template>

<script>
import {commentButton,emotionButton,emotionButtonClicked} from '@/assets/img'
import router from '@/router';
import {mapActions} from 'vuex';
export default {
    props:['post'],


    data:function() {
        return {
                
                commentButton,
                emotionButton,
                emotionButtonClicked,
                isEmotioned: false,
            };
        },
        methods:{
            ...mapActions([
                'PATCH_HEART'
            ]),
            setLocalUser: function(){
                localStorage.setItem('postId',this.post.postId);
                console.log("로컬스토리지 셋 됨");
            },
            empth :function(){ // empth means  공감
                this.isEmotioned = !this.isEmotioned;
                this.PATCH_HEART();
                
            },
            postItemClicked: function(){
                router.push(`/post/${localStorage.getItem('postId')}`);
            },
            userImageClicked: function(){
                 router.push(`/userpage/${this.post.writerEmail}`)
            }
        },
        computed:{
            createdAtDate: function(){
                const Date = this.post.createdAt.split('T')
                return Date[0]
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




