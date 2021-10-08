<!-- 
<template>
  <div
    :class="{ 'icon-class': classIcon }"
    :style="style"
    ref="lavContainer"
  ></div>
</template>

<script>
import Vue from "vue";
let lottieWeb;
if (!Vue.prototype.$isServer) {
  lottieWeb = require("lottie-web/build/player/lottie_light.js");
}
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    loop: Boolean,
    autoplay: {
      type: Boolean,
      default: true,
    },
    settings: Object,
    height: Number,
    width: Number,
    classIcon: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      animation: null,
    };
  },
  computed: {
    style() {
      let style = {};
      if (this.width) {
        style.width = this.width + "px";
      }
      if (this.height) {
        style.height = this.height + "px";
      }
      return style;
    },
  },
  methods: {
    play() {
      if (this.animation) {
        this.animation.play();
      }
    },
    pause() {
      if (this.animation) {
        this.animation.pause();
      }
    },
    stop() {
      if (this.animation) {
        this.animation.stop();
      }
    },
    setSpeed(val) {
      if (this.animation) {
        this.animation.setSpeed(val);
      }
    },
  },
  mounted() {
    if (lottieWeb) {
      this.animation = lottieWeb.loadAnimation({
        container: this.$refs.lavContainer,
        renderer: "svg",
        loop: this.loop,
        autoplay: this.autoplay,
        animationData: this.data,
        rendererSettings: this.settings,
      });
    }
  },
};
</script>
<style lang="scss">
.icon-class {
  transform: translate(-45%, -45%);
}
</style>

<!-- use it

<template>
    <div>
        <Lottie loop autoplay :data="animationData" :height="400" :width="400"></Lottie>
    </div>

</template>
<script>
    import Lottie from '@/components/lottie.vue'
    import animationData from '@/assets/beating-heart.json'
    export default {
        components: {
            Lottie
        },
        data () {
            return {
                animationData
            }
        },
        computed: {
            lottie () {
                return this.$refs.lottie
            }
        }
    }
</script>
-->