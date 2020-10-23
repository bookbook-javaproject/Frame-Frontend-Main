<template>
    <div class="postList-container">
            <post-item v-for="item of items" v-bind:key="item.user.nickname" v-bind:user="item.user"  v-bind:post="item.post">a</post-item>

    </div>
</template>

<script>
import PostItem from './PostItem.vue';
import axios from 'axios';
export default {
    components:{
       'post-item': PostItem
    },
    data(){
        return{
            items: null,
        }
    },
  
    async created(){
        const data = await axios.get('https://raw.githubusercontent.com/zofqofhtltm8015/fs/master/db.json');
        this.items = data.data;
        console.log(this.items);
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