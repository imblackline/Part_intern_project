<template>
  <div class="signin">
    <div class="title">
      <p>{{title}}</p>
    </div>
    <div class="subtitle">
      <p>{{subtitle}}</p>
    </div>
    <signinForm />
  </div>
</template>


<script>
// @ is an alias to /src
import signinForm from "@/components/signinForm.vue";

export default {
  name: "signin",
  components: {
    signinForm,
  },
  data: function () {
    return {
      title: "به سیستم پرسشنامه آنلاین خوش آمدید",
      subtitle: "چنانچه دارای حساب کاربری هستید لطفا وارد شوید",
    };
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
* {
  margin: 0;
}
.signin {
  width: 30.35vw;
  display: flex;
  margin-right: 10.9vw;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  .title {
    font-family: Shabnam-bold;
    font-size: 1.83vw;
    text-align: right;
    color: #2a3774;
  }
  .subtitle {
    font-family: Shabnam;
    font-size: 1.02vw;
    color: #7f86aa;
  }
  .signin_form {
    width: 26.7vw;
    background-color: yellow;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
}
</style>