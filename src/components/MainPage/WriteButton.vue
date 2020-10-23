<template>
  <div class="writeButton-container" >
      <img :src="writeButtonPencilIcon" />

      <div class="writeButton-button">
          글쓰기
      </div>

  </div>
</template>

<script>
import {writeButtonPencilIcon} from '@/assets/img'
export default {
    data:function() {
        return {
            writeButtonPencilIcon
        };
}

}
</script>

<style>
.writeButton-container{
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color:#0F4C81;
    opacity: 0.3;
    transition: all 1s;
    cursor: pointer;
}
.writeButton-container:hover{
    opacity: 1;
    font-weight: bold;
}
.writeButton-button{
    margin-left: 1rem;
}
</style>