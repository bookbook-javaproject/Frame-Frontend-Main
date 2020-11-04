<template>
    <div class="form-background" :style="formBackgroundStyle">
        <Header />
        <div v-if="isWriterApplyState">
            <div v-if="isApplyCodeCheck">
                <writer-apply @onWriterApplyAuth="onWriterApply" v-if="isWriterAuth"/>
                <writer-apply-check @onApplyCodeCheck="onApplyCodeCheck" @applyFail="onWriterApply" v-else />
            </div>
            <writer-apply-form @onWriterApply="onWriterApplyState" v-else/>
        </div>
        <apply-success v-else/>
    </div>
</template>

<script>
import { backgroundPublic } from "@/assets/img";
import "../../assets/style/formGlobal.scss";
import header from "../Layout/header";
import { WriterApply, WriterApplyForm, WriterApplyCodeCheck, WriterApplySuccess } from "./";
export default {
    name: "writerForm",
    data() {
        return {
            formBackgroundStyle: {
                backgroundImage: `url(${backgroundPublic})`
            },
            isWriterAuth : true,
            isApplyCodeCheck : true,
            isWriterApplyState : true
        }
    },
    components : { "writer-apply" : WriterApply, "Header" : header, "writer-apply-form" : WriterApplyForm, "writer-apply-check" : WriterApplyCodeCheck, "apply-success" : WriterApplySuccess },
    methods : {
        onWriterApply (data) {
            this.isWriterAuth = data;
        },
        onApplyCodeCheck (data) {
            this.isApplyCodeCheck = data;
        }, 
        onWriterApplyState (data) {
            this.isWriterApplyState = data;
        }
    }
}
</script>

<style lang="scss">
.form-background {
    height : 100%;
    width: 100%;
    background-size: 100vw;
    background-repeat: no-repeat;
    background-position-y: 100%;
}
</style>