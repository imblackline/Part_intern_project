<template>
  <div class="HeaderListpage">
    <div class="img_div">
      <img src="../assets/logo.png" alt />
    </div>
    <p>{{msg}}</p>
    <welcomeuser class="welcome_div" name="امیرحسین یعقوب نژاد" />
  </div>
</template>

<script>
import welcomeuser from "@/components/welcomeuser.vue";

export default {
  name: "HeaderListpage",
  props: {
    msg: String,
  },
  components: {
    welcomeuser,
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "Shabnam";
  src: url("../assets/Shabnam.woff") format("woff"),
    url("../assets/Shabnam.eot") format("eot"),
    url("../assets/Shabnam.ttf") format("ttf");
  font-weight: normal;
  font-style: normal;
}
.HeaderListpage {
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  .img_div {
    height: 100%;
    margin-right: 61px;
    img {
      cursor: pointer;
      height: 100%;
    }
  }
  .welcome_div {
    margin-left: 61px;
  }
  p {
    position: absolute;
    left: 50%;
    font-size: 23.5px;
    font-family: Shabnam;
    transform: translate(-50%, 0);
    color: #4570f5;
  }
}
</style>