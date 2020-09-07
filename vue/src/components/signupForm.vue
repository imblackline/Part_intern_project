<template>
  <form class="signin_form" action>
    <div class="input_div"></div>
    <signupInputs @changed="changeParam" />
    <underInput />
    <signupBtn @enter="checkuser" />
  </form>
</template>


<script>
// @ is an alias to /src
import signupBtn from "@/components/signupBtn.vue";
import underInput from "@/components/underInput.vue";
import signupInputs from "@/components/signupInputs.vue";
import axios from "axios";
import toast from "toastr";
// import toast from 'toastr';

export default {
  name: "signin",
  components: {
    signupBtn,
    underInput,
    signupInputs,
  },
  data: function () {
    return {
      email: "",
      name: "",
      password: "",
      repPassword: "",
      data: null,
    };
  },
  mounted() {},
  methods: {
    changeParam: function (param) {
      this.email = param["email"];
      this.password = param["password"];
      this.repPassword = param["repPassword"];
      this.name = param["name"];
      console.log(
        "name",
        this.name,
        "email",
        this.email,
        "password",
        this.password,
        "repPassword",
        this.repPassword
      );
    },
    checkuser: function () {
      axios
        .post("http://localhost:8080/gate/signup", {
          email: this.email,
          name: this.name,
          password: this.password,
          repPassword: this.repPassword,
        })
        .then((res) => {
          console.log(res);
          if (res.data == "success") {
            this.$router.replace({ name: "list", params: { name: this.name } });
          } else {
            console.log("not allow");
            toast.error("This email exist!");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>