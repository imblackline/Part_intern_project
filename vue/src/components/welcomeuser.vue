<template>
  <div class="welcomeuser">
    <img id="avatar" src="../assets/avatar.png" alt="">
    <p><span>{{name}}</span>، خوش آمدید</p>
    <img id="arrow" src="../assets/arrow.png" alt="">
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
    width: auto;
    max-width: 25vw;
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
        text-align: right;
        color: #4b5a9f;
    }
}
</style>