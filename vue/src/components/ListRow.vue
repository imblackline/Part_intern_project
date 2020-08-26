<template>
  <div class="ListRow">
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
        <span v-if="state =='seen'" :class="{seen: state =='seen'}">پاسخ داده شده</span>
        <span v-else>پاسخ داده نشده</span>
      </p>
    </div>
    
    <div class="btn_div">
        <img :class="{disable_img: state =='seen'}" src="../assets/arrow(6)@2x.png" alt />
        <button :class="{disable_btn: state =='seen'}">شروع</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListRow",
  props: {
    id: Number,
    title: String,
    v_num: Number,
    state: String,
  },
  methods:{
    seen1: function () {
      if (this.id==3) {
        this.state = "seen"
      }
    }
  },
  created() {
    this.seen1(this.id);
  }
  
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
.seen {
  color: #05d667;
}

.ListRow {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 24.5px 0;
  margin-bottom: 26px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 10px 0 #f1f1f2;
  position: relative;
  .row_title {
    font-family: Shabnam;
    font-size: 18px;
    // width: 350px;
    margin-right: 45.5px;
    text-align: right;
  }
  .row_detail {
    position: absolute;
    display: flex;
    width: 20vw;
    margin-left: 15.7vw;
    align-items: center;
    justify-content: space-between;
    font-family: Shabnam;
    flex-direction: row-reverse;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    color: #7f86aa;
  }
  .btn_div {
      width: 167px;
      margin-left: 22px;
      position: relative;
      button {
        outline: none;
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
        padding: 20px 0 20px 45px;
      }
      .disable_btn {
        background-color: #e6e6e6;
        box-shadow: none;
        color: #b9b9b9;
        cursor: not-allowed;
      }
      img {
        position: absolute;
        top: 50%;
        width: 22px;
        left: 36px;
        pointer-events: none;
        transform: translate(0, -50%);
        filter: contrast(500%);
      }
      .disable_img{
          filter: none;
      }
    }
}



