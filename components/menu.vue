<template>
  <div class="menu-box">
    <a-menu
      mode="inline"
      :open-keys="openKeys"
      style="width: 256px"
      @openChange="onOpenChange"
    >
      <a-sub-menu key="sub1">
        <span slot="title"
          ><a-icon type="pushpin" /><span>Filter points</span></span
        >
        <a-menu-item
          v-for="(me, index) in groupsFilter"
          :key="index"
          @click="onClickMark(index)"
        >
          <span>
            <a-checkbox :checked="me.visible" />
            <img :src="'markers/' + me.color + '.svg'" alt="" width="16" />
            <span>{{ me.name }}</span>
          </span>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="compass" /><span>Routes</span></span>
        <a-menu-item
          v-for="(me, index) in routeFilters"
          :key="index"
          @click="onClickPath(index)"
        >
          <span>
            <a-checkbox :checked="me.visible" />
            <a-avatar
              size="small"
              class="marker-line"
              :style="'backgroundColor:' + me.color"
            />
            <span>{{ me.name }}</span>
          </span>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
export default {
  props: {
    groupsFilter: Array,
    routeFilters: Array
  },
  data() {
    return {
      rootSubmenuKeys: ["sub1", "sub2"],
      openKeys: [],
    };
  },
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        (key) => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
    onClickMark(item) {
      this.$emit("onTapMark", item);
    },
    onClickPath(item){
        this.$emit("onTapPath", item);
    }
  },
};
</script>
<style lang="scss">
$height-width: 18px;
.menu-box {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99999;
  .marker-line {
    height: $height-width;
    width: $height-width;
  }
}
</style>