<template>
  <footer>
    <main>
      <aside>
        <img v-bind:src="frameLogo" alt="프레임로고" />
        <pre>
          Frame은 시, 글귀, 명언 등의 짧은 글 커뮤니티입니다. 
          짧은 글에 관심있는 사람들끼리 서로 생각을 공유할 수 있으며,
          언제 어디서든 자신의 생각을 표현할 수 있습니다.
        </pre>
      </aside>
      <article>
        <div class="role-wrapper">
          <h4>Frontend</h4>
          <h6>신서림</h6>
          <h6>이우찬</h6>
          <h6>최종근</h6>
        </div>
        <div class="role-wrapper">
          <h4>Backend</h4>
          <h6>손민기</h6>
          <h6>이우찬</h6>
        </div>
        <div class="role-wrapper">
          <h4>Design</h4>
          <h6>신서림</h6>
        </div>
      </article>
    </main>
    <div class="sns-wrapper">
      <a href="https://facebook.com">
        <img v-bind:src="facebookIcon" alt="페이스북로고" />
      </a>
      <a href="https://github.com">
        <img v-bind:src="githubIcon" alt="깃허브로고" />
      </a>
    </div>
  </footer>
</template>

<script>
import { frameLogo, facebookIcon, githubIcon } from "@/assets/img";

export default {
  name: "FirstViewFooter",
  data() {
    return {
      frameLogo,
      facebookIcon,
      githubIcon
    };
  }
};
</script>

<style lang="scss" scoped>
$font-color: #0f4c81;

footer {
  width: 100vw;
  height: 10rem;
  position: absolute;
  bottom: 0;
  background-color: #e5eaef;
}

main {
  display: flex;
  padding: 0 20.625rem;
  box-sizing: border-box;
  width: 100vw;
}

@media screen and (max-width: 1540px) {
  main {
    padding: 0 1.875rem;
  }
}

aside {
  display: flex;
  align-items: center;
  width: 25.25rem;
  height: 10rem;
  margin-right: 16.25rem;

  > img {
    width: 4.75rem;
    height: auto;
    margin-right: 1.5rem;
  }

  > pre {
    font-size: 0.725rem;
    font-family: "AppleSDGothicNeo";
    color: $font-color;
  }
}

article {
  display: flex;
  justify-content: space-between;
  width: 32.5rem;
  height: 100%;
  padding-top: 1.5rem;

  .role-wrapper {
    display: flex;
    flex-direction: column;

    > h4 {
      font-size: 1.4em;
      font-family: "AppleSDGothicNeo";
      color: $font-color;
      margin-bottom: 1rem;
    }

    > h6 {
      font-size: 0.875rem;
      font-family: "AppleSDGothicNeo";
      color: $font-color;
    }
  }
}

h6 + h6 {
  margin-top: 0.375rem;
}

.sns-wrapper {
  position: absolute;
  right: 6rem;
  bottom: 1.25rem;
  display: flex;
  align-items: center;

  a + a {
    margin-left: 1.25rem;
  }

  > img {
    width: 60px;
    height: auto;
    object-fit: contain;
  }
}
</style>
