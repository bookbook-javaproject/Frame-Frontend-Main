<template>
    <div class="postList-container">
        <post-item v-for="(item,index) of notices" v-bind:key="index" v-bind:post="item" :isNotice="true" ></post-item>
    </div>

</template>

<script>
import postItem from  './PostItem';
import { mapActions, mapState } from 'vuex';

export default {
    name:'NoticePostList',
    components:{
        postItem
    },
    data(){
        return{
            items: null 
        }
    },
       methods:{
           ...mapActions([
               'GET_NOTICE'
           ])
    
    },
    computed: mapState(['notices']),
    created(){
        this.GET_NOTICE();
    },
    watch: {
        notices(data) {
            console.log(data)
        }
    }
 
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