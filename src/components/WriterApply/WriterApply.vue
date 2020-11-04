<template>
    <div class="writer-form-container">
        <section>
            <div>
                <h1>작가 신청</h1>
                <div class="form-line"></div>
                <p>가입 시 등록한 이메일을 입력해주세요.</p>
                <form class="writer-form">
                    <input type="text" placeholder="Email" v-model="email">
                    <p class="form-error">{{ emailError }}</p>
                </form>
                <router-link to="/" class="writer-link"><p class="point-link">메인 페이지로 돌아기기</p></router-link>
                <button @click="onWriterApplyAuth">이메일 인증 코드 전송</button>
            </div>
        </section>
    </div>
</template>

<script>
import "../../assets/style/formGlobal.scss";
export default {
    data () {
        return {
            email : "",
            emailError : "",
            isWriterAuth : true
        }
    },
    methods : {
        onWriterApplyAuth () {
            if(!this.validEmail(this.email)) {
                this.emailError = "이메일을 올바르게 입력하세요.";
            }
            else {
                this.emailError = "";
                this.isWriterAuth = false;
                this.$emit("onWriterApplyAuth", this.isWriterAuth);
            }
        },
        validEmail (email) {
            let emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return emailCheck.test(email);
        }
    }
}
</script>
