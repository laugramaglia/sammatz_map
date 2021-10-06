<template>
  <div id="map-wrap" style="height: 100vh">
    <client-only>
      <l-map
        :center="[-50.466683, 43.683701]"
        :zoom="4"
        :minZoom="2"
        :maxZoom="7"
        :maxBoundsViscosity="1.0"
        @click="mapClick"
      >
        <l-tile-layer url="/map/{z}/{x}/{y}.png" :noWrap="true"></l-tile-layer>
        <!-- List of markers -->
        <div v-for="dataMark in dataGroups" :key="dataMark.router">
          <l-marker
            v-for="mark in dataMark.markers"
            :lat-lng="[mark.lat, mark.lng]"
            :key="mark.name"
            :visible="dataMark.visible"
          >
            <l-icon
              :icon-size="[22, 37]"
              :icon-anchor="[16, 37]"
              :icon-url="'/markers/' + dataMark.color + '.svg'"
            >
            </l-icon>
            <!-- pop-up module -->
            <PopUpEdited
              :title="mark.name"
              :description="mark.description"
              :link="mark.link"
              :img="mark.img"
            />
          </l-marker>
        </div>
        <!-- Line path -->
        <l-polyline
          :lat-lngs="polylineBlue.latlngs"
          :color="polylineBlue.color"
        ></l-polyline>
      </l-map>
    </client-only>
    <!-- bottom right menu -->
    <FilterBar @onTap="onClickBlue" :groupsFilter="dataGroups" />
  </div>
</template>
<script>
import dataGroups from "../api/data"
import bluePath from "static/data/path.js"

export default {
  data() {
    return {
      colectData: [], // helper
      dataGroups,
      polylineBlue: {
        latlngs: bluePath,
        color: "violet",
      },
    };
  },
  methods: {
    onClickBlue(group) {
      this.dataGroups[group]["visible"] = !this.dataGroups[group]["visible"];
    },
    mapClick(event) {
      /**
       * Get (lat, lng)
       */

      let coordinates = [event.latlng.lat, event.latlng.lng];

      this.colectData.push(coordinates);
      console.log(this.colectData);
    },
  },
};
</script>
<style lang="scss">
button.button {
  position: absolute;
  bottom: 100px;
  z-index: 999;
  left: 50%;
  transform: translateX(-50%);
}
</style>


