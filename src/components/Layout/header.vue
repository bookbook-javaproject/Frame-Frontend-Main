<template>
  <div class="header-container" v-bind:class="{headerSelectedMain: showUserI}">
    <div class="header-logo" >
        <img :src="frameLogo" v-on:click="frameLogoClick"  alt="로고오브프레임" />
    </div>
    <div class="header-items" >
        <input class="header-searchBox" type="text" v-model="q" placeholder="검색" @keydown.enter="search" />
        <img class="header-serachIcon" :src="headerSearchIcon" v-on:click="search" />
        <img class="header-userImage" :src="user ? user.imageUri ? `http://52.79.253.30:5001/file?id=${user.imageUri}` : defaultProfileImage : defaultProfileImage" alt="너의 사진"  @click="goMyPost"/>
        <div class="header-list">
         <img class="header-select" v-on:click="showUser" :src="headerSelectButtonIcon" v-bind:class="{headerSelected: showUserI}" alt="셀레그"/> 
         <modal v-if="showUserI" /> <!-- showUserI means Show User Information-->
        </div>
    </div>

</div>
</template>

<script>
import { frameLogo, headerSearchIcon, headerSelectButtonIcon, authArt } from "@/assets/img";
import {modal} from './index';
import router from '@/router';
import { mapActions, mapState } from 'vuex';

export default {
    name:'MainHeader',
    components:{modal},
    data(){
        return{
            frameLogo,
            headerSearchIcon,
            headerSelectButtonIcon,
            showUserI: false,
            q:'',
            defaultProfileImage: authArt,
        }
    },
    computed: mapState(['user']),
    watch: {
        '$route'() {
            this.showUserI = false;
        }
    },
    methods:{
        showUser(){
            this.showUserI= !this.showUserI
        },
        frameLogoClick(){
            if (this.$route.fullPath !== '/') {
                router.push("/");
            }
        },
        ...mapActions([
            'GET_SEARCH_POST'
        ]),
        search(){
            this.$router.push('/')
            this.GET_SEARCH_POST({q:this.q})
        },
        goMyPost() {
            this.$router.push(`/userpage/${this.user.email}`)
        }
    }

}
</script>

<style>
    .header-container{
        padding: 0 1rem;
        display:flex;
        flex-direction: row;
        color:red;
        justify-content: flex-start;
        align-items: center;
        height: 7.5rem;
        width: 1166px;
        margin: 0 auto;
    }
    .header-logo{
        width: inherit;
        cursor: pointer;
    }
    .header-items{
        display: flex;
        justify-content: flex-end;
        height: 5rem;
        width: inherit;
        align-items: center;
        position: relative;
    }
  
 
    .header-userImage{
        height: 3.5rem;
        width: 3.5rem;
        border-radius: 100px;
        margin-left: 1rem;
        cursor: pointer;
    }
    .header-select{
        height: 1.5rem;
        width:  1.5rem;
        cursor: pointer;
                        margin-left: 1rem;
                        transition: 0.3s;


    }
    .header-searchBox{
        
        outline: none;
        font-size: 1.2rem;
        border:none;
        border-bottom: 1px #D1D1D1 solid;


    }
    .header-searchBox::placeholder{
        color: #d1d1d1;
    }
    .header-serachIcon{
                margin-left: 1rem;

        cursor: pointer;
    }
    .headerSelected{
        transform: rotate(180deg);
        transition: 0.3s;
    }
    .headerSelectedMain .header-items{
    }
</style>