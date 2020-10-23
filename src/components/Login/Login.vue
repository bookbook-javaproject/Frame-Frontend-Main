<template>
        <main>
            <header class="auth-header">
                <img v-bind:src="frameLogo" alt="프레임-로고" class="auth-logo" />
            </header>
            <section class="auth-section">
                <p>WELCOME TO</p>
                <h1>FRAME</h1>
                <form class="auth-form">
                    <div>
                        <input type="text" placeholder="Email">
                    </div>
                    <div>
                        <input type="password" placeholder="password">
                    </div>
                </form>
                <router-link to="/passwordReset" class="auth-link"><span>혹시 <span class="point-link">비밀번호를 잊으셨나요?</span></span></router-link>
                <router-link to="/signUp" class="auth-link"><span>아직 <span class="point-link">계정이 없으신가요?</span></span></router-link>
                <button>로그인</button>
            </section>
        </main>
</template>

<script>
import { frameLogo } from "@/assets/img";
export default {
    name : "LoginPage",
    data () {
        return {
            frameLogo
        }
    },
}
</script>

<style lang="scss">
$beforeColor : #0f4c8130;
$color : #0f4c81;
$font : "AppleSDGothicNeo";


.auth-section {
    margin-top : 10rem;
    
    .auth-form {
        margin-top : 2.5rem;
        margin-bottom: 3rem;

        div {
            margin-top : 3.2rem;

            input {
                border : none;
                width : 25rem;
                height: 3rem;
                outline : none;
                font-size : 1.4rem;
                font-weight: 200;
                border-bottom: 1px solid rgba(155, 155, 155, 0.712);
                color: #717171;
                &::placeholder {
                    color: #D1D1D1;
                }
            }
        }
    }

    h1 {
        color : $color;
        font-size : 3.6rem;
        font-weight: 500;
        font-family : $font;
    }

    p {
        color : $color;
        font-family: $font;
        font-size: 1.2rem;
        font-weight: 200;
    }

    .auth-link {
        display: block;
        font-size: 0.8rem;
        margin-bottom: 0.7rem;
        text-decoration: none;
        
        span {
            color: #707070;
        }

        .point-link {
            color : $color;
        }
    }

    button {
        background-color : $beforeColor;
        color: white;
        width: 25rem;
        height: 2.9rem;
        border: none;
        border-radius: 2px;
        font-size: 1.2rem;
        font-family: $font;
        margin-top: 1.6rem;
        outline: none;
        cursor: pointer;
        &:hover { 
            background-color: $color; 
            transition: 0.5s;
        }
    }
}
</style>
