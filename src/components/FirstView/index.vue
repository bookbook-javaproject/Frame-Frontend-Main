<template>
  <div>
    <h1>hello</h1>
    <img v-bind:src="logo" />
  </div>
</template>

<script>
import { logo } from '../../assets/img';

export default {
  name: 'FirstView',
  data() {
    return {
      logo,
    };
  },
};
</script>

<style lang="scss">
$variable-name: red;
h1 {
  color: $variable-name;
}
</style>
