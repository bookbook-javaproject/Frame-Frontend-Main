<template>
    <div class="ILoveItForm-container">
        <post-item v-for="(item,index) in items" v-bind:key="index" :user="item.user" :post="item.post" />
    </div>
</template>

<script>
    import postItem from '../Post/PostItem';
    import axios from 'axios';

export default {
    components:{postItem},
            data(){
      return{
        items: null
      }
    },
    async created(){
        const data = await axios.get('https://raw.githubusercontent.com/zofqofhtltm8015/fs/master/db.json');
        this.items = data.data;
        
    }
}
</script>

<style>

</style>