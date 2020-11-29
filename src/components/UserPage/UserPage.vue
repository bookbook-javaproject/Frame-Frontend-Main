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
        follow:[]
      }
    },
    methods:{
      setShowFollow:function(){
          console.log('setShowFollow 실행됨');
          this.isShowFollow = !this.isShowFollow
      },
          ...mapActions([
            'GET_USER',
            'GET_FOLLOW_NUMBER'
    ]) 
    },  
    async created(){
        await this.GET_USER();   
        this.follow = await this.GET_FOLLOW_NUMBER({email:this.$route.params.username});     
        console.log(this.follow);
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