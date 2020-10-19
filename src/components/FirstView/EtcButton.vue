<template>
  <div class="etc-button-box">
    <img v-bind:src="imgSrc" alt="Etc" />
    <span v-text="count" />
  </div>
</template>

<script>
export default {
  name: "EtcButton",
  props: ["imgSrc", "count"]
};
</script>

<style lang="scss" scoped>
.etc-button-box {
  display: flex;
  align-items: center;
  & + & {
    margin-left: 2rem;
  }

  > img {
    width: 1.5rem;
    height: auto;
    object-fit: cover;
    margin-right: 0.5rem;
  }

  > span {
    display: block;
    font-size: 1rem;
    font-family: "AppleSDGothicNeo";
    font-weight: 100;
  }
}
</style>
