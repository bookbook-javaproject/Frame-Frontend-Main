<template>
    <div class="auth-container">
        <password-reset-auth @onPasswordAuth="onPassowrdReset" v-if="isPasswordAuth"></password-reset-auth>
        <password-reset v-else></password-reset>
        <side-view></side-view>
    </div>
</template>

<script>
import { PasswordResetAuth, PasswordReset, SideView } from './index';
import '../../assets/style/authGlobal.scss';
export default {
    data () {
        return {
            isPasswordAuth : true
        }
    },
    components : { 'password-reset-auth' : PasswordResetAuth, 'password-reset' : PasswordReset, 'side-view' : SideView },
    methods : {
        onPassowrdReset (data) {
            this.isPasswordAuth = data;
        }
    }
}
</script>

<style lang="scss">

</style>