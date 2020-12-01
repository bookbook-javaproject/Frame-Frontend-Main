<template>
    <div class="ILoveItForm-container">
        <post-item v-for="(item,index) in sympatheticPosts" v-bind:key="index" :post="item" :isSympathetic='true' />
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import postItem from '../Post/PostItem';

export default {
    components:{postItem},
            data(){
      return{
        items: null
      }
    },
    computed: mapState(['sympatheticPosts']),
    methods: mapActions(['GET_SYMPATHETIC']),
    created (){
        this.GET_SYMPATHETIC();
    }
}
</script>

<style>

</style>