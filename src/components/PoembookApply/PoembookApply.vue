<template>
    <div class="writer-form-container">
        <section>
            <div>
                <h1>시집 신청</h1>
                <div class="form-line"></div>
                <p>자신의 실력을 입증할 파일이나 글의 링크를 입력해주세요.</p>
                <article class="writer-form">
                    <div>
                        <input type="text" placeholder="Link" v-model="link" @keyup.enter="onPoembookApply">
                    </div>
                    <div class="input-button-box">
                        <label for="poemApplyInput">
                            <input class="poem-apply-file-input" id="poemApplyInput" type="file" ref="fileObj">
                            <img :src="file" class="icon">
                            <span class="button-text">File</span>
                        </label>   
                    </div>
                </article>
                <router-link to="/" class="writer-link"><p class="point-link">메인 페이지로 돌아가기</p></router-link>
                <button @click="onPoembookApply">신청하기</button>
            </div>
        </section>
    </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import { file } from "@/assets/img";
import "../../assets/style/formGlobal.scss";
export default {
    data () {
        return {
            file,
            link : '',
            fileObj : '',
            fileId : '',
            isPoembookApply : true
        }
    },
    computed : {
        ...mapState({
            fileState : 'file'
        }),
        ...mapGetters([
            "isFile"
        ])
    },
    methods : {
        ...mapActions([
            "POEMBOOK_APPLYCATION",
            "FILE_UPLOAD"
        ]),
        onPoembookApply () {
            if(localStorage.getItem("accessToken")) {
                this.fileObj = this.$refs.fileObj.files[0];
                let formData = new FormData();   
                console.log(this.fileObj)
                formData.append('file', this.fileObj);   

                this.FILE_UPLOAD({file : formData})
                this.fileId = this.fileState;
                
                if(this.isFile === true) {
                    this.POEMBOOK_APPLYCATION({link : this.link, fileId : this.fileId})
                    .then(() => {
                        this.isPoembookApply = false;
                        this.$emit("onPoembookApply", this.isPoembookApply);
                    })
                }
                else {
                    alert("파일 업로드에 실패하였습니다. 다시 시도해주세요.");
                }  
            }
            else {
                alert("로그인을 먼저 해주세요.");
                this.$router.push("/login");
            }
        }
    }
    
}
</script>
