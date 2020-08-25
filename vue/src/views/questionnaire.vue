<template>
  <div class="questionnaire">
    <div class="back_circle"></div>
    <HeaderListpage class="header" msg="لیست پرسشنامه ها" />
    <router-view class="subroutes"/>
  </div>
</template>


<script>
// @ is an alias to /src
import HeaderListpage from "@/components/HeaderListpage.vue";

export default {
  name: "questionnaire",
  components: {
    HeaderListpage
  }
};
</script>

<style lang="scss" scoped>
.questionnaire {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    margin-top: 31px;
  }
  .back_circle {
    width: 74vw;
    height: 74vw;
    border-radius: 50%;
    position: absolute;
    top: -33vw;
    left: 13vw;
    z-index: -1;
    opacity: 0.3;
    background-color: #ffffff;
  }
  .subroutes {
    margin-top: 16vh;
  }
}
</style>