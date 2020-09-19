<template>
  <div @click="showMenu=!showMenu" class="welcomeuser">
    <img id="avatar" src="../assets/avatar.png" alt="avatar" />
    <p>
      <span>{{name}}</span>، خوش آمدید
    </p>
    <img  :class="{'showArrow':showMenu}" id="arrow" src="../assets/arrow.png" alt="arrow" />
    <transition name="fade">
      <div v-if="showMenu" transition="fade" class="menu">
        <img @click="$router.replace('/gate/signin')" src="../assets/exit.png" alt />
        <p @click="$router.replace('/gate/signin')">خروج</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "welcomeuser",
  props: {
    name: String,
  },
  data: function () {
    return {
      showMenu: false,
    };
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
// @font-face {
//   font-family:"Shabnam-bold";
//   src:url("../assets/Shabnam-Bold.woff") format("woff"),
//   url("../assets/Shabnam-Bold.eot") format("eot"),
//   url("../assets/Shabnam-Bold.ttf") format("ttf");
//   font-weight:normal;
//   font-style:normal;
// }
.showArrow{
    transform: rotate(180deg);
  transition: 0.5s;
}
.welcomeuser {
  display: flex;
  cursor: pointer;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  // width: auto;
  // max-width: 25vw;
  overflow: hidden;
  // position: relative;
  min-width: 14vw;
  height: 100%;
  .menu {
    width: 280px;
    height: 70px;
    background-color: white;
    border-radius: 10px;
    top: 70px;
    left: 53px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    z-index: 10;
    box-shadow: 5px 5px 10px 0 rgba(69, 112, 245, 0.2);
    position: absolute;
    img {
      height: 20px;
      cursor: pointer;
    }
    p{
      cursor: pointer;
    }
  }
  .menu::before {
    content: "";
    width: 20px;
    height: 20px;
    z-index: -1;
    position: absolute;
    transform: translate(40%, 50%) rotate(45deg);
    top: -20px;
    left: 0;
    border-radius: 2px;
    background-color: white;
  }
  #avatar {
    width: 35px;
    height: 35px;
  }
  #arrow {
    transition: 0.5s;
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
    direction: rtl;
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