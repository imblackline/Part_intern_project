<template>
  <form class="signin_form" action>
    <div class="input_div"></div>
    <signinInputs @changed="changeParam" :error="this.errors" />
    <underInput />
    <signinBtn @enter="checkuser" />
  </form>
</template>


<script>
// @ is an alias to /src
import signinBtn from "@/components/signinBtn.vue";
import underInput from "@/components/underInput.vue";
import signinInputs from "@/components/signinInputs.vue";
import axios from "axios";
import toast from "toastr";
// import Vue from "vue";

export default {
  name: "signin",
  data: function () {
    return {
      name: "",
      email: "",
      password: "",
      data: null,
      errors: [],
    };
  },
  mounted() {
    // axios
    //   .get("http://localhost:8080/gate/signin")
    //   .then((response) => {
    //     this.data = response.data;
    //     console.log(response.data);
    //   })
    //   .catch((e) => {
    //     this.errors.push(e);
    //   });
    //   console.log(toast)
    //   setTimeout(()=>{
    //     toast.info("Hello")
    //   },2000)
  },
  methods: {
    // sendName : function (){
    //   this.$emit('sendName', {"name": this.name})
    // },
    changeParam: function (param) {
      this.email = param["email"];
      this.password = param["password"];
    },
    checkinputs: function () {
      this.errors = [];
      if (this.email === "" || this.password === "") {
        if (this.email === "") this.errors.push("email");
        if (this.password === "") this.errors.push("password");
        return false;
      }
      return true;
    },
    checkuser: function () {
      /////////////////////////////////////////////
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
        axios
          .post("http://localhost:8080/gate/signin", {
            email: this.email,
            password: this.password,
          })
          .then((res) => {
            console.log(res);
            if (res.data == "unsuccess") {
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
              toast.error("ایمیل یا رمز عبور اشتباه است");
            } else {
              localStorage.setItem("username", res.data.name);
              localStorage.setItem("userId", res.data.id);
              this.$router.replace({
                name: "list",
                params: { name: res.data.name, id: res.data.id },
              });
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      ///////////////////////////////////////////
      ////////////////////////////////////////////// check user in client
      // this.haveAccess = false;
      // console.log("recived", this.email, this.password, "data => ", this.data);
      // for (let i = 0; i < this.data.length; i++) {
      //   // console.log("email & password ==",u.email , u.password)
      //   if (this.email === this.data[i].email) {
      //     if (this.password === this.data[i].password) {
      //       this.haveAccess = true;
      //       this.name = this.data[i].name;
      //       this.$router.replace({name:'list',params:{username:this.name}});
      //     }
      //   }
      // }
      // if (this.haveAccess === false) {
      //   console.log("email or password is wrong");
      //   // Toastr.success('Success messages');
      //   alert("Email or password is wrong!")
      // }
      //////////////////////////////////////////////////////
    },
  },
  components: {
    signinBtn,
    underInput,
    signinInputs,
  },
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
</style>