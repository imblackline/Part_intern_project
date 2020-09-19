<template>
  <div class="containers">
    <div class="next">
      <button @click="nextClcik">
        <img src="../assets/arrow(6) white.svg" alt="arrow" />
        <span v-if="this.questionNum < this.num-1">سوال بعدی</span>
        <span v-else>اتمام آزمون</span>
      </button>
    </div>
    <div class="progress">
      <div class="completed" :style="myStyles">
        <div class="circle">
          <div class="tooltip">
            <span>
              <span style="margin-right:5px">{{percent}}%</span> تکمیل شده
            </span>
            <div class="arrow"></div>
            <span>
              <span style="margin-right:5px">{{questionNum+1}}/{{num}}</span>پرسش
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="back">
      <button @click="backClcik">
        <img src="../assets/arrow(6) blue.svg" alt="arrow" />
      </button>
    </div>
  </div>
</template>


<script>
export default {
  name: "ProgressBar",
  props: {
    num: Number,
    questionNum: Number,
  },
  data: function () {
    return {
      // percent: ((this.questionNum + 1) / this.num) * 100,
      width: "0%",
    };
  },
  computed: {
    myStyles() {
      return {
        // height: `${this.height}px`,
        width: `${this.percent}%`,
      };
    },
    percent() {
     return ((this.questionNum + 1) / this.num) * 100;
    }
  },
  mounted() {
    // this.percent = ((this.questionNum + 1) / this.num) * 100;
  },
  methods: {
    nextClcik: function () {
      console.log("num", this.questionNum, "len", this.num);
      this.$emit("next");

      console.log("qnum>>>>>>>>>>>>>>>", this.questionNum);
      // this.percent = ((this.questionNum + 1) / this.num) * 100;
    },
    backClcik: function () {
      this.$emit("back");
      console.log("qnum>>>>>>>>>>>>>>>", this.questionNum);
      // this.percent = ((this.questionNum +1) / this.num) * 100;
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
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.containers {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -6vh);
  width: 93.5vw;
  border-radius: 14px;
  box-shadow: 0 5px 10px 0 #f1f1f2;
  background-color: #fff;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .next {
    button {
      cursor: pointer;
      border-radius: 12px;
      box-shadow: 0 2px 5px 0 rgba(69, 112, 245, 0.6);
      border: 0;
      outline: none;
      background-color: #4570f5;
      height: 100%;
      padding: 18px 34px 20px 72px;
      position: relative;
      text-align: right;
      display: flex;
      align-items: center;
      img {
        width: 22px;
        height: auto;
        position: absolute;
        left: 15%;
        top: 50%;
        transform: translate(0, -45%);
      }
      span {
        font-family: Shabnam;
        font-size: 21px;
        line-height: 30px;
        letter-spacing: -0.16px;
        color: #fff;
      }
    }
  }
  .back {
    button {
      cursor: pointer;
      padding: 34px;
      position: relative;
      border: 0;
      outline: none;
      border-radius: 12px;
      background-color: #e6e9ef;
      img {
        width: 22px;
        height: auto;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -55%);
      }
    }
  }
  .progress {
    width: 71.8vw;
    height: 7px;
    border-radius: 12px;
    background-color: #e6e9ef;
    .completed {
      height: 100%;
      width: 0%;
      float: right;
      border-radius: 12px;
      background-color: #4570f5;
      position: relative;
      .circle {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #4570f5;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(-50%, -50%);
        .tooltip {
          font-family: Shabnam;
          position: absolute;
          width: 290px;
          border-radius: 5px;
          background-color: #2e3133;
          font-size: 19px;
          padding: 10px 18.5px 10px 14.5px;
          left: 50%;
          //   top: -23px;
          top: -30px;
          transform: translate(-50%, -100%);
          span:last-child {
            direction: rtl;
            float: right;
            color: #fcb833;
            // line-height: 2;
            letter-spacing: -0.14px;
            text-align: right;
            span {
              color: #fcb833;
              float: left;
            }
          }
          span:first-child {
            direction: rtl;
            color: #ffffff;
            // line-height: 2;
            letter-spacing: -0.14px;
            text-align: left;
            span {
              float: left;
            }
          }
          .arrow {
            position: absolute;
            display: inline-block;
            width: 14px;
            height: 14px;
            left: 50%;
            bottom: 0;
            transform-origin: center;
            transform: translate(-50%, 50%) rotate(45deg);
            background-color: #2e3133;
          }
        }
      }
    }
  }
}

/********************     Media Queries     *************************/

