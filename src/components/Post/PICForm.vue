<template>
  <PICommentForm v-bind:post_detail="post_detail" ></PICommentForm>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import PICommentForm from './PICommentForm';

export default {
    components:{PICommentForm},
    methods:{
        ...mapActions([
            'GET_POST_DETAIL'
        ])
    },
    computed: mapState({
          post_detail: state=>state.post_detail
    }),
      async created(){
        localStorage.setItem('postId',this.$route.params.id)  
        console.log("실행됨");
        await this.GET_POST_DETAIL();
  },

}
</script>

<style>

</style>