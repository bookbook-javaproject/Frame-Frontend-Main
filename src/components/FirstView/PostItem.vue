<template>
  <div class="post-item-box">
    <header>
      <img src="https://picsum.photos/200/300" alt="프로필" class="profile-image" />
      <div class="profile-box">
        <span>어떤작가</span>
        <span>2020-10-01</span>
      </div>
    </header>
    <pre>
      얼음이 되려니와, 과실이
       넣는 같은 이상은 이상, 인류의 하였으며, 뿐이다. 그들은 우리의 그들은 구하지 목숨을 이는 
      위하여서, 쓸쓸하랴? 낙원을 피가 간에 있는 얼음에 수 보이는 위하여서. 얼마나 없으면 주며, 튼튼하며, 가슴이 곳이 
      위하여 밝은 것은 것이다. 영락과 대한 가지에 불어 힘있다. 구하지 그들은 사라지지 같이, 관현악이며,구하기 때문이다.
      얼음이 되려니와, 과실이
       넣는 같은 이상은 이상, 인류의 하였으며, 뿐이다. 그들은 우리의 그들은 구하지 목숨을 이는 
      위하여서, 쓸쓸하랴? 낙원을 피가 간에 있는 얼음에 수 보이는 위하여서. 얼마나 없으면 주며, 튼튼하며, 가슴이 곳이 
      위하여 밝은 것은 것이다. 영락과 대한 가지에 불어 힘있다. 구하지 그들은 사라지지 같이, 관현악이며,구하기 때문이다.
      얼음이 되려니와, 과실이
       넣는 같은 이상은 이상, 인류의 하였으며, 뿐이다. 그들은 우리의 그들은 구하지 목숨을 이는 
      위하여서, 쓸쓸하랴? 낙원을 피가 간에 있는 얼음에 수 보이는 위하여서. 얼마나 없으면 주며, 튼튼하며, 가슴이 곳이 
      위하여 밝은 것은 것이다. 영락과 대한 가지에 불어 힘있다. 구하지 그들은 사라지지 같이, 관현악이며,구하기 때문이다.
    </pre>
    <footer>
      <etc-button v-bind:imgSrc="etcImage.emotionButton" count="10" />
      <etc-button v-bind:imgSrc="etcImage.commentButton" count="10" />
      <etc-button v-bind:imgSrc="etcImage.reTweetButton" count="10" />
    </footer>
  </div>
</template>

<script>
import EtcButton from "./EtcButton";
import { commentButton, emotionButton, reTweetButton } from "@/assets/img";
export default {
  name: "FirstViewPostItem",
  components: {
    EtcButton
  },
  data() {
    return {
      etcImage: {
        commentButton,
        emotionButton,
        reTweetButton
      }
    };
  }
};
</script>

<style lang="scss" scoped>
$main-color: #0f4c81;
$border-color: #dae2ea;

.post-item-box {
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
