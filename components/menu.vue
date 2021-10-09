<template>
  <div class="menu-box">
    <div class="button-open-menu" :class="{active: toggleClass}" @click="menuToggle">
      <a-icon type="menu" size="big" class="icon-menu"/>
    </div>
    <a-menu
    id="menu-opened"
      mode="inline"
      :open-keys="openKeys"
      :class="{active: toggleClass}"
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
          @click="onClickMenus(index, 'mark')"
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
          @click="onClickMenus(index, 'path')"
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

      <a-sub-menu key="sub3">
        <span slot="title"><a-icon type="car" /><span>Parking</span></span>
        <a-menu-item
          v-for="(me, index) in parkingFilters"
          :key="index"
          @click="onClickMenus(index, 'parking')"
        >
          <span>
            <a-checkbox :checked="me.visible" />
            <span>{{ me.name }}</span>
          </span>
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item>
        <a-button-group class="button-box">
          <a-button icon="minus" @click="zoomControl(-1)" />
          <a-button icon="plus" @click="zoomControl(1)" />
        </a-button-group>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
export default {
  props: {
    groupsFilter: Array,
    routeFilters: Array,
    parkingFilters: Array,
  },
  data() {
    return {
      rootSubmenuKeys: ["sub1", "sub2", "sub3"],
      openKeys: [],
      toggleClass: false,
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
    onClickMenus(item, group) {
      this.$emit("onTapMark", { itemEmited: item, groupEmited: group });
    },
    zoomControl(value) {
      this.$emit("updateZoom", value);
    },
    menuToggle(){
      this.toggleClass = !this.toggleClass
    }
  },
};
</script>
<style lang="scss">
$height-width: 18px;
$button-size: 45px;
.menu-box {
  z-index: 99999;
  .ant-menu-item.ant-menu-item-selected {
    background-color: white !important;
    &::after {
      display: none;
    }
  }
  .button-box {
    width: 100%;
    button {
      width: 50%;
      i {
        margin: 0;
      }
    }
  }
  .marker-line {
    height: $height-width;
    width: $height-width;
  }
  .button-open-menu{
    height: $button-size;
    width: $button-size;
    background-color: white;
    margin: 0 0 12px auto;
    cursor: pointer;
    border-radius: 4px;
    opacity: 1;
    transition: opacity .3s;

    .icon-menu{
      font-size: 24px;
      margin: auto;
      display: block;
      transform: translateY(40%);

  }

    &.active{
      opacity: .6;
    }
  }
  #menu-opened{
    opacity: .4;
    transform: scale(0);
    transform-origin: top right;
    transition:  .3s;

    &.active{
      transform: scale(1);
      opacity: 1;
    }
  }
}
</style>