<template>
    <div class="UserInfor-container">
        <img class="UserInfor-userImage" :src="UserImage" />
        <div class="UserInfor-content">
            <div class="UserInfor-infor">
                <div class="UserInfor-userNickname">사랑스러운 종근</div>
                <div class="UserInfor-userAction">
                    <img :src="authBlocked">
                    <img :src="authReport" >
                    <img :src="authSponser" >
                </div>
            </div>
            <div class="UserInfor-introduce">아무리 도망쳐도 내 선한 본성은 이길 수 없었다. 거짓과 위선은 너 같은 사람에게나 필요한 것 나도 이젠 내 자신에게 솔직해져야 겠다.</div>
            <div class="UserInfor-content-container">
                <div class="UserInfor-userFollwer-Infor" v-on:click="showLog">
                    <div class="UserInfor-following">팔로잉</div>
                    <div class="UserInfor-followingSum">801</div>
                </div>
                <div class="UserInfor-userFollwer-Infor" v-on:click="showLog">
                    <div class="UserInfor-follwer" >팔로워</div>
                    <div class="UserInfor-follwerSum">1</div>
                </div>
                <div class="UserInfor-application">작가신청</div>
            </div>

        </div>
    
    </div>
</template>

<script>
    
import {authBlocked, authReport, authSponser} from '@/assets/img';
export default {
    data(){
        return{
            UserImage: 'https://pbs.twimg.com/media/Ef8sDBhUcAAhv_c.jpg',
            authBlocked,
            authReport, 
            authSponser
        }
    },
    methods:{
        showLog: function(){
            this.$emit('showFollow');
        }
    }
}
</script>

<style>

.UserInfor-container{
    display:flex;
    align-items: center;
    width: 100%;
}

.UserInfor-container img{
    margin-right: 2rem;
}
.UserInfor-userImage{
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 100px;
}
.UserInfor-userAction img{
    width: 0.75rem;
    height: 0.75rem;
}
.UserInfor-content{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    height: 7.5rem;
    margin-left: 1rem;
}
.UserInfor-content-container{
    display:flex;
    align-items: center;
}
.UserInfor-infor{
    display:flex;
    justify-content: space-between;
    align-items: center;
}

.UserInfor-userFollwer-Infor{
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-right: 2rem;
    color: #0F4C81;
}
.UserInfor-application{
    padding: 0.25rem 1rem 0.25rem 1rem;
    background-color: #0F4C81;
    border-radius: 100px;
    color: #ffffff;
    cursor: pointer;
    position: relative;
    left: 30rem;
}
.UserInfor-introduce{
    font-size: 13px;
    margin-left: -1rem;
}
.UserInfor-userNickname{
    color: #0F4C81;
    font-size: 1.5rem;
    font-weight: bold;
}

</style>