<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">List</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
<style lang="scss">
@font-face {
  font-family: "Shabnam-bold";
  src: url("./assets/Shabnam-Bold.woff") format("woff"),
    url("./assets/Shabnam-Bold.eot") format("eot"),
    url("./assets/Shabnam-Bold.ttf") format("ttf");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Shabnam";
  src: url("./assets/Shabnam.woff") format("woff"),
    url("./assets/Shabnam.eot") format("eot"),
    url("./assets/Shabnam.ttf") format("ttf");
  font-weight: normal;
  font-style: normal;
}
</style>