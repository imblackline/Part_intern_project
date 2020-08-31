<template>
    <div class="container">
        <div class="title">
            <p>به نظر شما گسترش هنر در جامعه بر کدام‌یک از موارد زیر می‌تواند تاثیر مثبتی داشته باشد؟</p>
        </div>
        <div class="description">
            <p>لطفا یک گزینه را انتخاب کنید</p>
        </div>
        <div class="answer">
            <div class="row">
                <div class="col"></div>
                <div class="col"></div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col"></div>
            </div>
        </div>
        
    </div>
</template>


<script>


export default {
    name: "choice"
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
        }
        .description {
            color: #7f86aa;
            text-align: center;
            margin-top: 21px;
            letter-spacing: -0.16px;
        }
        .answer {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .row {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                height: 50%;
                .col {
                    width: 50%;
                    background-color: chocolate;
                }
            }
        }
    }
</style>