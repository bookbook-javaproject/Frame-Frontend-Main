<template>
    <div class="postList-container">
        <post-item v-for="(item,index) of posts" v-bind:key="index" v-bind:post="item" ></post-item>
    </div>

</template>

<script>
import { mapActions,mapState  } from "vuex";

import postItem from  './PostItem';
export default {
    name:'RecentPostList',
    components:{
        postItem
    },
    data(){
        return{
            items: null 
        }
    },
    computed: mapState({
        posts: state=>state.posts
    }),
    methods:{
        ...mapActions([
            'GET_POST'
        ])
    },
    
    async created(){
        await this.GET_POST('recency');

         console.log(this.posts)
        
    },
 
}
</script>

<style>
    .postList-container{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

    }
</style>