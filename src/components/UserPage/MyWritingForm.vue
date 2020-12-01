<template>
    <div class="MyWritintForm-container">
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
    computed: mapState(['myPosts', 'userPosts']),
    methods:{
        ...mapActions([
            'GET_MYPOST',
            'GET_USER_POSTS',
        ])
    },
    created(){
        // this.GET_MYPOST({accessType:"public"});
        this.GET_USER_POSTS(this.$route.params.username);
    }
}
</script>

<style>

</style>