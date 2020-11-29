<template>
    <div class="MyWritintForm-container">
        <post-item v-for="(item,index) in items" v-bind:key="index" :post="item" />
    </div>
</template>

<script>
    import postItem from '../Post/PostItem';
    import {mapActions,mapState} from 'vuex'
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
    computed: mapState([
        'myPost'
    ]),
    async created(){
        const item =  await this.GET_MYPOST({accessType:"public"});
       this.items = item.data.userPostPreviews,
       console.log(this.items);
        
    }
}
</script>

<style>

</style>