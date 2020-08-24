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
  width: 300px;
  align-items: center;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  p {
    font-family: Shabnam;
    color: #7f86aa;
    font-size: 16px;
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
      bottom: 20px;
      pointer-events: none;
      left: 15px;
    }
  }
}
</style>
