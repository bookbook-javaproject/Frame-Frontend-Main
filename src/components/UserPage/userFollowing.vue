<template>
    <div class="userFollowing-container-2">
    <div v-for="(item, index) of items" v-bind:key="index">
          <FollowItem  v-bind:user="item" />
    </div>

        <!-- v-for="(item,index) of items" v-bind:key="index"-->
    </div>
</template>

<script>
import FollowItem  from './FollowItem.vue'
export default {
    components:{FollowItem},
    data(){
        return{
            items:[
                {
                    following: 34,
                    follower:4
                },
                {
                    following: 34,
                    follower:4
                },
                {
                    following: 34,
                    follower:4
                },
                {
                    following: 34,
                    follower:4
                },
                {
                    following: 34,
                    follower:4
                },
                {
                    following: 34,
                    follower:4
                },
                {
                    following: 34,
                    follower:4
                },
                {
                    following: 34,
                    follower:4
                },
                {
                    following: 34,
                    follower:4
                }                                                                                                
            ]
        }
    },
    methods:{
  
    }
}
</script>

<style>
    .userFollowing-container-2{
        
      
    }
    
</style>