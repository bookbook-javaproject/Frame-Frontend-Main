<template>
  <div class="modal-container">
      <img :src="imageUri"  class="modal-userImage" >
      <div style="font-weight: bold">
        {{nickname}}
      </div>
        <router-link to="/setProfile">
            <div>
                계정설정
            </div>
        </router-link>
        <div class="modal-logout-button" @click="onLogOut">
            로그아웃
        </div>
  </div>
</template>

<script>
export default {
    props:['imageUri','nickname'],
    methods: {
        onLogOut() {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            this.$router.push('/login');
        }
    }
}
</script>

<style>
    .modal-container{
        color: #707070; 
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;    
        height: 15rem;
        width: 10rem;
        box-shadow: 1px 1px 5px;
        position: relative;
        top: 10rem;
        right: 3rem;
        font-size: 1.5rem;
        text-align: center;
        z-index: 1;
        background-color: #fdfdfd;
        
    }
    .modal-userImage{
        width: 3rem;
        height: 3rem;
        border-radius: 100px;
    }
    .modal-logout-button {
        cursor:pointer;
    }

</style>