/********************     Media Queries     *************************/

  /*  Big tablets to 1400px  */
  @media only screen and (max-width: 1400px) {
    .ListRow {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 23px 0;
      margin-bottom: 24px;
      border-radius: 15px;
      box-shadow: 0 5px 10px 0 #f1f1f2;
      position: relative;
      .row_title {
        font-size: 18px;
        // width: 350px;
        margin-right: 35px;
        text-align: right;
      }
      .row_detail {
        position: absolute;
        display: flex;
        width: 24vw;
        margin-left: 240px;
        align-items: center;
        justify-content: space-between;
        font-family: Shabnam;
        flex-direction: row-reverse;
        top: 50%;
        left: 0;
        transform: translate(0, -50%);
      }
      .btn_div {
        width: 157px;
        margin-left: 20px;
        position: relative;
        button {
          outline: none;
          cursor: pointer;
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 10px;
          box-shadow: 0 2px 5px 0 rgba(69, 112, 245, 0.6);
          font-size: 18px;
          padding: 18px 0 18px 45px;
        }
        img {
          position: absolute;
          top: 50%;
          width: 20px;
          left: 33px;
          pointer-events: none;
          transform: translate(0, -50%);
          filter: contrast(500%);
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    .ListRow {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 20px 0;
      margin-bottom: 22px;
      border-radius: 15px;
      box-shadow: 0 5px 10px 0 #f1f1f2;
      position: relative;
      .row_title {
        font-size: 16px;
        font-weight: bold;
        // width: 350px;
        margin-right: 32px;
        text-align: right;
      }
      .row_detail {
        p {
          font-size: 15px;
        }
        position: absolute;
        display: flex;
        width: 27vw;
        margin-left: 18vw;
        align-items: center;
        justify-content: space-between;
        font-family: Shabnam;
        flex-direction: row-reverse;
        top: 50%;
        left: 0;
        transform: translate(0, -50%);
      }
      .btn_div {
        width: 145px;
        margin-left: 18px;
        position: relative;
        button {
          outline: none;
          cursor: pointer;
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 10px;
          box-shadow: 0 2px 5px 0 rgba(69, 112, 245, 0.6);
          font-size: 16px;
          font-weight: bold;
          padding: 17px 0 17px 45px;
        }
        img {
          position: absolute;
          top: 50%;
          width: 18px;
          left: 30px;
          pointer-events: none;
          transform: translate(0, -50%);
          filter: contrast(500%);
        }
      }
    }
  }

  /*  Small tablets to big tablets: from 768 to 1023px  */
  @media only screen and (max-width: 1023px) {
    .ListRow {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 20px 0 45px 0;
      margin-bottom: 38px;
      border-radius: 15px;
      box-shadow: 0 5px 10px 0 #f1f1f2;
      position: relative;
      .row_title {
        font-size: 15px;
        font-weight: bold;
        // width: 350px;
        margin-right: 25px;
        text-align: right;
      }
      .row_detail {
        p {
          font-size: 14px;
        }
        // position: absolute;
        position: relative;
        top: 0;
        left: 0;
        transform: translate(0,0);
        display: flex;
        width: 35vw;
        // margin-left: 18vw;
        margin-left: 25px;
        align-items: center;
        justify-content: space-between;
        flex-direction: row-reverse;
      }
      .btn_div {
        z-index: 5;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 20%);
        width: 100%;
        margin-left: 0;
        // position: relative;
        button {
          outline: none;
          cursor: pointer;
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 10px;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          box-shadow: 0 2px 5px 0 rgba(69, 112, 245, 0.6);
          font-size: 17px;
          font-weight: bold;
          padding: 10px 0 10px 45px;
        }
        img {
          position: absolute;
          top: 50%;
          width: 18px;
          height: auto;
          left: 45%;
          pointer-events: none;
          transform: translate(0, -50%);
          filter: contrast(500%);
        }
      }
    }
  }

  /*  Small phones to small tablets: from 481px to 767px  */
  @media only screen and (max-width: 767px) {
    .ListRow {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 6px 0 45px 0;
      margin-bottom: 38px;
      border-radius: 8px;
      box-shadow: 0 5px 10px 0 #f1f1f2;
      position: relative;
      .row_title {
        font-size: 16px;
        font-weight: bold;
        width: 100%;
        margin-right: 0px;
        text-align: center;
      }
      .row_detail {
        box-sizing: border-box;
        p {
          font-size: 15px;
        }
        // position: absolute;
        width: 100%;
        // margin-left: 18vw;
        margin-left: 0;
        padding: 0 20px;
        align-items: center;
        justify-content: space-around;
        flex-direction: row-reverse;
      }
      .btn_div {
        z-index: 5;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 20%);
        width: 100%;
        margin-left: 0;
        // position: relative;
        button {
          outline: none;
          cursor: pointer;
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 8px;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          box-shadow: 0 2px 5px 0 rgba(69, 112, 245, 0.6);
          font-size: 17px;
          font-weight: bold;
          padding: 10px 0 10px 45px;
        }
        img {
          position: absolute;
          top: 50%;
          width: 18px;
          height: auto;
          left: 45%;
          pointer-events: none;
          transform: translate(0, -50%);
          filter: contrast(500%);
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .ListRow {
      padding: 3px 0 40px 0;
      margin-bottom: 34px;
      border-radius: 6px;
      .row_title {
        font-size: 15px;
        p {
          margin: 14px 0 10px 0;
        }
      }
      .row_detail {
        p {
          font-size: 14px;
          margin: 10px;
        }
        padding: 0 5px;
      }
      .btn_div {
        button {
          border-radius: 6px;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          font-size: 16px;
          font-weight: 100;
          padding: 9px 0 9px 40px;
        }
        img {
          width: 16px;
          left: 44%;
        }
      }
    }
  }

  @media only screen and (max-width: 349px) {
    .ListRow {
      padding: 0px 0 40px 0;
      margin-bottom: 34px;
      border-radius: 4px;
      .row_title {
        font-size: 14px;
        p {
          margin: 14px 0 7px 0;
        }
      }
      .row_detail {
        p {
          font-size: 13px;
          margin: 8px 0;
        }
        padding: 0 2px;
      }
      .btn_div {
        button {
          border-radius: 4px;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          font-size: 15px;
          font-weight: 100;
          padding: 7px 0 7px 35px;
        }
        img {
          width: 14px;
          left: 43%;
        }
      }
    }
  }

</style>