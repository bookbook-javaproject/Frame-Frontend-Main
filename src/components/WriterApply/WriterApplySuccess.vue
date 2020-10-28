<template>
    <div class="writer-form-container">
        <section>
            <div>
                <h1>작가 신청</h1>
                <div class="form-line"></div>
                <img :src="writerApplyImg" alt="작가신청-완료사진">
                <h2>작가 신청이 완료되었습니다.</h2>
                <router-link to="/" class="writer-link"><p class="point-link">메인 페이지로 돌아가기</p></router-link>
            </div>
        </section>
    </div>
</template>

<script>
import { writerApplyImg } from "@/assets/img";
import "../../assets/style/formGlobal.scss";
export default {
    data () {
        return {
            writerApplyImg
        }
    }
}
</script>
