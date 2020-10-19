<template>
  <div class="background" v-bind:style="backgroundStyle">
    <common-main>
      <header>
        <img v-bind:src="frameLogo" alt="프레임-로고" class="frame-logo" />
      </header>
      <main>
        <h1>
          FRAME IS
          <br />EVERYWHERE
        </h1>
        <p>‘프레임’ 에서 언제 어디서든 자신의 생각을 자유롭게 표현해보세요.</p>
        <router-link to="/login" @click.native="goStart">
          <span>시작하기</span>
        </router-link>
      </main>
    </common-main>
  </div>
</template>

<script>
import { CommonMain } from "./";
import { frameLogo, screenOneBackground } from "@/assets/img";

export default {
  name: "ScreenOne",
  data() {
    return {
      frameLogo,
      backgroundStyle: {
        backgroundImage: `url(${screenOneBackground})`
      }
    };
  },
  components: {
    CommonMain
  },
  methods: {
    goStart() {
      localStorage.setItem("isFirstTime", "false");
    }
  }
};
</script>

<style lang="scss" scoped>
$main-color: #0f4c81;

.background {
  width: 100vw;
  height: 100vh;
  background-size: auto 100vh;
  background-repeat: no-repeat;
  background-position-x: 100%;

  > .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 63vh;
  }
}

.frame-logo {
  margin-top: 1.5rem;
  width: 4.75rem;
  height: auto;
}

h1 {
  color: $main-color;
  font-size: 5rem;
  font-family: "impact";
  letter-spacing: 1.5625rem;
}

p {
  color: #707070;
  font-size: 1rem;
  font-family: "AppleSDGothicNeo";
  margin: 12px 0 56px;
}

a {
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15.1875rem;
  height: 3.4375rem;
  background-color: $main-color;
  border: none;
  border-radius: 3.125rem;
  outline: none;

  > span {
    font-size: 1.5rem;
    font-family: "AppleSDGothicNeo";
    color: #ffffff;
    margin-bottom: 2px;
  }
}
</style>
