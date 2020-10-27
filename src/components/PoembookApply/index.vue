<template>
    <div class="form-background" :style="formBackgroundStyle">
        <Header />
        <poembook-apply v-if="isPoembookApply" @onPoembookApply="onApplyPoembook"/>
        <poembook-apply-success v-else />
    </div>
</template>

<script>
import { backgroundPublic } from "@/assets/img";
import "../../assets/style/formGlobal.scss";
import header from "../Layout/header";
import { PoembookApply, PoembookApplySuccess } from "./";
export default {
    name: "writerForm",
    data() {
        return {
            formBackgroundStyle: {
                backgroundImage: `url(${backgroundPublic})`
            },
            isPoembookApply : true
        }
    },
    components : { "Header" : header , "poembook-apply" : PoembookApply, "poembook-apply-success" : PoembookApplySuccess },
    methods : {
        onApplyPoembook (data) {
            this.isPoembookApply = data;
        }
    }
}
</script>