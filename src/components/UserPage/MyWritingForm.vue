<template>
    <div class="MyWritintForm-container">
        <h3 v-if="userPosts.length === 0 && myPosts.length === 0">작성한 게시글이 없습니다.</h3>
        <h2 v-if="myPosts.length !== 0">비공개 게시글</h2>
        <post-item v-for="(item,index) in myPosts" v-bind:key="index + userPosts.length" :post="item" :isMyPosts="true" />
        <h2 v-if="userPosts.length !== 0">공개 게시글</h2>
        <post-item v-for="(item,index) in userPosts" v-bind:key="index" :post="item" :isUserPage="true" />
    </div>
</template>

<script>
    import postItem from '../Post/PostItem';
    import {mapActions, mapState} from 'vuex'
export default {
    components:{postItem},
            data(){
      return{
        items: null
      }
    },
    computed: {
        ...mapState(['user', 'myPosts', 'userPosts']),
    },
    methods:{
        ...mapActions([
            'GET_MYPOST',
            'GET_USER_POSTS',
        ])
    },
    created(){
        if (this.$route.params.username === this.user.username) {
            this.GET_MYPOST({accessType:"public"});
        }
        this.GET_USER_POSTS(this.$route.params.username);
    }
}
</script>

<style lang="scss">
.MyWritintForm-container {
    > h3 {
        margin-top: 10px;
    }    
}
</style>