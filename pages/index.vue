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
        @update:zoom="zoomUpdated"
        :class="{'to-low': zoomBool}"
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
            <!-- show name always -->
            <l-tooltip
              :options="{ permanent: true, className: 'tooltip-custom', offset:[-4,-10], direction: 'bottom' }"
              >{{ mark.name }}!</l-tooltip
            >
            <!-- custom icon -->
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
         v-for="lines in paths"
         :key="lines.color"
          :lat-lngs="lines.latlngs"
          :color="lines.color"
          :visible="lines.visible"
          :smoothFactor=".1"
          :opacity=".7"
        ></l-polyline>
      </l-map>
    </client-only>
    <!-- bottom right menu -->
    <Menu @onTapMark="onClickMarks" @onTapPath="onClickPaths" :groupsFilter="dataGroups" :routeFilters="paths" />
  </div>
</template>
<script>
import dataGroups from "../api/data";
import { bluePath, redPath, yellowPath } from "static/data/path.js";

export default {
  data() {
    return {
      colectData: [], // helper
      zoomBool: false,
      dataGroups,
      paths:[
         {
           name: "Arena",
        latlngs: bluePath,
        color: "violet",
        visible: true
      },
       {
         name: "Campus garten",
        latlngs: redPath,
        color: "orange",
        visible: true
      },
       {
         name: "Waldsee",
        latlngs: yellowPath,
        color: "darkred",
        visible: true
      }
      ],
    };
  },
  methods: {
    onClickMarks(group) {
      this.dataGroups[group]["visible"] = !this.dataGroups[group]["visible"];
    },
    onClickPaths(group) {
      this.paths[group]["visible"] = !this.paths[group]["visible"];
    },
    mapClick(event) {
      /**
       * Get (lat, lng)
       */

      let coordinates = [event.latlng.lat, event.latlng.lng];

      this.colectData.push(coordinates);
      console.log(this.colectData);
    },
    zoomUpdated(zoom){
      if (zoom >= 4) {
          this.zoomBool = false
        } else {
          this.zoomBool = true
        }
    }
  },
};
</script>
<style lang="scss">
.to-low{
  .tooltip-custom {
    display: none;
  }
}
.tooltip-custom {
  background-color: rgba($color: white, $alpha: 0.6) !important;
  border-radius: 0;
  border: none;
  font-weight: bold;
  padding: 3px;
  color: rgb(90, 23, 23);

  &.leaflet-tooltip-bottom {
    &:before {
      border: none;
    }
  }

}
button.button {
  position: absolute;
  bottom: 100px;
  z-index: 999;
  left: 50%;
  transform: translateX(-50%);
}
</style>


