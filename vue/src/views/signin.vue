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
      subtitle: "چنانچه حساب کاربری ندارید لطفا ثبت نام کنید",
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
    margin-top: 15px;
    color: #7f86aa;
  }
  .signin_form {
    width: 26.7vw;
    // background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
}
@media only screen and (max-width: 1300px) {
  .signin {
    width: 35vw;
    .title {
      font-size: 2.1vw;
    }
    .subtitle {
      font-size: 1.2vw;
      margin-top: 15px;
      color: #7f86aa;
    }
    .signin_form {
      width: 30.5vw;
    }
  }
}
@media only screen and (max-width: 1150px) {
  .signin {
    width: 35vw;
    .title {
      font-size: 2.1vw;
    }
    .subtitle {
      font-size: 1.2vw;
      margin-top: 15px;
      color: #7f86aa;
    }
    .signin_form {
      width: 32vw;
    }
  }
}
@media only screen and (max-width: 1023px) {
  .signin {
    width: 40vw;
    margin-right: 0vw;
    .title {
      font-size: 2.1vw;
      width: 100%;
      text-align: center;
    }
    .subtitle {
      font-size: 1.2vw;
      text-align: center;
      width: 100%;
    }
    .signin_form {
      width: 40vw;
    }
  }
}
@media only screen and (max-width: 768px) {
  .signin {
    width: 70vw;
    margin-right: 0vw;
    .title {
      font-size: 3.5vw;
    }
    .subtitle {
      font-size: 2vw;
    }
    .signin_form {
      width: 70vw;
    }
  }
}
@media only screen and (max-width: 480px) {
  .signin {
    width: 80vw;
    margin-right: 0vw;
    .title {
      font-size: 4.5vw;
    }
    .subtitle {
      font-size: 3vw;
    }
    .signin_form {
      width: 80vw;
    }
  }
}
</style>