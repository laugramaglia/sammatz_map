<template>
    <div class="filter-bar">
          <a-row type="flex" :gutter="16">
            <a-col >
              <a href="#"><div class="filtered-icons"></div></a>
            </a-col>
            <a-col >
              <div class="filtered-icons"></div>
            </a-col>
            <a-col >
              <div class="filtered-icons"></div>
            </a-col>
            <a-col >
              <div class="filtered-icons"></div>
            </a-col>
            <a-col >
              <div class="filtered-icons"></div>
            </a-col>
            <a-col >
              <div class="filtered-icons"></div>
            </a-col>
          </a-row>
        </div>
</template>
<script>
export default{}
</script>
<style lang="scss">
.filter-bar{
  position: absolute;
  bottom: 20px;
  padding: 10px 16px;
  left: 50%;
  opacity: .7;
  border-radius: 20px;
  background-color: white;
  transform: translateX(-50%);
  z-index: 999;
  .filtered-icons{
    opacity: 1;
    height: 40px;
    width: 40px;
    background-color: red;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>
