<template>
    <main>
        <header class="auth-header">
            <img v-bind:src="frameLogo" alt="프레임-로고" class="auth-logo" />
        </header>
        <section class="auth-section">
            <p>등록된 이메일 주소로 전송된 인증 코드를 입력하세요.</p>
            <h1>Sign Up</h1>
            <form class="auth-form">
                <div>
                    <input type="text" placeholder="Code">
                </div>
            </form>
            <router-link to="/signUp" class="auth-link"><span class="point-link">회원가입 페이지로 돌아가기</span></router-link>
            <button>다음으로</button>
        </section>
        </main>
</template>

<script>
import { frameLogo } from "@/assets/img";
import '../../assets/style/authGlobal.scss';
export default {
    name : "SignUpCheckPage",
    data () {
        return {
            frameLogo
        }
    },
}
</script>

<style lang="scss">

</style>