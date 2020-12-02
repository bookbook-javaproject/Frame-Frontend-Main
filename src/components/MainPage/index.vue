<template>
    <div class="mainPage-container">
        <div class="mainPage-header">
            <main-header />
        </div>
        <div class="mainPage-nav" v-show="isNavNeed" >
            <main-select-list></main-select-list>
            <main-write-button></main-write-button>
        </div>
        <div class="mainPage-content">
            <router-view />
        </div>
        <img :src="backgroundPublic" class="mainPage-footer" />
    </div>
</template>

<script>

import MainSelectList from './SelectList.vue';
import {MainHeader} from '../Layout';
import {MainWriteButton} from './';
import { mapActions,mapState } from "vuex";
import {backgroundPublic} from '@/assets/img';
export default {
    components:{
        MainSelectList,
        MainHeader,
        MainWriteButton,
    },
    data(){
        return{
            isNavNeed:true,
            backgroundPublic
        }
    },
      methods:{
        ...mapActions([
            'GET_USER'
        ])
    },
    async created (){
        await this.GET_USER();
            let path = window.location.pathname;
            if (window.location.search) {
                this.isNavNeed = false;
            } else if(path === '/'){
                this.isNavNeed = true;
            }else if(path ==='/recent'){
                this.isNavNeed = true;                
            }else if(path === '/notice'){
                this.isNavNeed = true;
            }else if(path==='/Write'){
                this.isNavNeed =true;                
            }else if(path===`/update/${this.$route.params.postId}`){
                this.isNavNeed =true;                
            }
            else{
                this.isNavNeed = false;                
            }
        
    },
  
    watch:{
        '$route'(to){
            if(to.fullPath === '/'){
                this.isNavNeed = true;
            }else if(to.fullPath ==='/recent'){
                this.isNavNeed = true;                
            }else if(to.fullPath === '/notice'){
                this.isNavNeed = true;
            }else if(to.fullPath==='/Write'){
                this.isNavNeed =true;                
            }else if(to.fullPath===`/update/${this.$route.params.postId}`){
                this.isNavNeed =true;                
            }else{
                this.isNavNeed = false;                
            }
        }
        
    },
    computed: mapState({
        user: state=>state.user
    })
    
}

</script>

<style>
.mainPage-container{
    display:flex;
    flex-direction: column;
    
}
.mainPage-header{
    height: 20%;
    width: 100%;
}
.mainPage-nav{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width:100%;
}

.mainPage-content{
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;

}
.mainPage-footer{
    position: fixed;
    bottom:0;
    z-index:-999;
    
}
</style>