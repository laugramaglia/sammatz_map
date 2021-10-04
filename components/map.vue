<template>
  <div id="map-wrap" style="height: 100vh">
    <client-only>
      <l-map :zoom="3" :minZoom="3" :maxZoom="5">
        <l-tile-layer url="/map/{z}/{x}/{y}.png"></l-tile-layer>
         <PopUpEdited title="Title" description="description lorem ipsum text long no sense text just to fill the
              box." lat="0" lng="0" />
        <l-control position="bottomleft">
          <button @click="clickHandler">I am a useless button!</button>
        </l-control>
      </l-map>
    </client-only>
  </div>
</template>
<script>
export default {
  methods: {
    clickHandler() {
      window.alert("and mischievous");
    },
  },
};
</script>

