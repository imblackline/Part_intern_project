<template>
  <div class="Listdiv">
    <div class="top_div">
      <div class="list_num">
        <p>
          <span>{{list.length}}</span> پرسشنامه
        </p>
      </div>
      <ListOrder />
    </div>
    <div v-if="list.length>0" id="list" class="list_container">
      <ListRow
        v-for="li in list"
        :key="li"
        :id="li.id"
        :title="li.name"
        :v_num="li.questions_num"
        state="unseen"
      />
    </div>
    <div v-else class="list_empty">
      <img src="../assets/cancel.png" alt />
      <p>!هم اکنون پرسش نامه‌ای وجود ندارد</p>
    </div>
  </div>
</template>

<script>
import ListOrder from "@/components/ListOrder.vue";
import ListRow from "@/components/ListRow.vue";
import axios from "axios";

export default {
  data: function () {
    return {
      // lists: [
      //   { title: "پرسشنامه فرهنگ و هنر", v_num: "25", state: "seen" },
      //   { title: "پرسشنامه تجربه کاربر", v_num: "23", state: "unseen" },
      //   { title: "پرسشنامه اطلاعات عمومی", v_num: "26", state: "unseen" },
      // ],
      data: null,
      errors: null,
      list: null,
    };
  },
  name: "Listdiv",
  components: {
    ListOrder,
    ListRow,
  },
  mounted() {
    axios
      //   .get(`http://jsonplaceholder.typicode.com/posts`)
      .get("http://localhost:1111/questionnaire")
      .then((response) => {
        // JSON responses are automatically parsed.
        this.data = response.data;

        this.sortQuestionnaire();
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    sortQuestionnaire: function () {
      const sorted = this.data.sort((a, b) => new Date(b.create_date) - new Date(a.create_date));
      this.list = sorted;
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
.Listdiv {
  width: 62%;
  height: 500px;
  .list_empty {
    display: flex;
    margin-top: 116px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 17.5%;
    }
    p {
      margin-top: 82px;
      font-size: 23px;
      font-family: Shabnam;
    }
  }
  .top_div {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  .list_num {
    font-family: Shabnam;
    color: #7f86aa;
  }
  .list_container {
    display: flex;
    margin-top: 26px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
