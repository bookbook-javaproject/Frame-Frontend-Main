<template>
    <div class="writer-form-container">
        <section>
            <div>
                <h1>작가 신청</h1>
                <div class="form-line"></div>
                <p>이메일로 발송된 본인인증 코드를 입력해주세요.</p>
                <form class="writer-form" @submit="onSubmit">
                    <input type="text" placeholder="Code" v-model="authCode">
                    <p class="form-error">{{ codeError }}</p>
                </form>
                <p class="form-point" @click="applyFail">인증코드를 받지 못하셨나요?</p>
                <button @click="onApplyCodeCheck">다음</button>
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
            isApplyAuth : false,
            isApplyCodeCheck : true,
            authCode : "",
            codeError : "",
            authCodeCheck : ''
        }
    },
    computed : {
        ...mapGetters([
            "isApplyError"
        ])
    },
    methods : {
        ...mapActions([
            "WRITER_CHECK_CODE"
        ]),
        applyFail () {
            this.isApplyAuth = true;
            this.$emit("applyFail", this.isApplyAuth);
        },
        onApplyCodeCheck () {
            if(this.authCode == "") {
                this.codeError = "인증코드를 입력해주세요.";
            }
            else if(localStorage.getItem("accessToken")){
                this.WRITER_CHECK_CODE({code : this.authCode})
                .then(() => {
                    console.log('then', this.isApp)
                    if(this.isApplyError.codeCheck == true) {
                        this.isApplyCodeCheck = false;
                        this.$emit("onApplyCodeCheck", this.isApplyCodeCheck);
                    }
                    else {
                        this.codeError = "인증코드가 올바르지 않습니다.";
                    }
                })
            }
        },
        onSubmit(e) {
            e.preventDefault();
        }
    }
}
</script>
