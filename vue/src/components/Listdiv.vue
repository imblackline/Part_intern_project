<template>
  <div class="Listdiv">
    <div class="top_div">
      <div class="list_num">
        <p>‏3 پرسشنامه</p>
      </div>
      <ListOrder/>
    </div>
    <div class="list_container">
      <ListRow title="پرسشنامه فرهنگ و هنر" v_num="23" state="unseen"/>
      <ListRow title="پرسشنامه فرهنگ و هنر" v_num="23" state="unseen"/>
      <ListRow title="پرسشنامه فرهنگ و هنر" v_num="23" state="unseen"/>
    </div>
  </div>
</template>

<script>
import ListOrder from "@/components/ListOrder.vue";
import ListRow from "@/components/ListRow.vue";

export default {
  name: "Listdiv",
  components: {
    ListOrder,
    ListRow
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
.Listdiv {
  width: 62%;
  height: 500px;
  .top_div {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  .list_num {
    font-family: Shabnam;
    color: #7f86aa;
  }
  .list_container {
      display: flex;
      margin-top: 26px;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
  }
}
</style>
