<template>
  <div class="Write-container">
    <div class="Write-content">
        <img  class="Write-content-userImage" :src="user.imageUri ? user.imageUri : defaultProfileImage">
        <textarea class="Write-content-editor" v-model="content" />
    </div>
    <div class="Write-footer">
        <div class="Write-nature">
          <div class="Write-nature-item">
            <label for="Emotional">감성</label>
            <input type="radio" id="Emotional" v-model="contentType" value="SENSIBILITY" checked name="Write-nature" >
          </div>
          <div class="Write-nature-item">
            <label for="Romantic">낭만</label>
            <input type="radio" id="Romantic" v-model="contentType"  value="ROMANCE"  name="Write-nature">
          </div>
          <div class="Write-nature-item">
            <label for="Life">인생</label>
            <input type="radio" id="Life" v-model="contentType"   value="LIFE"  name="Write-nature" >
          </div>
          <div class="Write-nature-item">
            <label for="Philosophy">철학</label>
            <input type="radio" id="Philosophy" v-model="contentType"  value="PHILOSOPHY" name="Write-nature" >
          </div>
        </div>
        <div class="Write-select-list">
          <div class="Write-edit-radio">
            <label for="Write-public">공개</label>
            <input type="radio" id="Write-public" v-model="accessType" value="PUBLIC" name="Write-edit">
          </div>
          <div class="Write-edit-radio">
            <label for="Write-private"  >비공개</label>
            <input type="radio" id="Write-private" v-model="accessType" value="PRIVATE" name="Write-edit">
          </div>
          <div class="Write-edit-button" v-on:click="submit">발행</div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex';

import { authArt } from '@/assets/img'

export default {
  data(){
    return{ 
      profileImage: 'https://i.pinimg.com/originals/28/37/5f/28375f1b51f3f4c40c6da45ff4ef2f0a.jpg',
      contentType:'',
      accessType:'',
      content:'',
      defaultProfileImage: authArt
    }
  },
  methods:{
    ...mapActions([
      'POST_CREATE_POST'
    ]),
    submit: function(){
      this.POST_CREATE_POST({contentType:this.contentType,accessType:this.accessType,content:this.content})
    }
  },
  computed: mapState(['user'])

}
</script>

<style>
  .Write-container{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    
    border: 10px solid rgba(15, 76, 129,0.06);
    width:60rem;
    height: 20.5rem;
    margin-top: 2rem;

  }
  .Write-content{
    display:flex;
    justify-content: space-around;
    width: 95%; 
  }
  .Write-content-userImage{
    width: 3rem;
    height: 3rem;
    border-radius: 100px;
  }
  .Write-footer{
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(155,155,155,0.49);
    width: 95%;
    margin-left: 2.5%;
  }
  .Write-nature{
    display: flex;
    justify-content: space-around;
    width: 30%;
  }
  .Write-content-editor{
    width: 50rem;
    height: 10rem;
    outline:none;
    
  }
  
  .Write-nature-item{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 3.5rem;
  }
  .Write-select-list{
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 30%;
    position: relative;
    top: 0.5rem;

    
  }
  .Write-edit-button{
  padding: 0.5rem 1rem 0.5rem 1rem;
   background-color: #0F4C81;
   border-radius: 100px;
    opacity: 0.3;
    transition:  all  ease-in-out  1s;
    cursor: pointer;
          color:#ffffff;
          margin-left: 1rem;

  }
  .Write-edit-button:hover{
      opacity: 1;
      font-weight: bold;
      color:#ffffff;
  }
  .Write-edit-radio label{
    margin-right: 1rem;
    
  }

.Write-footer input[type='radio']:after {
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 0.75rem;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: #ffffff;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 3px solid white;
        -webkit-box-shadow: 5px 6px 13px -2px rgba(0,0,0,0.33); 
box-shadow: 5px 6px 13px -2px rgba(0,0,0,0.33);
    }

.Write-footer input[type='radio']:checked:after {
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 0.75rem;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: #0F4C81;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 3px solid white;
    }
 </style>