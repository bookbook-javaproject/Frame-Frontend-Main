<template>
    <div class="UserInfor-container">
        <img class="UserInfor-userImage" :src="writer ? writer.imageUri ? `http://52.79.253.30:5001/file?id=${writer.imageUri}` : defaultProfileImage : defaultProfileImage" @click="goUserPage" />
        <div class="UserInfor-content">
            <div class="UserInfor-infor">
                <div class="UserInfor-userNickname" @click="goUserPage">
                    {{writer ? writer.nickname : ''}}
                    <img :src="checkBadge" v-if="user.email" class="badge" @mouseover="badgeOver" @mouseleave="badgeLeave" />
                    <p v-if="isHoveredBadge">이 사용자는 작가 인증을 받았습니다.</p>
                </div>
                <!-- <div class="UserInfor-userAction">
                    <img :src="authBlocked">
                    <img :src="authReport">
                    <img :src="authSponser" >
                </div> -->
            </div>
            <div class="UserInfor-introduce">{{writer ? writer.description : ''}}</div>
            <div class="UserInfor-content-container">
                <div class="UserInfor-userFollwer-Infor" v-on:click="goFollowing">
                    <div class="UserInfor-following">팔로잉</div>
                    <div class="UserInfor-followingSum">{{follow ? follow.following.length : 0}}</div>
                </div>
                <div class="UserInfor-userFollwer-Infor" v-on:click="goFollower">
                    <div class="UserInfor-follwer" >팔로워</div>
                    <div class="UserInfor-follwerSum">{{follow ? follow.follower.length : 0}}</div>
                </div>
                <div class="UserInfor-application" @click="goApplyPage" v-if="writer ? writer.email === user.email : false">작가신청</div>
                <div class="UserInfor-application" @click="onClickFollow" v-else-if="followRelation && ~followRelation.follower.findIndex((follower) => follower.email === user.email)">팔로잉</div>
                <div class="UserInfor-application" @click="onClickFollow" v-else>팔로우</div>
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
    
import {authBlocked, authReport,frameLogo, authSponser,closeButton, authArt, checkBadge } from '@/assets/img';
import {mapActions, mapState} from 'vuex';
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
            checkBadge,
            isHoveredBadge: false
        }
    },
    methods:{
        goUserPage() {
            if (`/userpage/${this.$route.params.username}` !== this.$route.path) {
                this.$router.push(`/userpage/${this.$route.params.username}`);
            }
        },
        goFollowing() {
            this.$router.push(`/userpage/${this.$route.params.username}/userFollowing`)
            this.showLog();
        },
        goFollower() {
            this.$router.push(`/userpage/${this.$route.params.username}/userFollower`)
            this.showLog();
        },
        ...mapActions([
            'POST_REPORT',
            'GET_WRITER',
            'FOLLOW_USER',
            'GET_FOLLOW',
        ]),
        showLog: function(){
            this.$emit('showFollow', true);
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
        },
        async onClickFollow() {
            this.FOLLOW_USER(this.writer.email).then(() => {
                console.log(this.$route.params)
                this.GET_FOLLOW(this.$route.params.username);
            })
        },
        badgeOver() {
            this.isHoveredBadge = true;
        },
        badgeLeave() {
            this.isHoveredBadge = false;
        }
    },
    created() {
        this.GET_WRITER(this.$route.params.username);
    },
    computed: mapState({
        writer: (state) => state.writer,
        followRelation: (state) => state.follow,
    })
}
</script>

<style lang="scss">

.UserInfor-container{
    display:flex;
    align-items: center;
    width: 100%;
}

.UserInfor-container img{
    margin-right: 2rem;
}
.UserInfor-userImage{
    cursor: pointer;
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
    cursor: pointer;
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
}
.UserInfor-userNickname{
    cursor: pointer;
    color: #0F4C81;
    font-size: 1.5rem;
    font-weight: bold;
    position: relative;;

    > p {
        position: absolute;
        top: 7px;
        right: -174px;
        width: 200px;
        font-size: 14px;
        display: block;
    }
}


.badge {
    width: 20px;
    height: 20px;
    object-fit: contain;

    &:hover {
        &::after { 
            position: absolute;
            width: 100px;
            height: 100px;
            content: '아삐싸'
        }
    }
}
</style>