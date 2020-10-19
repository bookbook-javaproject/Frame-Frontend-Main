<template>
  <div class="full-screen" @wheel="onWheel" v-bind:style="fullScreenStyle">
    <screen-one />
    <screen-two />
    <screen-three />
    <screen-four />
    <screen-five />
  </div>
</template>

<script>
import { ScreenOne, ScreenTwo, ScreenThree, ScreenFour, ScreenFive } from "./";

export default {
  name: "FirstView",
  computed: {
    fullScreenStyle() {
      return {
        transform: `translateY(calc(-100vh * ${this.screenNumber - 1}))`,
        transition: "all 1000ms ease 0s",
        touchAction: "none"
      };
    }
  },
  data() {
    return {
      screenNumber: 1,
      isWheelUp: false,
      isMoving: false,
      lastTime: 0
    };
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
