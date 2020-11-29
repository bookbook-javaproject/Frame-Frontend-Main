<template>
        <main>
            <header class="auth-header">
                <img v-bind:src="frameLogo" alt="프레임-로고" class="auth-logo" />
            </header>
            <section class="auth-section">
                <p>WELCOME TO</p>
                <h1>FRAME</h1>
                <article class="auth-form">
                    <div>
                        <input type="text" placeholder="Email" v-model="email" @keyup.enter="onLogin">
                    </div>
                    <span class="auth-error">{{ emailError }}</span>
                    <div>
                        <input type="password" placeholder="password" v-model="password" @keyup.enter="onLogin">
                    </div>
                    <span class="auth-error">{{ passwordError }}</span>
                </article>
                <router-link to="/password-reset" class="auth-link"><span>혹시 <span class="point-link">비밀번호를 잊으셨나요?</span></span></router-link>
                <router-link to="/sign-up" class="auth-link"><span>아직 <span class="point-link">계정이 없으신가요?</span></span></router-link>
                <button @click="onLogin">로그인</button>
            </section>
        </main>
</template>

<script>
import { mapActions } from "vuex";
import { frameLogo } from "@/assets/img";
import "../../assets/style/authGlobal.scss";
export default {
    name : "LoginPage",
    data () {
        return {
            frameLogo,
            email : "",
            password : "",
            emailError : "",
            passwordError : ""
        }
    },
    methods : {
        ...mapActions([
            'LOGIN'
        ]),
        onLogin () {
            if(!this.validEmail(this.email)) {
                this.emailError = "이메일을 올바르게 입력하세요.";
            }
            else {
                this.emailError = "";
            }
            if(this.password.length < 8) {
                this.passwordError = "비밀번호는 8자 이상이어야 합니다.";
            }
            else {
                this.passwordError = "";
            }

            if(this.emailError == "" && this.passwordError == "") {
                this.LOGIN({email : this.email, password : this.password})
                .then(() => {
                    this.$router.push("/");
                })
                .catch(err => {
                    console.log(err);
                })
            }
        },
        validEmail (email) {
            let emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return emailCheck.test(email);
        }
    }
}
</script>