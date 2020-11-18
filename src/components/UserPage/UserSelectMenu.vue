<template>
    <div class="UserSelectMenu-container">
        <div class="UserSelectMenu-content" v-bind:class="{UserSelectMenuContentIsClicked : isClicked1}" v-on:click="isClickedItem(1)">
            <img :src="firstImage" >
            <div class="UserSelectMenu-content-text">{{showFollow ? '팔로잉' : '내 글'}}</div>
        </div>
        <div class="UserSelectMenu-content" v-bind:class="{UserSelectMenuContentIsClicked : isClicked2}" v-on:click="isClickedItem(2)">
            <img :src="secondImage">
            <div class="UserSelectMenu-content-text">{{showFollow ? '팔로우' : '마음에 들어요'}}</div>            
        </div>
    </div>
</template>

<script>
import {myWritingList,heart,authFollow,authFollowClicked} from '@/assets/img';
import router from '@/router';

export default {
    props:['showFollow'],
    data(){
        return{
            myWritingList,
            heart,
            authFollow,
            authFollowClicked,
            isClicked1: false,
            isClicked2: false,
            username : encodeURI(this.$route.params.username),
        }
    },
    computed:{
        
            firstImage: function(){
                 return this.showFollow ? this.authFollow :  this.myWritingList
            },
        
            secondImage: function(){
                return this.showFollow ? this.authFollow : this.heart
            }

        
    },
    watch:{
        '$route'(to){
            const link = to.fullPath;
            console.log(`to fullPath is : ${to.fullPath}`);
            console.log(link);
            console.log(`"/userpage/:username/userFollowing"`)
            if(link ==="/userpage/:username" || link==="/userpage/:username/userFollowing"){
                this.isClicked1=true;
                this.isClicked2=false;
            }
            else if(link ==="/userpage/:username/IloveItForm" || link==="/userpage/:username/userFollower"){
                this.isClicked2=true;
                this.isClicked1=false;
            }
        },
    },
    created(){
        let to = window.location.pathname;
        console.log(`to : ${to}`);
        console.log("link : " +   "/userpage/" + this.username + "/userFollowing");
        if(to === "/userpage/" + this.username)this.isClicked1=true;
        else if(to === "/userpage/" + this.username + "/userFollowing"){
            this.isClicked1=true;
            this.showFollow = true;
        }
        else if(to === "/userpage/" + this.username + "/IloveItForm")  this.isClicked2=true;
        else if(to==="/userpage/" + this.username +"/userFollower") {
            this.isClicked2=true;
            this.showFollow = true;
        }
        else {
            alert("존재하지 않는 유저 이거나 올바르지 않은 접근입니다.");
            router.push('/');
        }
    },
    methods:{
        isClickedItem(e){
            console.log(this.showFollow);
            if(e===1 && !this.isClicked1){
                this.isClicked1 = true;
                this.isClicked2 = false;
                if(this.showFollow) router.push("/userpage/" + this.username + "/userFollowing")
                else router.push("/userpage/"+ this.username)

            }else if(e===2 && !this.isClicked2){
                this.isClicked2 = true;
                this.isClicked1 = false;
                if(this.showFollow) router.push("/userpage/"+ this.username + "/userFollower")
                else router.push('/userpage/'+ this.username + '/ILoveItForm');
            }else{
                alert('현재 보시고 계신 페이지입니다.');
            }
        },
           
    }
}
</script>

<style>
.UserSelectMenu-container{
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-top: 2rem;
}

.UserSelectMenu-container .UserSelectMenu-content{
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-right: 2rem;
}
.UserSelectMenu-content img{
    margin-right: 1rem;     
}
.UserSelectMenuContentIsClicked{
    border-bottom: 1px solid #0F4C81;
    padding-bottom: 1rem;
}
</style>


