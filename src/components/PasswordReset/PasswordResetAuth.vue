<template>
  <main>
    <header class="auth-header">
      <img v-bind:src="frameLogo" alt="프레임-로고" class="auth-logo" />
    </header>
    <section class="auth-section">
      <p>가입 시 등록한 이메일을 입력해주세요</p>
      <h1>Password Reset</h1>
      <form class="auth-form">
        <div>
          <input type="text" placeholder="Email" v-model="email" />
        </div>
        <span class="auth-error">{{ emailError }}</span>
      </form>
      <router-link to="/login" class="auth-link"
        ><span class="point-link">로그인 페이지로 돌아가기</span></router-link
      >
      <button @click="onPasswordAuth">비밀번호 재설정 코드 전송</button>
    </section>
  </main>
</template>

<script>
import { mapActions } from "vuex";
import { frameLogo } from "@/assets/img";
import "../../assets/style/authGlobal.scss";
export default {
  data() {
    return {
      frameLogo,
      email: "",
      emailError: "",
      isPasswordAuth: true,
    };
  },
  methods: {
      ...mapActions([
            'PASSWORD_RESET_AUTH'
        ]),
    onPasswordAuth() {
      !this.validEmail(this.email) ? (this.emailError = "이메일을 올바르게 입력하세요.") : this.emailError ="" (this.isPasswordAuth = false); 
      if(this.emailError == "")
      {
        this.PASSWORD_RESET_AUTH({ email : this.email })
            .then(() => {
                this.isPasswordReset = false;
                this.$emit("onPasswordAuth", this.isPasswordAuth);
            })
            .catch(err => {
                console.log(err);
            })
      }
    },
    validEmail(email) {
      let emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailCheck.test(email);
    },
  }
};
</script>
