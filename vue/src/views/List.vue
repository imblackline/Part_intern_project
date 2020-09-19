<template>
  <div class="Listdiv">
    <div class="top_div">
      <div class="list_num">
        <p>
          <span>{{list.length|persianalize}}</span> پرسشنامه
        </p>
      </div>
      <ListOrder />
    </div>
    <div v-if="list.length>0" id="list" class="list_container">
      <ListRow
        v-for="li in showItem"
        :key="li.id"
        :id="li.id"
        :userId="userId"
        :title="li.name"
        :v_num="li.questions_num"
        :state="li.answered"
      />
      <v-app>
        <v-pagination v-model="page" :length="pageNum" :total-visible="5" circle></v-pagination>
      </v-app>
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
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default {
  vuetify: new Vuetify(),
  data: function () {
    return {
      // lists: [
      //   { title: "پرسشنامه فرهنگ و هنر", v_num: "25", state: "seen" },
      //   { title: "پرسشنامه تجربه کاربر", v_num: "23", state: "unseen" },
      //   { title: "پرسشنامه اطلاعات عمومی", v_num: "26", state: "unseen" },
      // ],
      page: 1,
      data: null,
      errors: null,
      list: [],
      showItem: [],
      username: localStorage.getItem("username"),
      userId: localStorage.getItem("userId"),
    };
  },
  name: "list",
  components: {
    ListOrder,
    ListRow,
  },
  filters: {
    persianalize: function (value) {
      if (!value) return "";
      let ara = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      let ara2 = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
      for (var i = 0; i < ara.length; i++) {
        value = value.toString().replace(ara[i], ara2[i]);
      }
      return value;
    },
  },
  watch: {
    page: function (val) {
      this.showItem = [];
      for (let i = 0; i < 3; i++) {
        let j = i + (val - 1) * 3;
        if (this.list[j] !== undefined) this.showItem.push(this.list[j]);
      }
    },
  },
  mounted() {
    console.log("userid>>>>>>>>>>>>>>>>>", this.userId);
    this.named();
    this.getlist();
  },
  computed: {
    pageNum: function () {
      console.log("this.list", this.list.length);
      if (this.list.length % 3 === 0) {
        return parseInt(this.list.length / 3);
      }
      return parseInt(this.list.length / 3) + 1;
    },
  },
  methods: {
    sortQuestionnaire: function () {
      const sorted = this.data.sort(
        (a, b) => new Date(b.create_date) - new Date(a.create_date)
      );
      this.list = sorted;
    },
    named: function () {
      console.log("name>>>", this.username);
      this.$emit("named", { recname: this.username });
    },
    getlist: function () {
      axios
        .get("http://localhost:8080/questionnaire/list", {
          params: {
            id: this.userId
          },
        })
        .then((response) => {
          this.data = response.data;
          this.sortQuestionnaire();
          console.log(this.list);
          for (let i = 0; i < 3; i++) {
            i = i + (this.page - 1) * 3;
            this.showItem.push(this.list[i]);
          }
        })
        .catch((e) => {
          this.errors.push(e);
        });
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
.v-application {
  background-color: rgba(255, 255, 255, 0) !important;
  direction: rtl;
}
.v-icon.v-icon {
  transform: rotate(180deg) !important;
}
.Listdiv {
  font-family: Shabnam;
  width: 62%;
  // height: 500px;
  .top_div {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    .list_num {
      color: #7f86aa;
      direction: rtl;
      display: flex;
      align-items: center;
    }
  }
  .list_container {
    display: flex;
    margin-top: 26px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .list_empty {
    display: flex;
    margin-top: 116px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 18%;
    }
    p {
      margin-top: 75px;
      font-size: 23px;
    }
  }
}
/********************     Media Queries     *************************/

/*  Big tablets to 1400px  */
@media only screen and (max-width: 1400px) {
  .Listdiv {
    width: 72%;
    .list_container {
      margin-top: 22px;
    }
    .list_empty {
      margin-top: 100px;
      img {
        width: 200px;
      }
      p {
        margin-top: 65px;
        font-size: 23px;
      }
    }
  }
}

@media only screen and (max-width: 1199px) {
  .Listdiv {
    width: 75%;
    .list_container {
      margin-top: 20px;
    }
    .list_empty {
      margin-top: 80px;
      img {
        width: 180px;
      }
      p {
        margin-top: 60px;
        font-size: 22px;
      }
    }
  }
}

/*  Small tablets to big tablets: from 768 to 1023px  */
@media only screen and (max-width: 1023px) {
  .Listdiv {
    width: 78%;
    .list_container {
      margin-top: 20px;
    }
  }
}

/*  Small phones to small tablets: from 481px to 767px  */
@media only screen and (max-width: 767px) {
  .Listdiv {
    width: 82%;
    .top_div {
      .list_num {
        font-size: 15px;
      }
    }

    .list_container {
      margin-top: 18px;
    }
    .list_empty {
      margin-top: 120px;
      p {
        margin-top: 50px;
        font-size: 20px;
      }
    }
  }
}

/*  Small phones: from 350 to 480px  */
@media only screen and (max-width: 480px) {
  .Listdiv {
    width: 85%;
    .top_div {
      flex-direction: column;
      .list_num {
        margin-bottom: 10px;
        font-size: 14px;
      }
    }
    .list_container {
      margin-top: 16px;
    }
    .list_empty {
      margin-top: 80px;
      img {
        width: 160px;
      }
      p {
        font-size: 20px;
      }
    }
  }
}

@media only screen and (max-width: 349px) {
  .Listdiv {
    width: 90%;
    .top_div {
      .list_num {
        margin-bottom: 6px;
        font-size: 13px;
      }
    }
    .list_container {
      margin-top: 16px;
    }
    .list_empty {
      margin-top: 60px;
      img {
        width: 130px;
      }
      p {
        margin-top: 50px;
        font-size: 17px;
      }
    }
  }
}
</style>
