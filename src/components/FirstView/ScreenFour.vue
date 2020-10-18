<template>
  <common-main v-bind:style="backgroundStyle">
    <main>
      <h1>
        프레임에서 작가의 꿈을
        이뤄보세요
      </h1>
      <p>
        프레임에서는 누구나 쉽게 작가에 도전해볼 수 있습니다. 두려워하지 말고
        도전해보세요.
      </p>
      <div class="sentence-wrapper">
        <h4>작가신청</h4>
        <p>
          본인인증과 글 포트폴리오 제출을 통해 작가에 도전해볼 수 있습니다.
          타 사이트에서 작성한 글의 링크를 제출하거나, 프레임에서 작성한 글이 n개 이상이라면 누구나 도전 가능합니다.
        </p>
      </div>
      <div class="sentence-wrapper">
        <h4>작가 지원 프로젝트</h4>
        <p>
          프레임에서 나만의 시집을 제작할 수 있습니다.
          도전해보세요.
        </p>
      </div>
      <div class="sentence-wrapper">
        <h4>작가 페이지</h4>
        <p>
          일반 유저와는 다른 마이페이지가 주어집니다.
          작가가 되면 동영상을 통한 후원 기능을 가질 수 있게 됩니다.
        </p>
      </div>
    </main>
  </common-main>
</template>

<script>
import { CommonMain } from "./";
import { screenFourBackground } from "@/assets/img";

export default {
  name: "ScreenFour",
  data() {
    return {
      backgroundStyle: {
        backgroundImage: `url(${screenFourBackground})`
      }
    };
  },
  components: {
    CommonMain
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position-x: center;

  > main {
    width: 30.1rem;

    h1 {
      font-size: 2.5rem;
      font-family: "AppleSDGothicNeo";
      color: #4d4d4d;
    }

    > p {
      &:first-of-type {
        margin: 2rem 0 2.575rem;
      }
    }

    p {
      font-size: 1rem;
      font-family: "AppleSDGothicNeo";
      color: #707070;
    }

    h4 {
      font-size: 1.1875rem;
      font-family: "AppleSDGothicNeo";
      color: #4d4d4d;
      margin-bottom: 0.7rem;
    }
  }
}

.sentence-wrapper {
  & + & {
    margin-top: 1.5rem;
  }
}
</style>
