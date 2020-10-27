<template>
  <div class="writeButton-container" v-on:click="WriteButtonClicked" v-bind:class="{writeButtonContainerActive: WriteButtonActive }">
            <img :src="writeButtonPencilIcon" />
            <div class="writeButton-button" >글쓰기</div>
  </div>
</template>

<script>
import router from '@/router';
import {writeButtonPencilIcon} from '@/assets/img'
export default {
    data:function() {
        return {
            writeButtonPencilIcon,
            WriteButtonActive: false
        };
},
methods:{
    WriteButtonClicked(){
        router.push("/Write");    
    }
},
watch:{
    '$route'(to){
        if(to.fullPath ==='/Write'){
            this.WriteButtonActive = true   

        }else {
            this.WriteButtonActive = false
        }
    }
  },
created: function(){
     let path = window.location.pathname;
     if(path==="/Write"){
         this.WriteButtonActive = true;
     }
}
}

</script>

<style>
.writeButton-container{
    display:flex;
    flex-direction: row;
    align-items: center;
    color:#0F4C81;
    opacity: 0.3;
    transition: all 1s;
    cursor: pointer;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    

}
.writeButton-container:hover{
    opacity: 1;
    font-weight: bold;
}
.writeButtonContainerActive{
    opacity: 1;
    font-weight: bold;

}

.writeButton-button{
    margin-left: 1rem;
}
</style>