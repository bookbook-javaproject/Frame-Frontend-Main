<template>
  <main>
    <header class="auth-header">
      <img v-bind:src="frameLogo" alt="프레임-로고" class="auth-logo" />
    </header>
    <section class="auth-section">
      <p>프레임으로 당신의 생각을 공유해보세요</p>
      <h1>Sign Up</h1>
      <form class="auth-form">
        <div>
          <input type="text" placeholder="Email" v-model="email" />
        </div>
        <span class="auth-error">{{ emailError }}</span>
        <div>
          <input type="text" placeholder="nickname" v-model="nickname" />
        </div>
        <span class="auth-error">{{ nameError }}</span>
        <div>
          <input type="password" placeholder="password" v-model="password" />
        </div>
        <span class="auth-error">{{ passwordError }}</span>
      </form>
      <router-link to="/login" class="auth-link"
        ><span
          >이미 <span class="point-link">계정이 있으신가요?</span></span
        ></router-link
      >
      <button @click="onSignUp">다음으로</button>
    </section>
  </main>
</template>

<script>
import { mapActions } from "vuex";
import { frameLogo } from "@/assets/img";
import "../../assets/style/authGlobal.scss";
export default {
  name: "SignUpPage",
  data() {
    return {
      frameLogo,
      email: "",
      nickname: "",
      password: "",
      emailError: "",
      nameError: "",
      passwordError: "",
      isSignUp: false,
    };
  },
  methods: {
    ...mapActions(["SIGN_UP"]),
    onSignUp() {
      !this.validEmail(this.email)
        ? (this.emailError = "이메일을 올바르게 입력하세요.")
        : (this.emailError = "");

      this.nickname === ""
        ? (this.nameError = "닉네임을 입력해주세요.")
        : (this.nameError = "");

      this.password.length < 8
        ? (this.passwordError = "비밀번호는 8자 이상이어야합니다.")
        : (this.passwordError = "");

      if (
        this.emailError === "" &&
        this.passwordError === "" &&
        this.nameError === ""
      ) {
        this.SIGN_UP({
          email: this.email,
          nickname: this.nickname,
          password: this.password,
        })
          .then((res) => {
            this.$emit("onSignUp", this.isSignUp);
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    validEmail(email) {
      let emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailCheck.test(email);
    },
  },
};
</script>