/*  Big tablets to 1400px  */
@media only screen and (max-width: 1400px) {
  .containers {
    transform: translate(-50%, -4vh);
    .next {
      button {
        padding: 16px 31px 18px 65px;
        img {
          width: 20px;
        }
        span {
          font-size: 20px;
          line-height: 28px;
        }
      }
    }
    .back {
      button {
        padding: 32px;
      }
    }
    .progress {
      width: 68vw;
      .completed {
        width: 29%;
        .circle {
          width: 14px;
          height: 14px;
          .tooltip {
            width: 270px;
            font-size: 17px;
            padding: 8px 18.5px 9px 14.5px;
            .arrow {
              width: 12px;
              height: 12px;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 1200px) {
  .containers {
    transform: translate(-50%, -4vh);
    border-radius: 12px;
    .next {
      button {
        padding: 14px 31px 16px 65px;
        img {
          width: 18px;
          left: 18%;
        }
        span {
          font-size: 18px;
          line-height: 25px;
        }
      }
    }
    .back {
      button {
        padding: 28px;
        img {
          width: 20px;
        }
      }
    }
    .progress {
      width: 65vw;
      height: 6px;
      .completed {
        width: 29%;
        .circle {
          width: 14px;
          height: 14px;
          .tooltip {
            width: 250px;
            font-size: 16px;
            padding: 8px 16.5px 9px 14.5px;
            .arrow {
              width: 12px;
              height: 12px;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 1023px) {
  .containers {
    transform: translate(-50%, -3vh);
    border-radius: 11px;
    .next {
      button {
        border-radius: 11px;
        padding: 12px 25px 15px 52px;
        img {
          width: 17px;
          left: 16%;
        }
        span {
          font-size: 17px;
          line-height: 24px;
        }
      }
    }
    .back {
      button {
        padding: 26px;
        border-radius: 11px;
        img {
          width: 18px;
        }
      }
    }
    .progress {
      width: 60vw;
      border-radius: 11px;
      .completed {
        width: 29%;
        border-radius: 11px;
        .circle {
          width: 12px;
          height: 12px;
          .tooltip {
            width: 235px;
            font-size: 15px;
            padding: 8px 16.5px 9px 14.5px;
            .arrow {
              width: 11px;
              height: 11px;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 1023px) {
  .containers {
    transform: translate(-50%, -2vh);
    width: 94vw;
    border-radius: 10px;
    .next {
      button {
        width: 135px;
        border-radius: 10px;
        padding: 12px 10px 15px 40px;
        img {
          width: 15px;
          left: 14%;
        }
        span {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
    .back {
      button {
        padding: 23px;
        border-radius: 10px;
        img {
          width: 17px;
        }
      }
    }
    .progress {
      width: 60vw;
      border-radius: 10px;
      .completed {
        width: 29%;
        border-radius: 10px;
        .circle {
          .tooltip {
            width: 220px;
            font-size: 14px;
            padding: 8px 16.5px 7px 14.5px;
            top: -20px;
            .arrow {
              width: 10px;
              height: 10px;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .containers {
    padding: 8px;
    .next {
      button {
        width: 130px;
        padding: 12px 10px 15px 40px;
        img {
          width: 14px;
          left: 12%;
        }
        span {
          font-size: 16px;
          line-height: 19px;
        }
      }
    }
    .back {
      button {
        padding: 23px;
        img {
          width: 17px;
        }
      }
    }
    .progress {
      width: 50vw;
      height: 5px;
      .completed {
        width: 29%;
        .circle {
          .tooltip {
            width: 220px;
            font-size: 14px;
            padding: 7px 16.5px 6px 14.5px;
            top: -18px;
            .arrow {
              width: 9px;
              height: 9px;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 480px) {
  .containers {
    // bottom: 0;
    transform: translate(-50%, -1vh);
    width: 95vw;
    height: 100px;
    border-radius: 8px;
    padding: 7px;
    align-items: flex-end;
    .next {
      width: 75%;
      button {
        width: 100%;
        padding: 12px 76px 15px 40px;
        text-align: right;
        direction: rtl;
        img {
          width: 14px;
          left: 35%;
        }
        span {
          font-size: 16px;
          line-height: 19px;
        }
      }
    }
    .back {
      button {
        padding: 23px 40px;
        img {
          width: 17px;
        }
      }
    }
    .progress {
      position: absolute;
      left: 50%;
      top: 23px;
      transform: translate(-50%, -50%);
      width: 95%;
      height: 5px;
      border-radius: 8px;
      .completed {
        width: 29%;
        border-radius: 8px;
        .circle {
          .tooltip {
            width: 204px;
            font-size: 13px;
            padding: 6px 15px 6px 13px;
            top: -16px;
            .arrow {
              width: 8px;
              height: 8px;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 380px) {
  .containers {
    width: 96vw;
    height: 90px;
    padding: 6px;
    .next {
      width: 73%;
      button {
        width: 100%;
        padding: 10px 50px 11px 40px;
        text-align: right;
        direction: rtl;
        img {
          width: 14px;
          left: 30%;
        }
        span {
          font-size: 15px;
          line-height: 17px;
        }
      }
    }
    .back {
      button {
        padding: 19.5px 32px;
        img {
          width: 16px;
        }
      }
    }
    .progress {
      top: 21px;
      .completed {
        width: 29%;
        .circle {
          .tooltip {
            width: 180px;
            font-size: 12px;
            padding: 4px 12px 4px 11px;
            top: -14px;
            .arrow {
              width: 8px;
              height: 8px;
            }
          }
        }
      }
    }
  }
}
</style>