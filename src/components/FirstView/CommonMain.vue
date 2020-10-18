<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "CommonMain"
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 20.625rem;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
}

@media screen and (max-width: 1540px) {
  .container {
    padding: 0 1.875rem;
  }
}
</style>
