<template>
  <div class="screen-five-wrapper">
    <common-main v-bind:style="backgroundStyle">
      <main>
        <h1>지금, 프레임에서 시작해보세요.</h1>
        <p>프레임은 짧은 글 커뮤니티입니다. 다양하고 많은 사람들과 소통하며 자신의 글 실력을 키워보세요.</p>
        <router-link to="/login" v-on:click.native="goStart">
          <span>시작하기</span>
        </router-link>
      </main>
    </common-main>
    <first-view-footer />
  </div>
</template>

<script>
import { CommonMain, FirstViewFooter } from "./";
import { screenFiveBackground } from "@/assets/img";

export default {
  name: "ScreenFive",
  data() {
    return {
      backgroundStyle: {
        backgroundImage: `url(${screenFiveBackground})`
      }
    };
  },
  components: {
    CommonMain,
    FirstViewFooter
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

.screen-five-wrapper {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  box-sizing: border-box;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position-x: center;
}

main {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 25vh;

  > h1 {
    font-size: 2.5rem;
    font-family: "AppleSDGothicNeo";
    color: #4d4d4d;
  }

  > p {
    font-size: 1rem;
    font-family: "AppleSDGothicNeo";
    color: #4d4d4d;
    margin: 0.75rem 0 2rem;
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
}
</style>
