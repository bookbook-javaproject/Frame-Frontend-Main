<template>
  <div class="postItem-container" v-on:click="setLocalUser">
    <div class="postItem-card-title">
      <img class="postItem-userImage" v-on:click="userImageClicked" alt="아직 구현 안됨" v-if="!isNotice" :src="post.writer.imageUri ? post.writer.imageUri : defaultProfileImage">
      <div class="postItem-card-subtitle">
        <p>
            {{ isNotice ? `관리자 - ${post.title}` : post.writer.nickname}}
        </p>
        <p style="color: #555555">
            {{createdAtDate}}
        </p>
      </div>
      <div class="etc" v-if="!isNotice">
          <span @click="onToggleReportModal">신고</span>
          <b v-if="post.writer.email === user.email">|</b>
          <span v-if="post.writer.email === user.email">편집</span>
          <b v-if="post.writer.email === user.email">|</b>
          <span v-if="post.writer.email === user.email" >삭제</span>
      </div>
    </div>
    <div class="postItem-card-content" v-on:click="postItemClicked">
            {{post.content}}
    </div>
    <div class="postItem-card-ev"> <!-- ev means Evaluation-->
        <div class="postItem-card-ev-items" v-if="!isNotice && !isUserPage">
            <img :src="~post.hearts.indexOf(user.email) ? emotionButtonClicked :emotionButton"  v-on:click="empth"  />
            <p>
                {{post.hearts.length ? post.hearts.length : 0}}
            </p>
        </div>
        <div class="postItem-card-ev-items" v-if="!isNotice" @click="postItemClicked">
            <img :src="commentButton" @click="postItemClicked">
            <p>
                {{post.comments}}
            </p>
        </div>
    </div>
    <div  v-show="clickedReport" class="UserInfor-report-modal">
            <div class="UserInfor-report-modal-container">
                    <img class="close-button" v-on:click="onToggleReportModal" :src="closeButton"/>
                    <img class="reaport-logo" :src="frameLogo"/>
                    <h1>신고하기</h1>
                    <div class="report-reason">신고 사유</div>
                    <textarea class="report-content" v-model="reportContent" />
                    <div class="UserInfor-report-modal-button" v-on:click="reportPost">신고</div>
            </div>
    </div>
  </div>

</template>

<script>
import {commentButton,emotionButton,emotionButtonClicked, authArt,closeButton,frameLogo } from '@/assets/img'
import router from '@/router';
import {mapActions, mapState} from 'vuex';
export default {
    props:['post', 'isNotice', 'isUserPage'],


    data:function() {
        return {
            frameLogo,
                closeButton,
                commentButton,
                emotionButton,
                emotionButtonClicked,
                defaultProfileImage: authArt,
                clickedReport:false,
                reportContent: '',
            };
        },
        watch: {
            async patchHeartRequest() {
                await this.GET_POST('trending');
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
                'GET_POST',
                'PATCH_HEART'
            ]),
            setLocalUser: function(){
                console.log("로컬스토리지 셋 됨");
            },
            empth :function(){ // empth means  공감
                this.PATCH_HEART();
                
            },
            postItemClicked: function(){
                router.push(`/post/${this.post.postId}`);
            },
            userImageClicked: function(){
                 router.push(`/userpage/${this.post.writer.email}`)
            },
            onToggleReportModal() {
                this.clickedReport = !this.clickedReport;
            },
            async reportPost() {
                try {
                    await this.$store.dispatch('POST_REPORT', {
                        content: this.reportContent,
                        postId: this.post.postId
                        })
                        alert('신고가 접수되었습니다.')
                        this.onToggleReportModal();
                } catch (_) {
                    alert('게시물 신고 실패')
                }
            },
        },
        computed:{
            ...mapState(['patchHeartRequest', 'user']),
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

<style lang="scss">
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
        position: relative;
    }
    .postItem-card-subtitle p{
        margin-left: 1rem;
        margin-top: 0.1rem;

    }
    .postItem-userImage{
        width: 3rem;
        height: 3rem;
        border-radius: 100px;
        cursor: pointer;
    }
    .postItem-card-content{
        width: 95%;
        margin-left: 1.75rem;
        cursor: pointer;
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
    .etc {
        position: absolute;
        right: 0;
        margin-right: 1rem;
        color: gray;
        > b{
            margin: 0 4px;
        }
        > span {
            cursor: pointer;
            color: gray;

            &:hover {
                color: black;
            }
        }
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
    cursor: pointer;
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
    outline: none;
    padding: 1rem;
}
</style>    




