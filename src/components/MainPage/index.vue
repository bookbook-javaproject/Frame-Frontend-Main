<template>
    <div class="mainPage-container">
        <div class="mainPage-header">
            <main-header></main-header>
        </div>
        <div class="mainPage-nav">
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
        

    }
}
</script>

<style>
.mainPage-container{
    display:flex;
    flex-direction: column;
    align-items: center;
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
    width:95%;
}
.mainPage-content{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>