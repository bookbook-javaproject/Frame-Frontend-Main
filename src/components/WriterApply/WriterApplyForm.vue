<template>
    <div class="writer-form-container">
        <section>
            <div>
                <h1>작가 신청</h1>
                <div class="form-line"></div>
                <p>당신의 실력을 인증할 포트폴리오와 다짐 및 목표를 <br>입력해주세요. (선택사항)</p>
                <form class="writer-form">
                    <div>
                        <input type="text" placeholder="Link" v-model="link">
                    </div>
                    <div>
                        <input type="text" placeholder="Goal" v-model="goal">
                    </div>
                </form>
                <router-link to="/writerApply" class="writer-link"><p class="point-link">메인 페이지로 돌아가기</p></router-link>
                <button @click="onWriterApply">작가 신청하기</button>
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
            isWriterApply : true,
            link : '',
            goal : ''
        }
    },
    computed : {
        ...mapGetters([
            "isApplyError"
        ])
    },
    methods : {
        ...mapActions([
            "WRITER_APPLYCATION"
        ]),
        onWriterApply () {
            this.WRITER_APPLYCATION({link : this.link, goal : this.goal})
            .then(() => {
                if(this.isApplyError.form == true)
                {
                    this.isWriterApply = false;
                    this.$emit("onWriterApply", this.isWriterApply);
                }
            })
        }
    }
    
}
</script>
