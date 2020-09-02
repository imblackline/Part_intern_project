<template>
    <div class="container">
        <div class="title">
            <p>در دوران رنسانس رویگرد دنیوی به عالم در کدام سطوح آشکار شد؟</p>
        </div>
        <div class="description">
            <p>پاسخ تشریحی کامل بدهید</p>
        </div>
        <div class="answer">
            <textarea name="t-area" id="t-area" cols="30" rows="10"></textarea>
        </div>
    </div>
</template>

<script>
export default {
    name: "choice3"
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
        }
        .description {
            color: #7f86aa;
            text-align: center;
            margin-top: 21px;
            letter-spacing: -0.16px;
        }
        .answer {
            margin-top: 75px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            textarea {
                outline: none;
                border: none;
                resize: none;
                direction: rtl;
                font-family: Shabnam;
                width: 45vw;
                height: 26.5vh;
                border-radius: 14px;
                background-color: #e6e9ef;
                padding: 29px 25px 9.5px 25px;
                letter-spacing: -0.14px;
                text-align: right;
                color: #747474;
                font-size: 17px;
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
                margin-top: 60px;
                textarea {
                    width: 50vw;
                    height: 26vh;
                    border-radius: 14px;
                    padding: 29px 25px 9.5px 25px;
                    font-size: 17px;
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
                margin-top: 55px;
                textarea {
                    width: 55vw;
                    height: 23vh;
                    border-radius: 14px;
                    padding: 24px 25px 9.5px 25px;
                    font-size: 16px;
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
                margin-top: 50px;
                textarea {
                    width: 65vw;
                    height: 22vh;
                    border-radius: 12px;
                    padding: 24px 25px 9.5px 25px;
                    font-size: 15px;
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
                margin-top: 45px;
                textarea {
                    width: 80vw;
                    height: 20vh;
                    border-radius: 10px;
                    padding: 24px 25px 9.5px 25px;
                    font-size: 14px;
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
                margin-top: 60px;
                textarea {
                    width: 85vw;
                    height: 20vh;
                    border-radius: 10px;
                    padding: 16px 15px 9.5px 15px;
                    font-size: 13px;
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
                margin-top: 20px;
                textarea {
                    width: 90vw;
                    height: 18vh;
                    border-radius: 8px;
                    padding: 16px 15px 9.5px 15px;
                    font-size: 12px;
                }
            }
        }
    }
</style>