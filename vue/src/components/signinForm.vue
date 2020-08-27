<template>
  <form class="signin_form" action>
    <div class="input_div"></div>
    <underInput />
    <signinBtn />
  </form>
</template>


<script>
// @ is an alias to /src
import signinBtn from "@/components/signinBtn.vue";
import underInput from "@/components/underInput.vue";

export default {
  name: "signin",
  components: {
    signinBtn,
    underInput,
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
@font-face {
  font-family: "Shabnam";
  src: url("../assets/Shabnam.woff") format("woff"),
    url("../assets/Shabnam.eot") format("eot"),
    url("../assets/Shabnam.ttf") format("ttf");
  font-weight: normal;
  font-style: normal;
}
</style>