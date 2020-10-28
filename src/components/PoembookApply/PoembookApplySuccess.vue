<template>
    <div class="writer-form-container">
        <section>
            <div>
                <h1>시집 신청</h1>
                <div class="form-line"></div>
                <img :src="authArt" alt="시집신청-완료사진">
                <h2>작가 지원 프로젝트 참가 신청이 완료되었습니다.</h2>
                <router-link to="/" class="writer-link"><p class="point-link">메인 페이지로 돌아가기</p></router-link>
            </div>
        </section>
    </div>
</template>

<script>
import { authArt } from "@/assets/img";
import "../../assets/style/formGlobal.scss";
export default {
    data () {
        return {
            authArt
        }
    }
}
</script>
