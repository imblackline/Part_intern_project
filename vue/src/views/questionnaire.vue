<template>
  <div class="questionnaire">
    <div class="back_circle"></div>
    <HeaderListpage class="header" msg="لیست پرسشنامه ها" />
    <router-view class="subroutes"/>
  </div>
</template>


<script>
// @ is an alias to /src
import HeaderListpage from "@/components/HeaderListpage.vue";

export default {
  name: "questionnaire",
  components: {
    HeaderListpage
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.questionnaire {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    margin-top: 31px;
  }
  .back_circle {
    width: 74vw;
    height: 74vw;
    border-radius: 50%;
    position: absolute;
    top: -33vw;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: -1;
    opacity: 0.3;
    background-color: #fff;
  }
  .subroutes {
    margin-top: 11vh;
  }

  /********************     Media Queries     *************************/

  /*  Big tablets to 1200px  */
  @media only screen and (max-width: 1400px) {
    .header {
      margin-top: 27px;
    }
    .back_circle {
      width: 120vw;
      height: 120vw;
      top: -60vw;
    }
  }
  /*  Small tablets to big tablets: from 768 to 1023px  */
  @media only screen and (max-width: 1023px) {
    .header {
      margin-top: 25px;
    }
    .back_circle {
      width: 130vw;
      height: 130vw;
    }
    .subroutes {
      margin-top: 13vh;
    }
  }

  /*  Small phones to small tablets: from 481px to 767px  */
  @media only screen and (max-width: 767px) {
    .header {
      margin-top: 23px;
    }
    .back_circle {
      display: none;
    }
    .subroutes {
      margin-top: 8vh;
    }
  }

  @media only screen and (max-width: 480px) {
    .header {
      margin-top: 20px;
    }
    .subroutes {
      margin-top: 7vh;
    }
  }

  @media only screen and (max-width: 349px) {
    .header {
      margin-top: 16px;
    }
    .subroutes {
      margin-top: 6vh;
    }
  }
}
</style>