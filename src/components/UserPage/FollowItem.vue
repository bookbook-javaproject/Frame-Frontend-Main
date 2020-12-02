<template>
  <span class="FollowItem-container">
    <span>
        <img :src="user.imageUri ? `http://52.79.253.30:5001/file?id=${user.imageUri}` : defaultProfileImage" class="FollowItem-userImage" />
            <div class="FollowItem-content">
                <div class="FollowItem-userName">{{ user.nickname }}</div>
                <div class="FollowItem-navFollow">
                    <div class="FollowItem-following">팔로잉 {{ follow ? follow.following : 0}}</div>
                    <div class="FollowItem-follower">팔로우 {{ follow ? follow.follower : 0}}</div>
                </div>
            </div>
    </span>
    <div class="FollowItem-button" @click="goUserPage">구경하기</div>
  </span>
</template>

<script>
import { authArt } from '@/assets/img'
import { mapActions } from 'vuex'

export default {
    props:['user'],
    data(){
        return{
            userImage: 'https://pbs.twimg.com/media/Ef8sDBhUcAAhv_c.jpg',
            defaultProfileImage: authArt,
            follow: null,
        }
    },
    methods: {
        goUserPage() {
            this.$router.push(`/userpage/${this.user.email}`)
        },
        ...mapActions(['GET_FOLLOW_NUMBER']),
    },
    created() {
        if (this.user) {
            this.GET_FOLLOW_NUMBER({ email: this.user.email }).then(({ data }) => {
                    this.follow = data;
                }).catch(() => {
                    alert('팔로우 수 불러오기에 실패하였습니다.')
                })
        }
    }
}
</script>

<style>
.FollowItem-container{
    margin-top: 2rem;
    display:flex;
    align-items: center;   
    width:40%;
    justify-content: space-around;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}
.FollowItem-container span{
    display:flex;
    align-items: center;
}
.FollowItem-container .FollowItem-button{
    padding: 0.25rem 1rem 0.25rem 1rem;
    background-color:#ffffff;
    color: #0F4C81;
    border: 1px solid #0F4C81;
    border-radius: 100px;
}

.FollowItem-button {
    cursor: pointer;
}

.FollowItem-navFollow div{
    font-size: 0.7rem;
    color: #555555;
    margin-right: 1rem;
}

.FollowItem-container img{
    height: 3rem;
    width: 3rem;
    border-radius: 100px;
}
.FollowItem-content{
    display:flex;
    flex-direction: column;
    margin: 1rem 1rem 1rem 0.5rem;
    justify-content: space-between;
    align-items:flex-start      ;
    height: 2.5rem;
}
.FollowItem-navFollow{
    display:flex;
    flex-direction: row;
}


</style>