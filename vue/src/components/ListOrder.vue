<template>
  <div class="ListOrder">
    <p>مرتب سازی بر اساس</p>
    <div class="select_div">
      <img class="arrow" src="../assets/arrow.png" alt />
      <select>
        <option value="0">جدید ترین</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListOrder",
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
.ListOrder {
  // width: 300px;
  align-items: center;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  p {
    font-family: Shabnam;
    color: #7f86aa;
    font-size: 16px;
    margin-left: 24px;
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none; /* Remove default arrow */
    width: 142px; /* Add custom arrow */
    height: 49px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    direction: rtl;
    padding-right: 20px;
    font-size: 16px;
    outline: none;
    text-align: right;
    color: #aeaeae;
    font-family: Shabnam;
    background-color: #ffffff;
  }
  select::-ms-expand {
    display: none; /* Hide the default arrow in Internet Explorer 10 and Internet Explorer 11 */
  }
  .select_div {
    position: relative;
    .arrow {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      pointer-events: none;
      left: 15px;
    }
  }
}




  /*  Small phones to small tablets: from 481px to 767px  */
  @media only screen and (max-width: 767px) {
    .ListOrder {
      p {
        font-size: 15px;
        margin-left: 12px;
      }
      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none; /* Remove default arrow */
        width: 115px; /* Add custom arrow */
        height: 40px;
        border: none;
        cursor: pointer;
        border-radius: 6px;
        direction: rtl;
        padding-right: 20px;
        // padding: 0;
        font-size: 15px;
        outline: none;
        text-align: center;
      }
      .select_div {
        position: relative;
        .arrow {
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          pointer-events: none;
          left: 10px;
        }
      }
    }
  }

  /*  Small phones: from 350 to 480px  */
  @media only screen and (max-width: 480px) {
    .ListOrder {
      p {
        display: none;
      }
      select {
        width: 100%; /* Add custom arrow */
        // height: 30px;
        direction: rtl;
        // padding-right: 20px;
        padding: 10px 20px;
        font-size: 14px;
        text-align: center;
        direction: rtl;
        border-radius: 4px;
      }
      .select_div {
        position: relative;
        width: 100%;
        .arrow {
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          pointer-events: none;
          left: 8px;
          width: 10px;
        }
      }
    }
  }

  /* Very small phones: less than 350px */
  @media only screen and (max-width: 349px) {
    .ListOrder {
      select {
        width: 100%; /* Add custom arrow */
        
        padding-right: 20px;
        font-size: 13px;
      }
    }
  }
</style>
