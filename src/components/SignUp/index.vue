<template>
    <div class="auth-container">
        <sign-up />
        <side-view />
    </div>
</template>

<script>
import { SideView, SignUp } from './';
import '../../assets/style/authGlobal.scss';
export default {
    name : "SignUp",
    data () {
        return {
        }
    },
    components : { 'side-view' : SideView, 'sign-up' : SignUp }
}
</script>

<style lang="scss">

</style>