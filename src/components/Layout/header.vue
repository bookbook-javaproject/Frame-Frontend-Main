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
            UserImage:'data:image/jpeg;base64,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',
            headerSelectButtonIcon,
            showUserI: false,
            q:'',
            defaultProfileImage: authArt,
        }
    },
    computed: mapState(['user']),
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