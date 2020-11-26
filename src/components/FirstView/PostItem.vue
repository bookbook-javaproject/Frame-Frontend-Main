<template>
  <div class="post-item-box" :style="slideStyle">
    <header>
      <img src="https://picsum.photos/200/300" alt="프로필" class="profile-image" />
      <div class="profile-box">
        <span v-text="post.writerEmail" />
        <span v-text="createdAt" />
      </div>
    </header>
    <pre @wheel="onWheel" v-text="post.content" />
    <footer>
      <etc-button v-bind:imgSrc="etcImage.emotionButton" :count="post.hearts" />
      <etc-button v-bind:imgSrc="etcImage.commentButton" :count="post.comments" />
      <!-- <etc-button v-bind:imgSrc="etcImage.reTweetButton" count="10" /> -->
    </footer>
  </div>
</template>

<script>
import EtcButton from './EtcButton';
import { commentButton, emotionButton, reTweetButton } from '@/assets/img';
import { getDate } from '@/utils/date';

export default {
  name: 'FirstViewPostItem',
  components: {
    EtcButton
  },
  props: ['post', 'currentPage', 'page'],
  computed: {
    slideStyle() {
      return { transform: `translateX(calc(-100% * ${this.currentPage - 1}))` };
    },
    createdAt() {
      return getDate(this.post.createdAt);
    },
  },
  data() {
    const returnData = {
      etcImage: {
        commentButton,
        emotionButton,
        reTweetButton
      }
    };
    return returnData;
  },
  methods: {
    onWheel(e) {
      const { deltaY, target: { scrollHeight, clientHeight, scrollTop } } = e;
      if (
        scrollHeight === clientHeight ||
        scrollTop === 0 && deltaY < 0 ||
        scrollHeight - clientHeight === scrollTop && deltaY > 0
      ) {
        e.preventDefault();
      }
      e.stopPropagation();
    },
  },
};
</script>

<style lang="scss" scoped>
$main-color: #0f4c81;
$border-color: #dae2ea;

.post-item-box {
  position: relative;
  transition: 0.5s;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1.875rem solid $border-color;
  padding: 1.25rem 2rem 0;
}

header {
  display: flex;
}

img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: conver;
  margin-right: 1.1875rem;
}

.profile-box {
  display: flex;
  flex-direction: column;
  > span:first-child {
    font-family: "AppleSDGothicNeo";
    font-size: 1.4rem;
    color: #555555;
    font-weight: 500;
    margin: 0.25rem 0 0.75rem;
  }

  > span:last-child {
    font-family: "AppleSDGothicNeo";
    font-size: 1rem;
    color: #555555;
    font-weight: 100;
  }
}

pre {
  flex: 1;
  white-space: pre-line;
  overflow: scroll;
  padding: 26px 0 10px;
  border-bottom: 1px solid #9b9b9b;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: $main-color;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #ffffff;
  }
}

footer {
  display: flex;
  height: 4rem;
  align-items: center;
}
</style>
