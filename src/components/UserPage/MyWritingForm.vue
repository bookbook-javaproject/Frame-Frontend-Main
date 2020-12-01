<template>
    <div class="MyWritintForm-container">
        <post-item v-for="(item,index) in items" v-bind:key="index" :post="item" :isUserPage="true" />
    </div>
</template>

<script>
    import postItem from '../Post/PostItem';
    import {mapActions} from 'vuex'
export default {
    components:{postItem},
            data(){
      return{
        items: null
      }
    },
    methods:{
        ...mapActions([
            'GET_MYPOST'
        ])
    },
    async created(){
        const { data: { userPostPreviews } } =  await this.GET_MYPOST({accessType:"public"});
        this.items = userPostPreviews;
    }
}
</script>

<style>

</style>