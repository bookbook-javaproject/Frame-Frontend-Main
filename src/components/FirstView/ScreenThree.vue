<template>
  <common-main v-bind:style="backgroundStyle">
    <main>
      <h1>
        다양한 사람들에게 나의 생각을
        공유해보세요
      </h1>
      <p>프레임은 짧은 글 커뮤니티입니다. 언제 어디서든지 글을 작성할 수 있고, 많은 사람들과 생각과 의견을 공유할 수 있습니다.</p>
      <div class="sentence-wrapper">
        <h4>글 쓰기</h4>
        <p>철학, 인생, 낭만, 감성 등 분야를 설정하고 글을 작성해보세요.</p>
      </div>
      <div class="sentence-wrapper">
        <h4>마이페이지</h4>
        <p>
          마음에 드는 글은 아이콘을 눌러보세요.
          내가 마음에 들어한 시를 저장해 모아 볼 수 있습니다.
        </p>
      </div>
      <div class="sentence-wrapper">
        <h4>타임라인</h4>
        <p>
          트렌딩, 최신순, 해시태그 분류 등 다양한 사람들의 글을 정렬해
          확인할 수 있습니다.
        </p>
      </div>
    </main>
  </common-main>
</template>

<script>
import { CommonMain } from "./";
import { screenThreeBackground } from "@/assets/img";

export default {
  name: "ScreenThree",
  data() {
    return {
      backgroundStyle: {
        backgroundImage: `url(${screenThreeBackground})`
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
  justify-content: flex-end;
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
