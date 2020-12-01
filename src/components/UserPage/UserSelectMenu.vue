<template>
    <div class="UserSelectMenu-container">
        <div class="UserSelectMenu-content" v-bind:class="{UserSelectMenuContentIsClicked : isClicked1}" v-on:click="isClickedItem(1)">
            <img :src="firstImage" >
            <div class="UserSelectMenu-content-text">{{showFollow ? '팔로잉' : this.$route.params.username === user.email ? '내 글' : '쓴 글'}}</div>
        </div>
        <div class="UserSelectMenu-content" v-bind:class="{UserSelectMenuContentIsClicked : isClicked2}" v-on:click="isClickedItem(2)">
            <img :src="secondImage" v-if="user.email === this.$route.params.username || showFollow">
            <div class="UserSelectMenu-content-text">{{showFollow ? '팔로워' : user.email === this.$route.params.username ? '마음에 들어요' : ''}}</div>            
        </div>
    </div>
</template>

<script>
import {myWritingList,heart,authFollow,authFollowClicked} from '@/assets/img';
import router from '@/router';
import { mapActions, mapState } from 'vuex';

export default {
    props:['showFollow', 'setShowFollow'],
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
        ...mapState(['user']),
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
            if(link === "/userpage/" + this.$route.params.username) {
                this.isClicked1=true;
                this.isClicked2=false;
                this.setShowFollow(false)
            }
            else if(link === "/userpage/" + this.$route.params.username + "/userFollowing"){
                this.isClicked1=true;
                this.isClicked2=false;
                this.setShowFollow(true);
            }
            else if(link === "/userpage/" + this.$route.params.username + "/ILoveItForm")  {
                console.log(this.user.email)
                if (this.user.email !== this.$route.params.username) {
                    alert('접근 권한이 없습니다.')
                    this.$router.push('/userpage/' + this.$route.params.username);
                }
                this.isClicked1=false;
                this.isClicked2=true;
                this.setShowFollow(false);
            }
            else if(link==="/userpage/" + this.$route.params.username +"/userFollower") {
                this.isClicked1 = false;
                this.isClicked2 = true;
                this.setShowFollow(true);
            }
        },
    },
    created(){
        let to = window.location.pathname;
        if(to === "/userpage/" + this.$route.params.username) {
            this.isClicked1=true;
            this.isClicked2=false;
            this.setShowFollow(false);
        }
        else if(to === "/userpage/" + this.$route.params.username + "/userFollowing"){
            this.isClicked1=true;
            this.isClicked2 = false;
            this.setShowFollow(true);
        }
        else if(to === "/userpage/" + this.$route.params.username + "/ILoveItForm")  {
            if (this.user.email && this.user.email !== this.$route.params.username) {
                alert('접근할 권한이 없습니다.')
                this.$router.push('/userpage/' + this.$route.params.username);
            }
            this.isClicked1=false;
            this.isClicked2=true;
            this.setShowFollow(false);
        }
        else if(to==="/userpage/" + this.$route.params.username +"/userFollower") {
            this.isClicked1=false;
            this.isClicked2 = true;
            this.setShowFollow(true);
        }
        this.GET_FOLLOW(this.$route.params.username);
    },
    methods:{
        ...mapActions(['GET_FOLLOW']),
        isClickedItem(e){
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
    cursor: pointer;
}
.UserSelectMenu-content img{
    margin-right: 1rem;     
}
.UserSelectMenuContentIsClicked{
    border-bottom: 1px solid #0F4C81;
    padding-bottom: 1rem;
}
</style>


