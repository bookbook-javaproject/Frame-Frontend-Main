<template>
  <common-main v-bind:style="backgrondStyle">
    <header>
      <h1>인기 게시물</h1>
      <p>프레임에서 현재 인기있는 게시물들을 확인해보세요</p>
    </header>
    <main>
      <img v-bind:src="prevButton" alt="이전버튼" @click="goPrevPage" />
      <div class="post-item-wrapper">
        <post-item :current-page="currentPage" page="1" />
        <post-item :current-page="currentPage" page="2" />
        <post-item :current-page="currentPage" page="3" />
      </div>
      <img v-bind:src="prevButton" alt="다음버튼" @click="goNextPage" />
    </main>
    <footer />
  </common-main>
</template>

<script>
import PostItem from "./PostItem";
import { CommonMain } from "./";
import { screenTwoBackground, prevButton } from "@/assets/img";

export default {
  name: "ScreenTwo",
  data() {
    return {
      backgrondStyle: {
        backgroundImage: `url(${screenTwoBackground})`
      },
      currentPage: 1,
      prevButton,
      screenTwoBackground
    };
  },
  methods: {
    goPrevPage() {
      this.currentPage--;
    },
    goNextPage() {
      this.currentPage++;
    }
  },
  components: {
    "common-main": CommonMain,
    "post-item": PostItem
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position-x: center;
}

header {
  text-align: center;
  height: 28vh;

  > h1 {
    font-size: 2.5rem;
    font-family: "AppleSDGothicNeo";
    color: #4d4d4d;
    margin: 6rem 0 1rem;
  }

  > p {
    font-size: 1rem;
    font-family: "AppleSDGothicNeo";
    color: #707070;
  }
}

main {
  width: 100%;
  height: 44vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    cursor: pointer;
    width: auto;
    height: 40px;

    &:last-of-type {
      transform: rotate(180deg);
    }
  }

  .post-item-wrapper {
    display: flex;
    flex: 1;
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0 3.25rem;
  }
}

footer {
  width: 100%;
  height: 28vh;
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position-x: center;
}
</style>
