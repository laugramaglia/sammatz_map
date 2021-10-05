<template>
  <div class="filter-bar" :class="{ active: isActive }">
    <a-row :gutter="[16, 16]">
      <a-col
        class="hidden-col"
        v-for="(me, index) in groupsFilter"
        :key="me.name"
        :span="8"
        justify="center"
        align="center"
      >
        <div
          class="filtered-icons"
          @click="onClick(index)"
          :style="{ backgroundColor: me.color }"
        ></div>
      </a-col>
    </a-row>
    <div class="position-menu-hamburguer"  @click="onClikOpen">
      <Lottie :autoplay="false" :loop="false" :data="animationData" :height="40" :width="40"></Lottie>
    </div>
  </div>
</template>
<script>
    import lottie from './lottie.vue'
    import animationData from '../static/8876-menu-to-close.json'
export default {
  components:{
    lottie
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
    onClikOpen(){
      this.isActive = !this.isActive
      // this.lottie.play([0,60], true)
    }
  },
  computed: {
      lottie () {
          return this.$refs.lottie
      }
  }
};
</script>
<style lang="scss">
$padding-box: 12px;
$open-size: 177px;
$box-size: 40px;
.filter-bar {
  position: absolute;
  bottom: 20px;
  padding: $padding-box;
  right: 20px;
  z-index: 999;
  transition: 0.3s;
  width: $box-size + $padding-box * 2;
  height: $box-size + $padding-box * 2;
  overflow: hidden;
  .position-menu-hamburguer {
    position: absolute;
    bottom: $padding-box;
    right: $padding-box;
    z-index: 9999;
    height: $box-size;
    width: $box-size;
    cursor: pointer;
    div{
      transform: scale(2.5);
    }
  }

  .filtered-icons {
    transition: 0.4s;
    height: 0;
    width: 0;
    background-color: orange;
    cursor: pointer;
  }

  &.active {
    width: $open-size;
    height: $open-size;

    .filtered-icons {
      height: $box-size;
      width: $box-size;
      background-color: orange;
      cursor: pointer;
    }
  }
}
</style>
