<template>
  <div id="map-wrap" style="height: 100vh">
    <client-only>
      <l-map :zoom="3" :minZoom="3" :maxZoom="4" maxBoundsViscosity="1.0">
        <l-tile-layer url="/map/{z}/{x}/{y}.png" noWrap="true"></l-tile-layer>
        <PopUpEdited
          title="Title"
          description="description lorem ipsum text long no sense text just to fill the
              box."
          lat="0"
          lng="0"
        />
      </l-map>
    </client-only>
  </div>
</template>
<script>
export default {};
</script>


