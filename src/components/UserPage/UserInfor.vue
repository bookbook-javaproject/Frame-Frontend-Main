<template>
    <div class="UserInfor-container">
        <img class="UserInfor-userImage" :src="user.imageUri ? user.imageUri : defaultProfileImage" />
        <div class="UserInfor-content">
            <div class="UserInfor-infor">
                <div class="UserInfor-userNickname">{{user.nickname}}</div>
                <div class="UserInfor-userAction">
                    <img :src="authBlocked">
                    <img :src="authReport">
                    <img :src="authSponser" >
                </div>
            </div>
            <div class="UserInfor-introduce">{{user.description}}</div>
            <div class="UserInfor-content-container">
                <div class="UserInfor-userFollwer-Infor" v-on:click="showLog">
                    <div class="UserInfor-following">팔로잉</div>
                    <div class="UserInfor-followingSum">{{follow.following}}</div>
                </div>
                <div class="UserInfor-userFollwer-Infor" v-on:click="showLog">
                    <div class="UserInfor-follwer" >팔로워</div>
                    <div class="UserInfor-follwerSum">{{follow.follower}}</div>
                </div>
                <div class="UserInfor-application" @click="goApplyPage">작가신청</div>
            </div>
           
        </div>
    <div  v-show="clickedReport" class="UserInfor-report-modal">
            <div class="UserInfor-report-modal-container">
                    <img class="close-button" v-on:click="close_Reportmodal" :src="closeButton"/>
                    <img class="reaport-logo" :src="frameLogo"/>
                    <h1>신고하기</h1>
                    <div class="report-reason">신고 사유</div>
                    <textarea class="report-content" v-model="reportContent" />
                    <div class="UserInfor-report-modal-button" v-on:click="submit_report">신고</div>
            </div>
    </div>
    </div>
</template>

<script>
    
import {authBlocked, authReport,frameLogo, authSponser,closeButton, authArt } from '@/assets/img';
import {mapActions} from 'vuex';
export default {
    props:['user','follow'],
    data(){
        return{
            UserImage: 'https://pbs.twimg.com/media/Ef8sDBhUcAAhv_c.jpg',
            authBlocked,
            authReport, 
            authSponser,
            clickedReport:false,
            closeButton,
            frameLogo,
            reportContent:'',
            defaultProfileImage: authArt,
        }
    },
    methods:{
        ...mapActions([
            'POST_REPORT'
        ]),
        showLog: function(){
            this.$emit('showFollow');
        },
        report:function(){
            this.clickedReport= true
            
        },
        close_Reportmodal:function(){
            this.clickedReport=false
        },
        submit_report:function(){
            this.POST_REPORT(this.reportContent);
        },
        goApplyPage() {
            this.$router.push('/writer-apply')
        }
    },
    created() {
        console.log(this.user, this.follow)
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
.UserInfor-report-modal{
    z-index:3;
    height: 100%;
    width: 100%;
    position: fixed;
    right: 0%;
    top: 0%;
    background-color: rgba(80, 80, 80, 0.9);
    
}
.UserInfor-report-modal-container{
    width: 70rem;
    position: fixed;
    left: 10%;
    top: 10%;
    height: 40rem;
    opacity: 1;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: white;
    color: #838383;
    align-items:flex-start;
}
.UserInfor-report-modal-container h1{
    color: #0F4C81;
}
.UserInfor-report-modal-button{
    padding: 0.5rem 2rem 0.5rem 2rem; 
    background-color: #0F4C81;
    color:white;
}
.UserInfor-report-modal-container .report-content{
    width: 50rem;
    height: 20rem;
}
.UserInfor-report-modal-container .close-button{
    margin-left: auto;
    cursor: pointer;
}
.UserInfor-report-modal-container .reaport-logo{
    margin-left: 5rem;
}
.UserInfor-report-modal-container h1{
        margin-left: 5rem;
}
.UserInfor-report-modal-container div{
        margin-left: 5rem;
}
.UserInfor-report-modal-container textarea{
    margin-left: 5rem;
    font-size: 1.5rem;
    color: #838383;
}
</style>