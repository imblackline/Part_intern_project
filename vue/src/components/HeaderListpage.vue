<template>
  <div class="HeaderListpage">
    <div class="img_div">
      <img @click="gotoList()" src="../assets/logo.svg" alt="quiz logo" />
    </div>
    <welcomeuser class="welcome_div" v-bind:name="username" />
    <p>{{msg}}</p>
  </div>
</template>

<script>
import welcomeuser from "@/components/welcomeuser.vue";

export default {
  name: "HeaderListpage",
  props: {
    msg: String,
    username: String,
  },
  components: {
    welcomeuser,
  },
  data: function () {
    return {
      name: "ناشناس",
    };
  },
  methods: {
    gotoList() {
      // this.msg = "لیست پرسشنامه ها";
      // console.log("mssssssg",this.msg)
      this.$emit("titleChange", { title:"لیست پرسشنامه ها" });
      if (this.$router.currentRoute.fullPath !== "/questionnaire/list")
      this.$router.replace("/questionnaire/list");
    },
    // user: function (user) {
    //   this.username = user["name"];
    // },
  },
  // computed: {
  //   title: function () {
  //     console.log("mssssssage",this.msg)
  //     if (this.$router.currentRoute.fullPath === "/questionnaire/list") {
  //       return "لیست پرسشنامه ها";
  //     }
  //     return this.msg;
  //   },
  // },
  mounted() {
    this.name = this.username;
    // console.log("roooooooooute", this.$router.currentRoute);

    // alert(this.name, "and", this.username)
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
  // height: 50px;
  position: relative;
  width: 100%;
  padding: 0 61px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  .img_div {
    height: 100%;
    display: flex;
    align-items: center;
    img {
      cursor: pointer;
      width: 130px;
    }
  }
  p {
    position: absolute;
    left: 50%;
    font-size: 23.5px;
    font-family: Shabnam;
    transform: translate(-50%, 0);
    color: #4570f5;
    text-align: center;
  }
}

/********************     Media Queries     *************************/

/*  Big tablets to 1400px  */
@media only screen and (max-width: 1400px) {
  .HeaderListpage {
    padding: 0 55px;
    .img_div {
      img {
        width: 130px;
      }
    }
    p {
      font-size: 23.5px;
    }
  }
}

/*  Big tablets: from 1023 to 1199px  */
@media only screen and (max-width: 1199px) {
  .HeaderListpage {
    padding: 0 50px;
    .img_div {
      height: 100%;
      img {
        width: 130px;
      }
    }
    p {
      font-size: 23px;
    }
  }
}

/*  Small tablets to big tablets: from 768 to 1023px  */
@media only screen and (max-width: 1023px) {
  .HeaderListpage {
    padding: 0 25px;
    .img_div {
      height: 100%;
      img {
        width: 110px;
      }
    }
    p {
      font-size: 21px;
    }
  }
}

/*  Small phones to small tablets: from 481px to 767px  */
@media only screen and (max-width: 767px) {
  .HeaderListpage {
    padding: 0 25px;
    .img_div {
      height: 100%;
      img {
        width: 100px;
      }
    }
    p {
      font-size: 20px;
    }
  }
}

/*  Small phones: from 350 to 480px  */
@media only screen and (max-width: 480px) {
  .HeaderListpage {
    padding: 0 30px;
    .img_div {
      height: 100%;
      img {
        width: 70px;
      }
    }
    p {
      margin: 0;
      min-width: 200px;
      font-size: 18px;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
}

@media only screen and (max-width: 349px) {
  .HeaderListpage {
    padding: 0 15px;
    .img_div {
      height: 100%;
      img {
        width: 90px;
      }
    }
    p {
      font-size: 20px;
      bottom: -10px;
    }
  }
}
</style>