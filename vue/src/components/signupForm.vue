<template>
  <form class="signin_form" action>
    <div class="input_div"></div>
    <signupInputs />
    <underInput />
    <signupBtn />
  </form>
</template>


<script>
// @ is an alias to /src
import signupBtn from "@/components/signupBtn.vue";
import underInput from "@/components/underInput.vue";
import signupInputs from "@/components/signupInputs.vue";

export default {
  name: "signin",
  components: {
    signupBtn,
    underInput,
    signupInputs,
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