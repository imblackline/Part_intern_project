<template>
  <div class="underInput">
    <div class="remember_div">
      <label for class="rememberlabel">مرا بخاطر داشته باش</label>
      <input type="checkbox" />
    </div>
    <div class="forget_div">
      <a href="#" class="forgetlink">رمز عبور را فراموش کرده اید؟</a>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
// import signinBtn from "@/components/signinBtn.vue";

export default {
  name: "underInput",
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
.underInput {
  width: 100%;
  display: flex;
  margin-bottom: 45px;
  flex-direction: row-reverse;
  justify-content: space-between;
  .forgetlink {
    color:#7f86aa;
    font-family: Shabnam;
  }
  label {
    font-family: Shabnam;
  }
  .rememberlabel {
    color: #7f86aa;
  }
}
@media only screen and (max-width: 1150px) {
  .forgetlink {
    font-size: 14px;
  }
  .rememberlabel {
    font-size: 14px;
  }
}
</style>