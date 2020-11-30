<template>
  <main>
    <header class="auth-header">
      <img v-bind:src="frameLogo" alt="프레임-로고" class="auth-logo" />
    </header>
    <section class="auth-section" v-if="isPasswordReset">
      <p>이메일로 발송된 인증 코드를 확인해주세요.</p>
      <h1>Password Reset</h1>
      <article class="auth-form">
        <div>
          <input
            type="text"
            placeholder="Password Reset Code"
            v-model="resetCode"
          />
        </div>
        <span class="auth-error">{{ codeError }}</span>
        <div>
          <input
            type="password"
            placeholder="New Password"
            v-model="password"
          />
        </div>
        <span class="auth-error">{{ passwordError }}</span>
      </article>
      <router-link to="/login" class="auth-link"><span class="point-link">로그인 페이지로 돌아가기</span></router-link>
      <button @click="onPasswordReset">비밀번호 재설정</button>
    </section>
    <section class="auth-section" v-else>
      <p>비밀번호 재설정이 완료되었습니다.</p>
      <h1>Password Reset</h1>
      <div class="complete-box">
        <img :src="passwordReset" alt="비밀번호재설정-완료">
      </div>
      <router-link to="/" class="auth-link"><span class="point-link">메인 페이지로 돌아가기</span></router-link>
    </section>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { frameLogo, passwordReset } from "@/assets/img";
import "../../assets/style/authGlobal.scss";
export default {
  data() {
    return {
      frameLogo,
      passwordReset,
      resetCode: "",
      password: "",
      codeError: "",
      passwordError: "",
      isPasswordReset: true,
    };
  },
  computed : {
        ...mapGetters([
            "isPassword"
        ])
    },
  methods: {
      ...mapActions([
            'PASSWORD_RESET'
        ]),
    onPasswordReset() {
      this.resetCode === "" ? this.codeError = "인증코드를 입력하세요." : this.codeError = "";
      this.password.length < 8 ? this.passwordError = "비밀번호는 8자 이상이어야합니다." : this.passwordError = "";
      
      if (this.codeError === "" && this.passwordError === "") {
        this.PASSWORD_RESET({ newPassword : this.password, authCode : this.resetCode })
            .then(() => {
                if(this.isPassword == 400) 
                {
                    this.codeError = "인증번호가 잘못되었습니다.";
                }
                else if(this.isPassword === true) {
                    this.codeError = "";
                    alert("비밀번호 재설정이 완료되었습니다.");
                   this.$router.push("/login");
                }
                else
                {
                    alert("비밀번호 재설정에 실패하였습니다. 다시 시도하세요.");
                    location.reload();
                }
            })
      }
    },
  },
};
</script>
