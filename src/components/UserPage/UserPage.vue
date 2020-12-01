<template>
  <div class="UserPage-container">
    <user-infor :user="user" :follow="follow" v-on:showFollow="setShowFollow" />
    <user-select-menu v-bind:showFollow="isShowFollow" />
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
        follow: {},
      }
    },
    methods:{
      setShowFollow:function(){
          console.log('setShowFollow 실행됨');
          this.isShowFollow = !this.isShowFollow
      },
          ...mapActions([
            'GET_USER',
            'GET_FOLLOW_NUMBER',
            'GET_MYPOST'
          ]) 
    },  
    async created(){
        await this.GET_USER();   
        const { data } =await this.GET_FOLLOW_NUMBER({email:this.$route.params.username});     
        this.follow = data;
        const { data: { userPostPreviews } } =  await this.GET_MYPOST({accessType:"public"});
        this.items = userPostPreviews;
    },
    computed: mapState(['user'])
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