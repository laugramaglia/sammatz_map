<template>
  <client-only>

    <div class="box-context">
      
        <l-map
        ref="map"
        style="height: 100%"
        :zoom="zoomEdited"
        :minZoom="minZoom"
        :maxZoom="maxZoom"
        :maxBounds="[[79.19388674935426, -135.08171081542972],[-79.15933088881371, 134.91691589355472]]"
        :maxBoundsViscosity=".4"
        @click="mapClick"
        @update:zoom="zoomUpdated"
        :class="{ 'to-low': zoomBool }"
        :options="{ zoomControl: false }"
      >
        <l-tile-layer url="/map/{z}/{x}/{y}.png" :noWrap="true"></l-tile-layer>

        <l-control position="topright">
          <Menu
            @onTapMark="onClickMenu"
            @updateZoom="zooomUpdated"
            :groupsFilter="dataGroups"
            :routeFilters="paths"
            :parkingFilters="parkingPoligon"
          />
        </l-control>

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

        <!-- wc toilets marks -->
        <div v-for="wcItem in wc"
          :key="wcItem.router">
        <l-marker
            v-for="mark in wcItem.markers"
            :lat-lng="[mark.lat, mark.lng]"
            :key="mark.name"
            :visible="wcItem.visible"
          >
          <!-- custom icon -->
            <l-icon
              :icon-size="[22, 37]"
              :icon-anchor="[16, 37]"
              :icon-url="'/markers/' + wcItem.color + '.svg'"
            >
            </l-icon></l-marker>
          </div>
      </l-map>
    
    </div>

  </client-only>
</template>
<script>
import dataGroups from "static/data/marks";
import paths from "static/data/path.js";
import parkingPoligon from "static/data/poligonSetions.js";
import wc from 'static/data/wc.js'

export default {
  data() {
    return {
      minZoom: 4,
      maxZoom: 7,
      zoomEdited: 4,
      zoomBool: false,
      dataGroups,
      paths,
      parkingPoligon,
      wc
    };
  },
  methods: {
    onClickMenu({ itemEmited, groupEmited }) {
      if (groupEmited === "mark")
        this.dataGroups[itemEmited]["visible"] =
          !this.dataGroups[itemEmited]["visible"];

      if (groupEmited === "path")
        this.paths[itemEmited]["visible"] = !this.paths[itemEmited]["visible"];

      if (groupEmited === "parking")
        this.parkingPoligon[itemEmited]["visible"] =
          !this.parkingPoligon[itemEmited]["visible"];
    },
    zooomUpdated(value) {
      this.$refs.map.setZoom(this.zoomEdited + value)
      if (this.zoomEdited <= this.minZoom) this.zoomEdited = this.minZoom;
      if (this.zoomEdited >= this.maxZoom) this.zoomEdited = this.maxZoom;
    },
    /**
     * Get (lat, lng)
     */
    mapClick(event) {
      let coordinates = [event.latlng.lat, event.latlng.lng];
      console.log(coordinates);
    },
    zoomUpdated(zoom) {
      if (this.zoomEdited != zoom) this.zoomEdited = zoom
      if (zoom >= 4) {
        this.zoomBool = false;
      } else {
        this.zoomBool = true;
      }
    },
  },
};
</script>
<style lang="scss">

.box-context {
  overflow: hidden;
  height: 100vh;
  width: 100vw;


}
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
.leaflet-bottom.leaflet-right {
  display: none !important;
}
</style>


