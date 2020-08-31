<template>
  <div class="buttons">
    <button class="blue_btn shabnam" @click="$router.replace('/questionnaire/list');">ثبت نام</button>
    <button class="gray_btn shabnam" @click="$router.push('signin');">ورود</button>
  </div>
</template>


<script>
// @ is an alias to /src
// import signinBtn from "@/components/signinBtn.vue";

export default {
  name: "signinBtn",
  components: {},
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
@font-face {
  font-family: "Shabnam";
  src: url("../assets/Shabnam.woff") format("woff"),
    url("../assets/Shabnam.eot") format("eot"),
    url("../assets/Shabnam.ttf") format("ttf");
  font-weight: normal;
  font-style: normal;
}
.buttons {
  width: 100%;
  height: 53px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  button {
    width: 49%;
    height: 100%;
    outline: none;
    border-radius: 8px;
    font-family: Shabnam;
    font-size: 18px;
  }
  .blue_btn {
    border: none;
    color: white;
    font-size: 18px;
    box-shadow: 0 3px 20px 0 rgba(69, 112, 245, 0.3);
    background-color: #4570f5;
    cursor: pointer;
  }
  .gray_btn {
    color: #929db3;
    font-size: 18px;
    cursor: pointer;
    background-color: #f3f4f800;
    border-radius: 5px;
    border: solid 1px #d1d1d2;
  }
}
</style>