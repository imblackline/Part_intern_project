<template>
  <div class="signinInputs">
    <div class="topdiv">
      <div class="topofinput">
        <label for>نام و نام خانوادگی</label>
        <img class="downimg" src="../assets/user.png" alt />
      </div>
      <input type="email" class="topinput" placeholder="نام و نام خانوادگی خود را وارد کنید" />
    </div>
    <div class="secdiv">
      <div class="topofinput">
        <label for>ایمیل</label>
        <img class="topimg" src="../assets/mail(1).png" alt />
      </div>
      <input type="email" class="topinput" placeholder="ایمیل خود را وارد کنید" />
    </div>
    <div class="thirddiv">
      <div class="topofinput">
        <label for>رمز عبور</label>
        <img class="downimg" src="../assets/lock.png" alt />
      </div>
      <input type="password" class="downinput" placeholder="رمز عبور خود را وارد کنید" />
    </div>
    <div class="downdiv">
      <div class="topofinput">
        <label for>تکرار رمز عبور</label>
        <img class="downimg" src="../assets/lock.png" alt />
      </div>
      <input type="password" class="topinput" placeholder="رمز عبور خود را مجدد وارد کنید" />
    </div>
  </div>
</template>


<script>
// @ is an alias to /src

export default {
  name: "signinInputs",
  components: {},
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "Shabnam-bold";
  src: url("../assets/Shabnam-Bold.woff") format("woff"),
    url("../assets/Shabnam-Bold.eot") format("eot"),
    url("../assets/Shabnam-Bold.ttf") format("ttf");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Shabnam";
  src: url("../assets/Shabnam.woff") format("woff"),
    url("../assets/Shabnam.eot") format("eot"),
    url("../assets/Shabnam.ttf") format("ttf");
  font-weight: normal;
  font-style: normal;
}
.signinInputs {
  margin-top: 48px;
  margin-bottom: 45px;
  width: 100%;
  box-shadow: 10px 8px 6px 0 #edeef5;
  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 15px;
    direction: rtl;
    font-family: Shabnam;
    padding-top: 50px;
    padding-bottom: 22px;
    padding-right: 26px;
    box-sizing: border-box;
  }
  input::placeholder {
    color: #c3c6d5;
  }
  .topofinput {
    width: 100%;
    display: flex;
    position: absolute;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 0 26px;
    top: 20px;
    font-family: Shabnam;
    box-sizing: border-box;
    .topimg {
      height: 13px;
    }
    .downimg {
      height: 17px;
    }
    label {
      color: #7f86aa;
    }
  }
  .topdiv {
    position: relative;
    input {
      border-radius: 15px 15px 0 0;
      border-bottom: 2px solid #f3f4f8;
    }
  }
  .secdiv {
    position: relative;
    input {
      border-bottom: 2px solid #f3f4f8;
    }
  }
  .thirddiv {
    position: relative;
    input {
      border-bottom: 2px solid #f3f4f8;
    }
  }
  .downdiv {
    position: relative;
    input {
      border-radius: 0 0 15px 15px;
    }
  }
}
</style>