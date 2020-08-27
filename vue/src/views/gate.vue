<template>
  <div class="gate">
    <div class="up_div">
      <img src="../assets/logo.svg" alt />
    </div>
    <div class="down_div">
      <div class="left_card">
        <gatepic />
      </div>
      <div class="right_card">
        <router-view />
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import gatepic from "@/components/gatepic.vue";

export default {
  name: "gate",
  components: {
    gatepic,
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "Shabnam-bold";
  src: url("../assets/Shabnam-Bold.woff") format("woff"),
    url("../assets/Shabnam-Bold.eot") format("eot"),
    url("../assets/Shabnam-Bold.ttf") format("ttf");
  font-weight: normal;
  font-style: normal;
}
.gate {
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 65px;
  align-items: center;
  .up_div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 44px;
    img {
      width: 133px;
      margin-right: 10.9vw;
    }
  }
  .down_div {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
    .right_card {
      width: 41.6%;
      display: flex;
      justify-content: flex-end;
    }
    .left_card {
      width: 47%;
      height: 100%;
      display: flex;
      position: relative;
      justify-content: flex-end;
      align-items: center;
    }
  }
}
</style>