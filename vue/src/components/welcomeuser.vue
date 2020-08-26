<template>
  <div class="welcomeuser">
    <img id="avatar" src="../assets/avatar.png" alt="avatar">
    <p><span>{{name}}</span>، خوش آمدید</p>
    <img id="arrow" src="../assets/arrow.png" alt="arrow">
  </div>
</template>

<script>
export default {
  name: "welcomeuser",
  props: {
    name: String,
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family:"Shabnam";
  src:url("../assets/Shabnam.woff") format("woff"),
  url("../assets/Shabnam.eot") format("eot"),
  url("../assets/Shabnam.ttf") format("ttf");
  font-weight:normal; 
  font-style:normal;
}
// @font-face {
//   font-family:"Shabnam-bold";
//   src:url("../assets/Shabnam-Bold.woff") format("woff"),
//   url("../assets/Shabnam-Bold.eot") format("eot"),
//   url("../assets/Shabnam-Bold.ttf") format("ttf");
//   font-weight:normal; 
//   font-style:normal;
// }
.welcomeuser {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    // width: auto;
    // max-width: 25vw;
    overflow: hidden;
    min-width: 14vw;
    height: 100%;
    #avatar {
        width: 35px;
        height: 35px;
    }
    #arrow {
        height: 9.5px;
        margin-top: 4px;
        cursor: pointer;
    }
    p {
        font-size: 16px;
        margin-right: 15px;
        margin-left: 10px;
        font-family: Shabnam;
        text-align: center;
        color: #4b5a9f;
    }
}


/*  Small tablets to big tablets: from 768 to 1023px  */
  @media only screen and (max-width: 1023px) {
    .welcomeuser {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
        // width: auto;
        // max-width: 25vw;
        overflow: hidden;
        min-width: 14vw;
        height: 100%;
        #avatar {
            width: 32px;
            height: 32px;
        }
        #arrow {
            height: 7px;
            margin-top: 4px;
            cursor: pointer;
        }
        p {
            font-size: 14px;
            margin-right: 8px;
            margin-left: 8px;
        }
    }
  }

  /*  Small phones to small tablets: from 481px to 767px  */
  @media only screen and (max-width: 767px) {
    
  }

  /*  Small phones: from 350 to 480px  */
  @media only screen and (max-width: 480px) {
    
  }

  @media only screen and (max-width: 349px) {
    
  }
</style>