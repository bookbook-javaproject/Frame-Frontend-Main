<template>
  <div class="UserPage-container">
    <user-infor :follow="follow" v-on:showFollow="setShowFollow" />
    <user-select-menu v-bind:showFollow="isShowFollow" :setShowFollow="setShowFollow" />
    <router-view />
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex';

import {UserInfor,UserSelectMenu} from './index.js'
export default {
    components:{UserInfor,UserSelectMenu},
    data(){
      return{
        isShowFollow: false,
      }
    },
    methods:{
      setShowFollow:function(data){
          this.isShowFollow = data;
      },
          ...mapActions([
            'GET_USER',
            'GET_FOLLOW_NUMBER',
            'GET_MYPOST',
            'GET_USER_POSTS',
            'GET_FOLLOW',
            'GET_WRITER',
          ]) 
    },  
    async created(){
        await this.GET_USER(); 
        await this.GET_FOLLOW(this.$route.params.username);
    },
    computed: mapState(['user', 'follow', 'myPosts', 'writer']),
    watch: {
      user: {
        deep: true,
        handler(data) {
          if (data.email === this.$route.params.username) {
            this.GET_MYPOST({ accessType: 'private'});
          }
        },
    }
  }
}
</script>

<style>
.UserPage-container{
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 1166px;

}
.UserPage-container user-select-menu{
  margin-top: 3rem;
}

.MyWritintForm-container {
  padding-top: 1rem;
}
</style>