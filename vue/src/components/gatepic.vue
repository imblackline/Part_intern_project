<template>
  <div class="gatepic">
    <img src="../assets/34shndow.png" alt />
  </div>
</template>

<script>
export default {
  name: "gatepic",
};
</script>

<style lang="scss" scoped>
.gatepic {
  width: 63%;
  position: relative;
  display: flex;
  align-items: center;
  img {
    width: 100%;
  }
}
.gatepic::before {
  content: "";
  width: 16vw;
  height: 16vw;
  border-radius: 50%;
  position: absolute;
  top: -50px;
  z-index: -1;
  left: -80px;
  border: solid 20.5px #edeef5;
}
.gatepic::after {
  content: "";
  width: 8.2vw;
  height: 8.2vw;
  box-shadow: 10px 10px 26px 0 rgba(0, 0, 0, 0.16);
  background-image: linear-gradient(to bottom, #4570f5 5%, #8fa9f6);
  position: absolute;
  bottom: 10px;
  right: 0;
  border-radius: 50%;
}
@media only screen and (max-width: 1023px) {
  .gatepic {
    width: 80% !important;
    z-index: -10;
    align-items: center;
    img {
      filter: grayscale(0.5) opacity(0) blur(2px);
      width: 100% !important;
    }
  }
}
@media only screen and (max-width: 768px) {
  .gatepic {
    width: 90% !important;
  }
  .gatepic::before {
    content: "";
    border: solid 15px #edeef5;
  }
  .gatepic::after {
    bottom: -20px;
    right: -40px;
  }
}
@media only screen and (max-width: 480px) {
  .gatepic {
    width: 90% !important;
  }
  .gatepic::before {
    content: "";
    border: solid 10px #edeef5;
    top: -100px;
  }
  .gatepic::after {
    bottom: -70px;
    right: -40px;
  }
}
</style>
