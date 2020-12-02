<template>
    <div >
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
    <h1 v-if="isSearch && searchPosts.length !== 0">검색 결과</h1>
    <h1 v-else-if="isSearch && searchPosts.length === 0">검색 결과가 없습니다.</h1>
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
    computed: {
        ...mapState(['user', 'searchPosts']),
        isSearch() {
            return this.$route.query.query ? true : false;
        }
    },
    created() {
        if (this.$route.query && this.$route.query.query) {
            this.GET_SEARCH_POST({q:this.$route.query.query})
        }
    },
    watch: {
        '$route'(to) {
            this.showUserI = false;
            if (to.fullPath === '/') {
                this.q = '';
            }
            if (this.$route.query && this.$route.query.query) {
                this.GET_SEARCH_POST({q:this.$route.query.query})
            } else if (this.$route.params.username) {
                this.$store.state.follow = null;
                this.$store.state.writer = null;
                this.$store.state.myPosts = [];
                this.$store.state.userPosts = [];
            

                this.GET_FOLLOW(this.$route.params.username);
                this.GET_WRITER(this.$route.params.username);
            } 
            else {
                this.GET_POST();
            }
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
            'GET_SEARCH_POST',
            'GET_POST',
            'GET_FOLLOW',
            'GET_WRITER',
        ]),
        search(){
            if (this.q.trim()) {
                this.$router.push(`/?query=${this.q.trim()}`);

            } else {
                this.$router.push('/')
                this.GET_POST();
            }
        },
        goMyPost() {
            if (this.$route.path !== `/userpage/${this.user.email}`) {
                this.$router.push(`/userpage/${this.user.email}`)
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.mainPage-header {
    > div {
        > h1 {
            margin: 0 auto;
        }
    }
}
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
    .flex {
        display: flex;
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
    div > h1 {
        width: 1166px;
    }
</style>