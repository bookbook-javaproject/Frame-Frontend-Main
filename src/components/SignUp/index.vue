<template>
  <div class="auth-container">
    <sign-up @onSignUp="onSignUpAuth" v-if="isSignUp" />
    <sign-up-check @onSignUp="onSignUpAuth" v-else />
    <side-view />
  </div>
</template>

<script>
import { SideView, SignUp, SignUpCheck } from "./";
import "../../assets/style/authGlobal.scss";
export default {
  name: "SignUp",
  data() {
    return {
      isSignUp: true,
    };
  },
  components: {
    "side-view": SideView,
    "sign-up": SignUp,
    "sign-up-check": SignUpCheck,
  },
  methods: {
    onSignUpAuth(data) {
      this.isSignUp = data;
    },
  },
};
</script>
