<template>
  <common-main v-bind:style="backgrondStyle">
    <header>
      <h1>인기 게시물</h1>
      <p>프레임에서 현재 인기있는 게시물들을 확인해보세요</p>
    </header>
    <main>
      <img v-if="hasPosts && currentPage > 1" v-bind:src="prevButton" alt="이전버튼" @click="goPrevPage" />
      <div class="post-item-wrapper" v-if="hasPosts">
        <post-item
          v-for="(post, i) in posts"
          :key="post.postId"
          :page="i + 1"
          :post="post"
          :current-page="currentPage"
        />
      </div>
      <div v-else class="post-item-wrapper">
        <h1>인기 게시물이 존재하지 않습니다.</h1>
      </div>
      <img class="next" v-if="hasPosts && currentPage < posts.length" v-bind:src="prevButton" alt="다음버튼" @click="goNextPage" />
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
  props: ['posts'],
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
  computed: {
    hasPosts() {
      return !!this.posts.length;
    },
  },
  methods: {
    goPrevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    goNextPage() {
      if (this.currentPage < this.posts.length) {
        this.currentPage++;
      }
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

    &.next {
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

    > h1 {
      flex: 1;
      text-align: center;
      font-family: AppleSDGothicNeo;
    }
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
