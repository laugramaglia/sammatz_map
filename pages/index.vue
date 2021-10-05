<template>
  <div id="map-wrap" style="height: 100vh">
    <client-only>
      <l-map :zoom="3" :minZoom="2" :maxZoom="4" :maxBoundsViscosity="1.0">
        <l-tile-layer url="/map/{z}/{x}/{y}.png" :noWrap="true"></l-tile-layer>
        <l-marker
          v-for="mark in points"
          :lat-lng="mark"
          :key="mark.name"
          :visible="groups[0].visible"
        >
          <PopUpEdited 
          :title="mark.name" 
          :description="mark.description"
          />
        </l-marker>
      </l-map>
    </client-only>
    <FilterBar @onTap="onClickBlue" :groupsFilter="groups" />
  </div>
</template>
<script>
import GroupClass from "../static/classes/groupsClass";
export default {
  data() {
    return {
      groups: [
        new GroupClass("Rosengarten", "blue"),
        new GroupClass("Waldsee", "red"),
        new GroupClass("Arena", "black"),
        new GroupClass("Staudenplateau", "green"),
        new GroupClass("Campus-Garten", "green"),
        new GroupClass("Dahliengarten", "black"),
        new GroupClass("Zentrale Gärten", "blue"),
        new GroupClass("Waldgärtlein", "red"),
      ],
      points: [
        {
          name: "Sol",
          description: "wonw iueb eifj uniuw  ijw efw fwekj cwerf ",
          lng: 75.2,
          lat: 45.0,
        },
        {
          name: "Mizar",
          description: "wonw iueb eifj uniuw  ijw efw fwekj cwerf ",
          lng: 41.6,
          lat: 30.1,
        },
        {
          name: "Krueger-Z",
          description: "wonw iueb eifj uniuw  ijw efw fwekj cwerf ",
          lng: 13.4,
          lat: 56.5,
        },
        {
          name: "Deneb",
          description: "wonw iueb eifj uniuw  ijw efw fwekj cwerf ",
          lng: 18.7,
          lat: 8.3,
        },
      ],
    };
  },
  methods: {
    onClickBlue(group) {
      this.groups[group]["visible"] = !this.groups[group]["visible"];
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
