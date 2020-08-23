<template>
  <div class="HeaderListpage">
    <div class="row_title">
      <p>{{title}}</p>
    </div>
    <div class="row_detail">
      <p>
        تعداد پرسش:
        <span>{{v_num}}</span>
      </p>
      <p>
        وضعیت:
        <span>{{state}}</span>
      </p>
      <div class="btn_div">
        <img src="../assets/arrow(6)@2x.png" alt />
        <button>شروع</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderListpage",
  props: {
    title: String,
    v_num: Number,
    state: String,
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
  width: 100%;
  height: 116px;
  margin-bottom: 26px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 10px 0 #f1f1f2;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  .row_title {
      font-family: Shabnam;
      font-size: 18px;
      margin-right: 44.5px;
  }
  .row_detail {
    display: flex;
    height: 100%;
    width: 36vw;
    align-items: center;
    justify-content: space-between;
    font-family: Shabnam;
    flex-direction: row-reverse;
    color: #7f86aa;
    .btn_div {
      width: 163px;
      height: 68px;
      margin-left: 22px;
      position: relative;
      button {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 10px;
        box-shadow: 0 2px 5px 0 rgba(69, 112, 245, 0.6);
        background-color: #4570f5;
        color: white;
        font-family: Shabnam;
        font-size: 18px;
        padding-left: 45px;
      }
      img {
        position: absolute;
        top: 27px;
        width: 22px;
        left: 35px;
        pointer-events: none;
        filter: contrast(500%);
      }
    }
  }
}
</style>