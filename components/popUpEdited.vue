<template>
    <l-popup class="pop-up-grid">
      <a-row type="flex">
        <a-col :span="8">
          <div class="img-placeholder">
            <img :src="img" alt="" />
          </div>
        </a-col>
        <a-col :span="16">
          <div class="text-content">
            <h2>{{ title }}</h2>
            <p>
              {{ description }} <strong><a :href='"https://michaelshof-sammatz.de/blog/"+link' target="_blank" >Read more...</a></strong>
            </p>

          </div>
        </a-col>
      </a-row>
    </l-popup>
</template>
<script>
export default {
  name:'PopUpEdited',
  props: ["title", "description", "img", "link"],
};
</script>
<style lang="scss">
.pop-up-grid {
  width: 280px;
  .img-placeholder {
    background-color: red;
    height: 100%;
    margin-right: 12px;
  }
  .text-content {
    p {
      margin: 4px 0;
    }
  }
}
.leaflet-popup.leaflet-zoom-animated {
  .leaflet-popup-content-wrapper {
    border-radius: 0 !important;
  }
}
</style>
