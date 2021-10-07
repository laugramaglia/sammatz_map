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
        :class="{ 'to-low': zoomBool }"
        :worldCopyJump="true"
      >
        <l-tile-layer url="/map/{z}/{x}/{y}.png" :noWrap="false" ></l-tile-layer>
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
              :options="{
                permanent: true,
                className: 'tooltip-custom',
                offset: [-4, -10],
                direction: 'bottom',
              }"
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
          :smoothFactor="0.1"
          :opacity="0.7"
        ></l-polyline>
        <!-- Poligon Parking shapes -->
        <l-polygon
          v-for="(poligons, index) in parkingPoligon"
          :key="index"
          :lat-lngs="poligons.latlngs"
          :color="poligons.color"
          :visible="poligons.visible"
        ></l-polygon>
      </l-map>
    </client-only>
    <!-- bottom right menu -->
    <Menu
      @onTapMark="onClickMarks"
      @onTapPath="onClickPaths"
      @onTapParking="onClickParkings"
      :groupsFilter="dataGroups"
      :routeFilters="paths"
      :parkingFilters="parkingPoligon"
    />
  </div>
</template>
<script>
import dataGroups from "static/data/marks";
import paths from "static/data/path.js";
import parkingPoligon from "static/data/poligonSetions.js";

export default {
  data() {
    return {
      colectData: [], // helper
      zoomBool: false,
      dataGroups,
      paths,
      parkingPoligon,
    };
  },
  methods: {
    onClickMarks(group) {
      this.dataGroups[group]["visible"] = !this.dataGroups[group]["visible"];
    },
    onClickPaths(group) {
      this.paths[group]["visible"] = !this.paths[group]["visible"];
    },
    onClickParkings(group) {
      this.parkingPoligon[group]["visible"] = !this.parkingPoligon[group]["visible"];
    },
    mapClick(event) {
      /**
       * Get (lat, lng)
       */

      let coordinates = [event.latlng.lat, event.latlng.lng];

      // this.colectData.push(coordinates);
      console.log(coordinates);
    },
    zoomUpdated(zoom) {
      if (zoom >= 4) {
        this.zoomBool = false;
      } else {
        this.zoomBool = true;
      }
    },
  },
  mounted(){
    console.log(this.parkingPoligon)
  }
};
</script>
<style lang="scss">
.to-low {
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


