<template>
  <div class="container">
    <div class="title">
      <!-- <p>خطوط افقی مناظر طبیعی، احساس آرامش و راحتی را القا میکنند</p> -->
      <p>{{content}}</p>
    </div>
    <div class="description">
      <p>صحیح یا غلط بودن را مشخص کنید</p>
    </div>
    <div class="answer">
      <div class="row">
        <div class="col" :class="{ sel: isSelect[0], unsel:!isSelect[0] }" @click="!seen ? select(0):null">
          <input type="radio" name="q" id="ch1" />
          <label for="ch1">{{a1}}</label>
          <div class="circle">
            <div class="dot"></div>
          </div>
        </div>
        <div class="col" :class="{ sel: isSelect[1], unsel:!isSelect[1] }" @click="!seen ? select(1):null">
          <input type="radio" name="q" id="ch2" />
          <label for="ch2">{{a2}}</label>
          <div class="circle">
            <div class="dot"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "choice2",
  data: function () {
    return {
      isSelect: [false, false],
    };
  },
  props: {
    content: String,
    a1: String,
    a2: String,
    selected: Number,
    seen: Boolean,
  },
  watch: {
    isSelect: function (newselect) {
      this.isSelect = newselect;
      this.$emit("selectlist2", this.isSelect);
    },
  },
  mounted() {
    this.select(this.selected);
  },
  methods: {
    select: function (num) {
      let newList = [];
      newList[num] = true;
      this.isSelect = newList;
      console.log(this.isSelect);
    },
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
@font-face {
  font-family: "Shabnam-FD";
  src: url("../assets/Shabnam-Bold.woff") format("woff"),
    url("../assets/Shabnam-Bold.eot") format("eot"),
    url("../assets/Shabnam-Bold.ttf") format("ttf");
  font-weight: normal;
  font-style: normal;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  font-family: Shabnam;
  .title {
    font-size: 27px;
    letter-spacing: -0.3px;
    text-align: center;
    line-height: 42px;
    color: #2a3774;
    margin: 0 auto;
    p{
      direction: rtl;
    }
  }
  .description {
    color: #7f86aa;
    text-align: center;
    margin-top: 21px;
    letter-spacing: -0.16px;
  }
  .answer {
    width: 1192px;
    margin-top: 75px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 50%;
      width: 100%;
      .col {
        cursor: pointer;
        width: 50%;
        height: 100%;
        border-radius: 10px;
        padding: 25px;
        direction: rtl;
        margin: 10px;
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        justify-content: flex-end;
        input {
          width: 0;
          position: fixed;
          opacity: 0;
          z-index: -10;
        }
        label {
          cursor: pointer;
          margin-right: 20px;
          letter-spacing: -0.16px;
          text-align: right;
          font-weight: 500;
          line-height: 28px;
          font-size: 21px;
        }
        .circle {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          margin: 1px 3px 0 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
        }
      }
      .unsel {
        background-color: #e6e9ef;
        label {
          color: #4b5a9f;
        }
        .circle {
          border: solid 3px #4b5a9f;
        }
        .dot {
          background-color: #e6e9ef;
        }
      }
      .sel {
        background-color: #95d7a4;
        label {
          color: #286d3e;
        }
        .circle {
          border: solid 3px #286d3e;
        }
        .dot {
          background-color: #286d3e;
        }
      }
    }
  }
}

/********************     Media Queries     *************************/

/*  Big tablets to 1400px  */
@media only screen and (max-width: 1400px) {
  .container {
    .title {
      font-size: 26px;
      line-height: 40px;
    }
    .description {
      margin-top: 20px;
    }
    .answer {
      width: 1092px;
      margin-top: 60px;
      .row {
        .col {
          padding: 23px;
          label {
            line-height: 27px;
          }
          .dot {
            width: 14px;
            height: 14px;
          }
        }
      }
    }
  }
}

/* Standard tablets from 1023px to 1200px */
@media only screen and (max-width: 1200px) {
  .container {
    .title {
      font-size: 25px;
      line-height: 35px;
    }
    .description {
      margin-top: 19px;
    }
    .answer {
      width: 92vw;
      margin-top: 55px;
      .row {
        .col {
          padding: 21px;
          margin: 8px;
          label {
            line-height: 26px;
            font-size: 20px;
          }
          .dot {
            width: 14px;
            height: 14px;
          }
        }
      }
    }
  }
}

/*  medium tablets from 768px to 1023px  */
@media only screen and (max-width: 1023px) {
  .container {
    .title {
      font-size: 21px;
      line-height: 32px;
      width: 95vw;
    }
    .description {
      margin-top: 19px;
      font-size: 15px;
    }
    .answer {
      width: 95vw;
      margin-top: 50px;
      .row {
        .col {
          padding: 19px;
          label {
            margin-right: 17px;
            line-height: 24px;
            font-size: 18px;
          }
          .circle {
            width: 22px;
            height: 22px;
          }
          .dot {
            width: 12px;
            height: 12px;
          }
        }
      }
    }
  }
}

/*  Large phones from 480px to 768px  */
@media only screen and (max-width: 768px) {
  .container {
    .title {
      font-size: 20px;
      line-height: 32px;
      width: 90vw;
    }
    .description {
      margin-top: 17px;
      font-size: 14px;
    }
    .answer {
      width: 95vw;
      margin-top: 45px;
      .row {
        .col {
          border-radius: 8px;
          padding: 16px;
          margin: 6px;
          label {
            margin-right: 13px;
            line-height: 22px;
            font-size: 14px;
          }
          .circle {
            width: 20px;
            height: 20px;
            margin: 0;
          }
          .dot {
            width: 10px;
            height: 10px;
          }
        }
      }
    }
  }
}

/* phones from 350px to 480px  */
@media only screen and (max-width: 480px) {
  .container {
    .title {
      font-size: 18px;
      line-height: 29px;
      width: 92vw;
    }
    .description {
      margin-top: 13px;
      font-size: 13px;
    }
    .answer {
      width: 96vw;
      margin-top: 60px;
      .row {
        flex-direction: column;
        .col {
          width: 100%;
          height: 50%;
          border-radius: 6px;
          padding: 12px;
          margin: 5px auto;
          label {
            margin-right: 15px;
          }
          .circle {
            width: 18px;
            height: 18px;
          }
          .dot {
            width: 8px;
            height: 8px;
          }
        }
      }
    }
  }
}

/* Very small phones from 350px */
@media only screen and (max-width: 350px) {
  .container {
    .title {
      font-size: 16px;
      line-height: 25px;
      width: 92vw;
    }
    .description {
      margin-top: 11px;
      font-size: 11px;
    }
    .answer {
      width: 94vw;
      margin-top: 20px;
      .row {
        .col {
          border-radius: 5px;
          padding: 12px 15px;
          margin: 4px auto;
          label {
            margin-right: 12px;
          }
        }
      }
    }
  }
}
</style>