<template>
    <div class="postList-container">
    </div>

</template>

<script>
import axios from 'axios';
export default {
    name:'NoticePostList',
    components:{
    },
    data(){
        return{
            items: null 
        }
    },
       methods:{
        getPostItem : async ()=> {
            return  axios.get('https://raw.githubusercontent.com/zofqofhtltm8015/fs/master/db.json');
            
        }
    },
    async created(){
        const items = await this.getPostItem();
        this.items = items.data;
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