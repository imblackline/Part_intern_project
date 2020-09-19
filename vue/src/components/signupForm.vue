<template>
  <form class="signin_form" action>
    <div class="input_div"></div>
    <signupInputs @changed="changeParam" :error="this.errors" />
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
      errors: [],
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
    checkinputs: function () {
      this.errors = [];
      if (
        this.email === "" ||
        this.name === "" ||
        this.password === "" ||
        this.repPassword === ""
      ) {
        if (this.email === "") this.errors.push("email");
        if (this.name === "") this.errors.push("name");
        if (this.password === "") this.errors.push("password");
        if (this.repPassword === "") this.errors.push("repPassword");
        return false;
      }
      return true;
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    checkuser: function () {
      if (!this.checkinputs()) {
        toast.options = {
          closeButton: false,
          debug: false,
          newestOnTop: false,
          progressBar: true,
          positionClass: "toast-top-center",
          preventDuplicates: true,
          onclick: null,
          showDuration: "300",
          hideDuration: "1000",
          timeOut: "3000",
          extendedTimeOut: "1000",
          showEasing: "swing",
          hideEasing: "linear",
          showMethod: "fadeIn",
          hideMethod: "fadeOut",
        };
        toast.error("پر کردن تمام فیلدها الزامیست");
      } else {
        if (this.password !== this.repPassword) {
          toast.options = {
            closeButton: false,
            debug: false,
            newestOnTop: false,
            progressBar: true,
            positionClass: "toast-top-center",
            preventDuplicates: true,
            onclick: null,
            showDuration: "300",
            hideDuration: "1000",
            timeOut: "3000",
            extendedTimeOut: "1000",
            showEasing: "swing",
            hideEasing: "linear",
            showMethod: "fadeIn",
            hideMethod: "fadeOut",
          };
          toast.error("رمز خود را به درستی تکرار کنید");
          this.errors.push("repPassword");
        } else {
          var index = this.errors.indexOf("repPassword");
          this.errors.splice(index, 1);
          if (!this.validEmail(this.email)) {
            toast.options = {
              closeButton: false,
              debug: false,
              newestOnTop: false,
              progressBar: true,
              positionClass: "toast-top-center",
              preventDuplicates: true,
              onclick: null,
              showDuration: "300",
              hideDuration: "1000",
              timeOut: "3000",
              extendedTimeOut: "1000",
              showEasing: "swing",
              hideEasing: "linear",
              showMethod: "fadeIn",
              hideMethod: "fadeOut",
            };
            toast.error("ایمیل خود را به درستی وارد کنید");
            this.errors.push("email");
          } else {
            var eindex = this.errors.indexOf("email");
            this.errors.splice(eindex, 1);
            axios
              .post("http://localhost:8080/gate/signup", {
                email: this.email,
                name: this.name,
                password: this.password,
                repPassword: this.repPassword,
              })
              .then((res) => {
                if (res.data == "success") {
                  this.$router.replace({
                    name: "list",
                    params: { name: this.name },
                  });
                } else {
                  console.log("not allow");
                  toast.options = {
                    closeButton: false,
                    debug: false,
                    newestOnTop: false,
                    progressBar: true,
                    positionClass: "toast-top-center",
                    preventDuplicates: true,
                    onclick: null,
                    showDuration: "300",
                    hideDuration: "1000",
                    timeOut: "3000",
                    extendedTimeOut: "1000",
                    showEasing: "swing",
                    hideEasing: "linear",
                    showMethod: "fadeIn",
                    hideMethod: "fadeOut",
                  };
                  toast.error("این ایمیل در سیستم موجود است");
                  this.errors.push("email");
                }
              })
              .catch(function (error) {
                console.log(error);
              });
          }
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>