<template>
  <div class="full-screen" @wheel="onWheel" v-bind:style="fullScreenStyle">
    <screen-one />
    <screen-two v-bind:posts="highlightPost.data" />
    <screen-three />
    <screen-four />
    <screen-five />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { GET_HIGLIGHT_POSTS } from '../../store/actions';

import { ScreenOne, ScreenTwo, ScreenThree, ScreenFour, ScreenFive } from "./";

export default {
  name: "FirstView",
  computed: {
    ...mapState(['highlightPost']),
    fullScreenStyle() {
      return {
        transform: `translateY(calc(-100vh * ${this.screenNumber - 1}))`,
        transition: "all 1000ms ease 0s",
        touchAction: "none"
      };
    },
  },
  data() {
    return {
      screenNumber: 1,
      isWheelUp: false,
      isMoving: false,
      lastTime: 0
    };
  },
  watch: {
    highlightPost: {
      deep: true,
      handler({ status }) {
        if (Math.floor(status / 100) === 4) {
          alert('하이라이트 게시글을 불러오는데 실패하였습니다.')
        }
      },
    },
  },
  methods: {
    onWheel(event) {
      event.preventDefault();
      if (!this.isMoving) {
        const isWheelUp = event.wheelDelta > 0;

        this.isWheelUp = isWheelUp;
        this.isFirst = false;

        if (isWheelUp) {
          this.goUp();
        } else {
          this.goDown();
        }
      }
    },
    goUp() {
      if (this.screenNumber !== 1) {
        this.screenNumber--;
        this.startMoving();
      }
    },
    goDown() {
      if (this.screenNumber !== 5) {
        this.screenNumber++;
        this.startMoving();
      }
    },
    startMoving() {
      this.isMoving = true;

      setTimeout(() => {
        this.isMoving = false;
      }, 1000);
    }
  },
  components: {
    ScreenOne,
    ScreenTwo,
    ScreenThree,
    ScreenFour,
    ScreenFive
  },
  mounted() {
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }, 1000);
    this.$store.dispatch(GET_HIGLIGHT_POSTS);
  }
};
</script>

<style lang="scss" scoped>
.full-screen {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0%;
}
</style>
