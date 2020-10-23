<template>
    <div class="auth-container">
        <login />
        <side-view />
    </div>
</template>

<script>
import { SideView, Login } from './';
export default {
    name : "Login",
    data () {
        return {
        }
    },
    components : { 'side-view' : SideView, 'login' : Login }
}
</script>

<style lang="scss">

.auth-container {
    padding: 0 0 0 20.625rem;
    overflow: hidden;
    display: flex;
     .auth-logo {
        margin-top : 1.5rem;
    }
}

</style>