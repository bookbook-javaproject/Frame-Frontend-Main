<template>
    <div class="postList-container">
    </div>

</template>

<script>
import { mapActions } from 'vuex';
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
           ...mapActions([
               'GET_NOTICE'
           ])
    
    },
    async created(){
        const items = this.GET_NOTICE();
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