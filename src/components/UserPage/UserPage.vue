<template>
  <div class="UserPage-container">
    <user-infor v-on:showFollow="setShowFollow" />
    <user-select-menu v-bind:showFollow="isShowFollow" />
    <router-view />
  </div>
</template>

<script>
import {UserInfor,UserSelectMenu} from './index.js'
export default {
    components:{UserInfor,UserSelectMenu},
    data(){
      return{
        isShowFollow: false
      }
    },
    methods:{
      setShowFollow:function(){
          console.log('setShowFollow 실행됨');
          this.isShowFollow = !this.isShowFollow
      } 
    }
}
</script>

<style>
.UserPage-container{
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap
}
.UserPage-container user-select-menu{
  margin-top: 3rem;
}
</style>