<template>
  <PICommentForm v-bind:posts_detail="posts_detail" ></PICommentForm>
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
          posts_detail: state=>state.posts_detail
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