<template>
    <div class="userFollowing-container-2">
        <h3 v-if="follow && !follow.follower.length">팔로워가 0명입니다.</h3>
        <div v-for="(item,index) of follow && follow.follower" v-bind:key="index">
            <FollowItem  v-bind:user="item" />
            <!-- <FollowItem  v-bind:user="items[index*2+1]" /> -->
        </div>

        <!-- v-for="(item,index) of items" v-bind:key="index"-->
    </div>
</template>

<script>
import { mapState } from 'vuex'
import FollowItem  from './FollowItem.vue'
export default {
    components:{FollowItem},
    computed: mapState(['follow'])
}
</script>

<style>
    .userFollowing-container-2{
        margin-top: 1rem;
    }
    
</style>