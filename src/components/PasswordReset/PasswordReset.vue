<template>
    <main>
        <header class="auth-header">
            <img v-bind:src="frameLogo" alt="프레임-로고" class="auth-logo" />
        </header>
        <section class="auth-section">
            <p>이메일로 발송된 비밀번호 재설정 코드를 입력해주세요.</p>
            <h1>Password Reset</h1>
            <form class="auth-form">
                <div>
                    <input type="text" placeholder="Password Reset Code" v-model="resetCode">
                </div>
                <span class="auth-error">{{ codeError }}</span>
                <div>
                    <input type="password" placeholder="New Password" v-model="password">
                </div>
                <span class="auth-error">{{ passwordError }}</span>
            </form>
            <router-link to="/login" class="auth-link"><span class="point-link">로그인 페이지로 돌아가기</span></router-link>
            <button @click="onPasswordReset">비밀번호 재설정</button>
        </section>
    </main>
</template>

<script>
import '../../assets/style/authGlobal.scss';
export default {
    data () {
        return {
            resetCode : '',
            password : '',
            codeError : '',
            passwordError : ''
        }
    },
    methods : {
        onPasswordReset () {
            if(this.resetCode === '') {
                this.codeError = '인킁조드가 올바르지 않습니다.';
            }
            else {
                this.codeError = '';
            }

            if(this.password.length < 8) {
                this.passwordError = '비밀번호는 8자 이성이어야합니다.';
            }
            else {
                this.passwordError = '';
            }
        }
    }
}
</script>

<style lang="scss">

</style>
