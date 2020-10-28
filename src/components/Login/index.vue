<template>
  <div class="auth-container">
    <login />
    <side-view />
  </div>
</template>

<script>
import { SideView, Login } from "./";
import "../../assets/style/authGlobal.scss";
export default {
  name: "Login",
  data() {
    return {};
  },
  components: { "side-view": SideView, "login" : Login },
};
</script>