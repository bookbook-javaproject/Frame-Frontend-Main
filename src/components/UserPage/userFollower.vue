<template>
    <div class="userFollowing-container-2">
        <div v-for="(item,index) of items" v-bind:key="index">
            <FollowItem  v-bind:user="item" />
            <!-- <FollowItem  v-bind:user="items[index*2+1]" /> -->
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
                    following: 1,
                    follower:4
                },
                {
                    following: 2,
                    follower:42
                },
                {
                    following: 3,
                    follower:434
                },
                {
                    following: 4,
                    follower:454
                },
                {
                    following: 5,
                    follower:74
                },
                {
                    following: 6,
                    follower:47
                },
                {
                    following: 7,
                    follower:41
                },
                {
                    following: 8,
                    follower:43
                },
                {
                    following: 9,
                    follower:49
                },
                                {
                    following: 10   ,
                    follower:49
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