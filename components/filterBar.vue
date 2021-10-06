<template>
  <div class="filter-bar" :class="{ active: isActive }">
    <a-row
      :gutter="[4, 4]"
      type="flex"
      class="row-class"
      v-for="(me, index) in groupsFilter"
      :key="me.name"
    >
      <a-col
        class="hidden-col"
        flex="auto"
        justify="center"
        align="right"
        @click="onClick(index)"
      >
        <h2 class="filtered-text">{{ me.name }}</h2>
      </a-col>
      <a-col
        class="hidden-col"
        flex="45px"
        justify="center"
        align="right"
        @click="onClick(index)"
      >
        <div
          class="filtered-icons"
          :style="{ backgroundColor: me.color }"
        ></div>
      </a-col>
    </a-row>
    <div class="position-menu-hamburguer" @click="onClikOpen">
      <Lottie
        :autoplay="false"
        :loop="false"
        :data="animationData"
        :height="40"
        :width="40"
      ></Lottie>
    </div>
  </div>
</template>
<script>
import lottie from "./lottie.vue";
import animationData from "../static/8876-menu-to-close.json";
export default {
  components: {
    lottie,
  },
  props: {
    groupsFilter: Array,
  },
  data() {
    return {
      animationData,
      isActive: false,
    };
  },
  methods: {
    onClick(item) {
      this.$emit("onTap", item);
    },
    onClikOpen() {
      this.isActive = !this.isActive;
      // this.lottie.play([0,60], true)
    },
  },
  computed: {
    lottie() {
      return this.$refs.lottie;
    },
  },
};
</script>
<style lang="scss">
$padding-box: 12px;
$box-size: 40px;
.filter-bar {
  position: absolute;
  bottom: 20px;
  padding: $padding-box;
  right: 20px;
  z-index: 999;
  transition: 0.4s;
  width: 260px;

  overflow: hidden;
  height: auto;
  min-height: $box-size + $padding-box * 2;

  .row-class {
    margin-bottom: 0;
    transition: 0.3s;
    cursor: pointer;
    background-color: white;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.36s ease;

    .filtered-icons,
    .filtered-text {
      transition: 0.4s;
      height: 0;
      width: 0;
      font-size: 0;
      overflow: hidden;
    }
  }
  .position-menu-hamburguer {
    position: absolute;
    bottom: $padding-box;
    right: $padding-box;
    z-index: 9999;
    height: $box-size;
    width: $box-size;
    cursor: pointer;
    div {
      transform: scale(2.5);
    }
  }

  &.active {
    .row-class {
      margin-bottom: 52px !important;
      transform: scaleY(1);
    }

    .filtered-icons {
      height: 100%;
      width: 100%;
    }
    .filtered-text {
      height: 100%;
      width: 100%;
      font-size: 21px;
    }
  }
}
</style>
