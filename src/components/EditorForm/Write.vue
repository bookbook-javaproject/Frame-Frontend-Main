<template>
  <div class="Write-container">
    <div class="Write-content">
        <img :src="user.profileImage">
        <textarea class="Write-content-editor">
    </div>
    <div class="Write-footer">
        <div class="Write-nature">
          <div class="Write-nature-item">
            <label for="Emotional">감성</label>
            <input type="radio" id="Emotional" value="Emotional" v-model="picked">
          </div>
          <div class="Write-nature-item">
            <label for="Romantic">낭만</label>
            <input type="radio" id="Romantic" value="Romantic" v-model="picked">
          </div>
          <div class="Write-nature-item">
            <label for="Life">인생</label>
            <input type="radio" id="Life" value="Life" v-model="picked">
          </div>
          <div class="Write-nature-item">
            <label for="Philosophy">철학</label>
            <input type="radio" id="Philosophy" value="Philosophy" v-model="picked">
          </div>
        </div>

    </div>
  </div>
</template>

<script>

export default {
  props:{user}


}
</script>

<style>

</style>