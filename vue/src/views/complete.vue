<template>
    <div class="container">
        <div class="photo">
            <img src="../assets/Group 34.svg" alt="completed"/>
        </div>
        <div class="text">
            <p>شما با <span>موفقیت</span> پرسشنامه را به اتمام رساندید</p>
        </div>
        <div class="list-btn">
            <button @click="goToList"><img src="../assets/arrow(6) white.svg" alt=""><span>مشاهده پرسشنامه ها</span></button>
        </div>
    </div>
</template>


<script>


export default {
    name: "Complete",
    methods: {
        goToList: function(){
            this.$emit("title", { title: "لیست پرسشنامه ها" });
            this.$router.replace('/questionnaire/list');
        }
    }
}
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
    font-family: Shabnam;
}
.container {
    .photo {
        text-align: center;
        img {
            width: 430px;
        }
    }
    .text {
        margin-top: 60px;
        font-size: 28px;
        text-align: center;
        line-height: 39px;
        letter-spacing: -0.2px;
        color: #2a3774;
        span {
            color: #05d667;
        }
    }
    .list-btn {
        margin-top: 50px;
        display: flex;
        justify-content: center;
        button {
            cursor: pointer;
            border-radius: 10px;
            width: 294px;
            box-shadow: 0 2px 5px 0 rgba(69, 112, 245, 0.6);
            background-color: #4570f5;
            border: 0;
            outline: none;
            color: #fff;
            padding: 18.2px 0 21px 0;
            text-align: right;
            position: relative;
            img {
                width: 22.5px;
                height: auto;
                position: absolute;
                left: 35px;
                top: 50%;
                transform: translate(0, -45%);
            }
            span {
                font-size: 22.5px;
                line-height: 31px;
                letter-spacing: -0.16px;
                margin-right: 28px;
            }
        }
    }
    
}

/********************     Media Queries     *************************/

  /*  Big tablets to 1200px  */
  @media only screen and (max-width: 1400px) {
    .container {
        .photo {
            img {
                width: 320px;
            }
        }
        .text {
            margin-top: 45px;
            font-size: 24px;
            line-height: 34px;
        }
        .list-btn {
            margin-top: 45px;
            button {
                // border-radius: 10px;
                width: 260px;
                padding: 16px 0 17px 0;
                img {
                    width: 20px;
                    left: 32px;
                }
                span {
                    font-size: 20px;
                    line-height: 25px;
                    margin-right: 25px;
                }
            }
        }
    }
  }

  @media only screen and (max-width: 1200px) {
      .container {
        .photo {
            img {
                width: 300px;
            }
        }
        .text {
            margin-top: 40px;
            font-size: 23px;
            line-height: 30px;
        }
        .list-btn {
            margin-top: 40px;
            button {
                img {
                    width: 19px;
                    left: 34px;
                }
                span {
                    margin-right: 27px;
                }
            }
        }
      }
  }

  /*  Small tablets to big tablets: from 768 to 1023px  */
  @media only screen and (max-width: 1023px) {
    .container {
        .photo {
            img {
                width: 280px;
            }
        }
        .text {
            margin-top: 35px;
            font-size: 22px;
            line-height: 27px;
        }
        .list-btn {
            margin-top: 35px;
            button {
                border-radius: 8px;
                width: 210px;
                padding: 15px 0 16.4px 0;
                img {
                    width: 16px;
                    left: 17px;
                }
                span {
                    font-size: 17px;
                    line-height: 23px;
                    margin-right: 20px;
                }
            }
        }
    }
  }

  /*  Small phones to small tablets: from 481px to 767px  */
  @media only screen and (max-width: 767px) {
    .container {
        .photo {
            img {
                width: 200px;
            }
        }
        .text {
            margin-top: 55px;
            font-size: 18px;
            line-height: 22px;
        }
        .list-btn {
            margin-top: 55px;
            button {
                width: 180px;
                padding: 13px 0 14px 0;
                img {
                    width: 14px;
                    left: 17px;
                }
                span {
                    font-size: 15px;
                    line-height: 20px;
                    margin-right: 16px;
                }
            }
        }
    }
  }

  @media only screen and (max-width: 480px) {
    .container {
        .photo {
            img {
                width: 170px;
            }
        }
        .text {
            margin-top: 45px;
            font-size: 16px;
            line-height: 20px;
        }
        .list-btn {
            margin-top: 45px;
            button {
                // border-radius: 8px;
                width: 160px;
                padding: 10px 0 10.5px 0;
                img {
                    width: 12px;
                    left: 15px;
                }
                span {
                    font-size: 13px;
                    line-height: 16px;
                    margin-right: 16px;
                }
            }
        }
    }
  }

  @media only screen and (max-width: 349px) {
    .container {
        .photo {
            img {
                width: 130px;
            }
        }
        .text {
            margin-top: 40px;
            font-size: 14px;
            line-height: 16px;
        }
        .list-btn {
            margin-top: 40px;
            button {
                border-radius: 6px;
                width: 150px;
                padding: 8px 0 8px 0;
                img {
                    width: 10px;
                    left: 16px;
                }
                span {
                    font-size: 12px;
                    line-height: 14px;
                    margin-right: 17px;
                }
            }
        }
    }
  }


</style>