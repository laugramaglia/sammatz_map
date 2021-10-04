<template>
<div id="map-wrap" style="height: 100vh">
 <client-only>
   <l-map :zoom=3 :minZoom="3" :maxZoom="5" :center="[55.9464418,8.1277591]">
     <l-tile-layer url="/map/{z}/{x}/{y}.png"></l-tile-layer>
   </l-map>
 </client-only>
</div>
</template>
<script>
export default{

}
</script>
