<template>
  <div id="app">
    <messenger />     
    <router-view />
  </div>
</template>

<script>
import Messenger from 'frame-qna';

export default {
  name: 'App',
  components: { Messenger },
};
</script>

<style>
</style>
