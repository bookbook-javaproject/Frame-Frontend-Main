<template>
  <div class="modal-container">
      <div>
            <img :src="imageUri ? `http://52.79.253.30:5001/file?id=${imageUri}` : defaultProfileImage" class="modal-userImage" @click="goUserPage" >
            <div style="font-weight: bold" @click="goUserPage">
            {{nickname}}
            </div>
      </div>
      <div class="etc">
        <router-link to="/setProfile">
            <div>
                계정설정
            </div>
        </router-link>
        <div class="modal-logout-button" @click="onLogOut">
            로그아웃
        </div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    props:['imageUri','nickname'],
    computed: mapState(['user']),
    methods: {
        goUserPage() {
            if (this.user && this.user.email) {
                this.$router.push(`/userpage/${this.user.email}`)
            }
        },
        onLogOut() {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            this.$router.push('/login');
        }
    },
}
</script>

<style lang="scss" scoped>
    .modal-container{
        position: absolute;
        color: #707070; 
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 16px;
        box-sizing: border-box;
        height: 12rem;
        width: 10rem;
        box-shadow: 1px 1px 5px;
        top: 5rem;
        right: -4.5rem;
        font-size: 1.5rem;
        text-align: center;
        z-index: 1;
        background-color: #fdfdfd;

        > div {
            > img {
                cursor: pointer;
            }
            > div {
                cursor: pointer;
            }
        }
        
    }
    .modal-userImage{
        width: 3rem;
        height: 3rem;
        border-radius: 100px;
    }
    .etc {
        display: flex;
        flex-direction: column;
        align-items: center;
        > a {
            font-size: 16px;
            text-decoration: none;
            color: #000000;
            margin-bottom: 14px;
        }
    }
    .header-list {
        position: relative;
        height: 1.5rem;
    }
    .modal-logout-button {
        cursor:pointer;
        font-size: 16px;
        color: #FF0000;
    }

</style>