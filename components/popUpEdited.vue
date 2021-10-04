<template>
  <l-marker :lat-lng="[lat, lng]">
    <l-popup class="pop-up-grid">
      <a-row type="flex">
        <a-col :span="8">
          <div class="img-placeholder">
            <img :src="img" alt="" />
          </div>
        </a-col>
        <a-col :span="16">
          <div class="text-content">
            <h2>{{title}}</h2>
            <p>
              {{description}}
            </p>
          </div>
        </a-col>
      </a-row>
    </l-popup>
  </l-marker>
</template>
<script>
export default {
    props:[
        "title",
        "description",
        "img",
        "lat",
        "lng"
    ],
};
</script>
<style lang="scss">
.pop-up-grid {
    width: 280px;
  .img-placeholder {
      background-color: red;
      height: 100%;
      border-radius: 8px;
      margin-right: 12px;
  }
  .text-content{
      p{
          margin: 4px 0;
      }
  }
}
</style>
