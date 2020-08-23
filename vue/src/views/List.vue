<template>
  <div class="list">
    <div class="back_circle"></div>
    <HeaderListpage class="header" msg="لیست پرسشنامه ها" />
  </div>
</template>


<script>
// @ is an alias to /src
import HeaderListpage from "@/components/HeaderListpage.vue";

export default {
  name: "List",
  components: {
    HeaderListpage,
  },
};
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  height: 100%;
  .header {
    margin-top: 31px;
  }
  .back_circle {
    width: 74vw;
    height: 74vw;
    border-radius: 50%;
    position: absolute;
    top: -37vw;
    left: 13vw;
    z-index: -1;
    opacity: 0.3;
    background-color: #ffffff;
  }
}
</style>