<template>
    <div class="writer-form-container">
        <section>
            <div>
                <h1>작가 신청</h1>
                <div class="form-line"></div>
                <p>가입 시 등록한 이메일을 입력해주세요.</p>
                <form class="writer-form" @submit="onSubmit">
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
import { mapActions, mapGetters } from "vuex";
import "../../assets/style/formGlobal.scss";
export default {
    data () {
        return {
            email : "",
            emailError : "",
            isWriterAuth : true
        }
    },
    computed : {
        ...mapGetters([
            "isApplyError"
        ])
    },
    methods : {
        ...mapActions([
            "WRITER_AUTH"
        ]),
        onSubmit(e) {
            e.preventDefault();
        },
        onWriterApplyAuth () {
            if(!this.validEmail(this.email)) {
                this.emailError = "이메일을 올바르게 입력하세요.";
            }
            else {
                this.emailError = "";
                this.isWriterAuth = false;
            }
            if(!localStorage.getItem("accessToken")) {
                alert("로그인을 먼저 해주세요.");
            }
            else if(this.isWriterAuth === false) {
                this.WRITER_AUTH({email : this.email})
                .then(() => {
                    if(this.isApplyError.auth == true) 
                    {
                        this.$emit("onWriterApplyAuth", this.isWriterAuth);  
                    }
                    else 
                    {
                        alert("작가 신청 이메일 인증에 실패하였습니다. 다시 시도해주세요.");
                    }
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
