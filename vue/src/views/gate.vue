<template>
  <div class="gate">
    <div class="up_div">
      <img @click="$router.replace('/')" src="../assets/logo.svg" alt />
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
  padding-top: 45px;
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
      cursor: pointer;
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
@media only screen and (max-width: 1300px) {
  .right_card {
    width: 50% !important;
  }
  .left_card {
    width: 43% !important;
  }
}
@media only screen and (max-width: 1023px) {
  .down_div {
    justify-content: center !important;
    .right_card {
      justify-content: center !important;
    }
    .left_card {
      position: absolute !important;
      top: -3%;
      right: 19%;
      width: 70% !important;
    }
  }
}
@media only screen and (max-width: 768px) {
  .right_card {
    width: 100% !important;
  }
  .left_card {
    position: absolute !important;
    top: -3%;
    right: 15% !important;
    width: 75% !important;
  }
}
</style>