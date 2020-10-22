<template>
    <main>
        <header class="auth-header">
            <img v-bind:src="frameLogo" alt="프레임-로고" class="auth-logo" />
        </header>
        <section class="auth-section">
            <p>프레임으로 당신의 생각을 공유해보세요</p>
            <h1>Sign Up</h1>
            <form class="auth-form">
                <div>
                    <input type="text" placeholder="Email">
                </div>
                <div>
                    <input type="text" placeholder="nickname">
                </div>
                <div>
                    <input type="password" placeholder="password">
                </div>
            </form>
            <router-link to="/login" class="auth-link"><span>이미 <span class="point-link">계정이 있으신가요?</span></span></router-link>
            <button>다음으로</button>
        </section>
        </main>
</template>

<script>
import { frameLogo } from "@/assets/img";
import '../../assets/style/authGlobal.scss';
export default {
    name : "SignUpPage",
    data () {
        return {
            frameLogo
        }
    },
}
</script>

<style lang="scss">

</style>