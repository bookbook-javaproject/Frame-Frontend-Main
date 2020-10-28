<template>
    <div class="writer-form-container">
        <section>
            <div>
                <h1>시집 신청</h1>
                <div class="form-line"></div>
                <p>자신의 실력을 입증할 파일이나 글의 링크를 입력해주세요.</p>
                <form class="writer-form">
                    <div>
                        <input type="text" placeholder="Link">
                    </div>
                    <div class="input-button-box">
                        <label for="poemApplyInput">
                            <input class="poem-apply-file-input" id="poemApplyInput" type="file">
                            <img :src="file" class="icon">
                            <span class="button-text">File</span>
                        </label>   
                    </div>
                </form>
                <router-link to="/" class="writer-link"><p class="point-link">메인 페이지로 돌아가기</p></router-link>
                <button @click="onPoembookApply">신청하기</button>
            </div>
        </section>
    </div>
</template>

<script>
import { file } from "@/assets/img";
import "../../assets/style/formGlobal.scss";
export default {
    data () {
        return {
            file,
            isPoembookApply : true
        }
    },
    methods : {
        onPoembookApply () {
            this.isPoembookApply = false;
            this.$emit("onPoembookApply", this.isPoembookApply);
        }
    }
    
}
</script>
