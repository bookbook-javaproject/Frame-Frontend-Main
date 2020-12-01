<template>
  <div class="userprofile">
      <h1>프로필 설정</h1>
      <label for="file">
        <div class="image" v-bind:style="{ backgroundImage: 'url(' + previewImage + ') ',    backgroundPosition: 'center center'}">
            <div class="content" v-show="notSelected">
                <img :src="selectImage ? selectImage : user.imageUri ? user.imageUri : ''"  />
                <input type="file"  @change="previewFiles" style="display:none" name="file" id="file" />

                <div>프로필 사진 선택</div>
            </div>
        </div>
        </label>
      <div class="selectBox">
          <div>
            <label for="Emotional">감성</label>
            <input type="radio" id="Emotional" v-model="favoriteType" value="SENSIBILITY" checked name="Write-nature" >
          </div>
          <div>
            <label for="Romantic">낭만</label>
            <input type="radio" id="Romantic" v-model="favoriteType" value="ROMANCE"  name="Write-nature">
          </div>
          <div>
            <label for="Life">인생</label>
            <input type="radio" id="Life" v-model="favoriteType" value="LIFE"  name="Write-nature" >
          </div>
          <div>
            <label for="Philosophy">철학</label>
            <input type="radio" id="Philosophy" v-model="favoriteType" value="PHILOSOPHY" name="Write-nature" >
          </div>      
      </div>

      <input type="text" class="name"  v-model="nickname" placeholder="이름">
      <input type="text" class="introduction" v-model="description" placeholder="한 줄 소개">
      <div class="complete" v-on:click="setUserProfile">완료</div>
      <div class="returnMain" v-on:click="returnMain" >메인으로 돌아가기</div>
  </div>
</template>

<script>
import {selectImage} from '@/assets/img'
import {mapActions, mapState} from 'vuex';
import router from '@/router';
export default {
    data(){
        console.log(this.user)
        return{
            notSelected:true,
            selectImage,
            previewImage:'',
            nickname: '',
            description: '',
            favoriteType:'',
            

        }
    },
    computed: {
        ...mapState(['user']),
    },
    watch: {
        user: {
            deep: true,
            handler(value) {
                console.log(value)
                this.nickname = value.nickname;
                this.description = value.description;
            }
        }
    },
    methods:{
        previewFiles(e){
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.notSelected = false;
                    this.previewImage = e.target.result;
                }
                reader.readAsDataURL(e.target.files[0]);
        },
        ...mapActions([
            'PUT_USER'
        ]),
        setUserProfile(){
                this.PUT_USER({
            imageUri:this.previewFiles,
            nickname: this.nickname,
            description:this.description,
            favoriteType:this.favoriteType,
                })
        },
        returnMain(){
            router.push('/');
        }
    },
    created() {
        this.$store.dispatch('GET_USER')
    }
}
</script>

<style>
.userprofile{
    display:flex;
    flex-direction: column; 
    align-items: center;
    justify-content: space-between;
    height: 500px;
    margin:auto;
    position: relative;
    right: 10rem;

}
.userprofile .image{
    background-size: cover;
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 100px;
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color:#707070; 

}
.userprofile .image .content{
    width:100%;
    margin: auto;
    display:flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.75rem;
    color:white;

}
.userprofile .image .content img{
    width: 4rem;
    height: 4rem;
}

.userprofile h1{
    padding: 0rem 4rem 1rem 4rem;
    border-bottom: 7.5px #0F4C81 solid;
    font-size: 2.5rem;
    font-weight: 100;
}
.userprofile .selectBox{
    display:flex;
    width:100%;
    justify-content: space-around;
}
.selectBox div{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.selectBox label{
    margin-bottom:1rem;
}
.userprofile input{
    width: 100%;
    padding:0rem 0rem 0.5rem 0.1rem;
    font-size: 1.3rem;
    border:none;
    outline:none;
    border-bottom: 1px solid #707070;
}
.userprofile .introduction{
    font-size: 0.75rem;
}
.userprofile .complete{
    width:100%;
    padding:0.5rem 0rem 0.5rem 0rem;
    background-color: #0F4C81;
    letter-spacing: 0.5rem;
    color: white;
    text-align: center;
    margin-top: 3rem;
    cursor: pointer;
}
.userprofile .returnMain{
    color:#0F4C81;
    font-weight: 100;
    cursor: pointer;
    padding:auto;
}

</style>