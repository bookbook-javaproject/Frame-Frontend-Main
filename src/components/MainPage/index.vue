<template>
    <div class="mainPage-container">
        <div class="mainPage-header">
            <main-header></main-header>
        </div>
        <div class="mainPage-nav" v-show="isNavNeed" >
            <main-select-list></main-select-list>
            <main-write-button></main-write-button>
        </div>
        <div class="mainPage-content">
            <router-view />
        </div>
      
    </div>
</template>

<script>

import MainSelectList from './SelectList.vue';
import {MainHeader} from '../Layout';
import {MainWriteButton} from './';
// import {PostItem} from '@/components/Post/index.js';
export default {
    components:{
        MainSelectList,
        MainHeader,
        MainWriteButton,
    },
    data(){
        return{
            isNavNeed:true
        }
    },
    created: function(){
            let path = window.location.pathname;
            
            if(path === '/'){
                this.isNavNeed = true;
            }else if(path ==='/recent'){
                this.isNavNeed = true;                
            }else if(path === '/notice'){
                this.isNavNeed = true;
            }else if(path==='/Write'){
                this.isNavNeed =true;                
            }else{
                this.isNavNeed = false;                
            }
        
    },
    watch:{
        '$route'(to){
            console.log(to.fullPath);
            if(to.fullPath === '/'){
                this.isNavNeed = true;
            }else if(to.fullPath ==='/recent'){
                this.isNavNeed = true;                
            }else if(to.fullPath === '/notice'){
                this.isNavNeed = true;
            }else if(to.fullPath==='/Write'){
                this.isNavNeed =true;                
            }else{
                this.isNavNeed = false;                
            }
        }
        
    }
    
}

</script>

<style>
.mainPage-container{
    display:flex;
    flex-direction: column;
    justify-items: space-around;
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
    flex-direction: column;
    align-items: center;
}
</style>