<template>
  <main>
    <header class="auth-header">
      <img v-bind:src="frameLogo" alt="프레임-로고" class="auth-logo" />
    </header>
    <section class="auth-section">
      <p>등록된 이메일 주소로 전송된 인증 코드를 입력하세요.</p>
      <h1>Sign Up</h1>
      <article class="auth-form">
        <div>
          <input type="text" placeholder="Code" v-model="code" @keyup.enter="onSignUpCheck"/>
        </div>
        <span class="auth-error">{{ codeError }}</span>
      </article>
      <router-link to="/sign-up" class="auth-link"
        ><span class="point-link">회원가입 페이지로 돌아가기</span></router-link
      >
      <button @click="onSignUpCheck">다음으로</button>
    </section>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { frameLogo } from "@/assets/img";
import "../../assets/style/authGlobal.scss";
export default {
  name: "SignUpCheckPage",
  data() {
    return {
      frameLogo,
      code: "",
      codeError: "",
    };
  },
  computed : {
        ...mapGetters([
            "isSignUp"
        ])
    },
  methods: {
    ...mapActions(["SIGN_UP_CHECK"]),
    onSignUpCheck() {
      if (this.code === "") {
        this.codeError = "인증코드를 입력하세요.";
      } 
      else {
        this.SIGN_UP_CHECK({ code: this.code }).then(() => {
            console.log(this.isSignUp);
            if(this.isSignUp === true) this.$router.push("/login");
            else if(this.isSignUp == 403) this.codeError = "인증코드가 잘못되었습니다."
            else if(this.isSignUp == 409) {
                alert("이미 있는 계정입니다.")
                this.$router.push("/login");
            }
            else alert("회원가입에 실패하였습니다. 다시 시도하세요.")
        });
      }
    },
  },
};
</script>
