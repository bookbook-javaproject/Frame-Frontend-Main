<template>
  <div class="UserPage-container">
    <user-infor :user="user" :follow="follow" v-on:showFollow="setShowFollow" />
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
          console.log('setShowFollow 실행됨');
          this.isShowFollow = data;
      },
          ...mapActions([
            'GET_USER',
            'GET_FOLLOW_NUMBER',
            'GET_MYPOST',
            'GET_USER_POSTS',
            'GET_FOLLOW'
          ]) 
    },  
    async created(){
        await this.GET_USER(); 
        await this.GET_FOLLOW(this.$route.params.username);
    },
    computed: mapState(['user', 'follow']),
    watch: {
      async '$route'() {
        await this.GET_USER(); 
        await this.GET_FOLLOW(this.$route.params.username);
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

}
.UserPage-container user-select-menu{
  margin-top: 3rem;
}
</style>