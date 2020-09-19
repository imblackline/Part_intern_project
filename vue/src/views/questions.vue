<template>
  <div>
    <choice
      v-if="this.questions[this.questionNum].type == 1"
      :content="this.questions[this.questionNum].content"
      :a1="this.questions[this.questionNum].answers[0].content"
      :a2="this.questions[this.questionNum].answers[1].content"
      :a3="this.questions[this.questionNum].answers[2].content"
      :a4="this.questions[this.questionNum].answers[3].content"
      @selectlist="updateList"
      :selected="this.selected"
      :seen="seen"
    />
    <choice2
      v-if="this.questions[this.questionNum].type == 2"
      :content="this.questions[this.questionNum].content"
      :a1="this.questions[this.questionNum].answers[0].content"
      :a2="this.questions[this.questionNum].answers[1].content"
      @selectlist2="updateList2"
      :selected="this.selected"
      :seen="seen"
    />
    <choice3
      v-if="this.questions[this.questionNum].type == 3"
      @changeValue="updateValue"
      :value="this.selected"
      :seen="seen"
      :content="this.questions[this.questionNum].content"
    />
    <ProgressBar
      @next="next"
      @back="back"
      :num="this.questions.length"
      :questionNum="this.questionNum"
    />
  </div>
</template>


<script>
import ProgressBar from "@/components/ProgressBar.vue";
import choice3 from "@/components/choice3.vue";
import choice2 from "@/components/choice2.vue";
import choice from "@/components/choice.vue";
import toast from "toastr";

export default {
  name: "questions",
  data: function () {
    return {
      title: this.$route.params.title,
      seen: this.$route.params.seen,
      questionNum: 0,
      questions: this.$route.params.questions,
      getAnswers: this.$route.params.getAnswers,
      answers: [],
      answer: "",
      eindex: -1,
      selected: null,
    };
  },
  components: {
    ProgressBar,
    choice3,
    choice2,
    choice,
  },
  mounted() {
    // if (this.seen) {
    //   if (this.getAnswers[this.questionNum].answer_id === null) {
    //     this.selected = this.getAnswers[this.questionNum].tashrihi_answer;
    //   } else {
    //     this.selected = this.getAnswers[this.questionNum].answer_id;
    //   }
    // }
    this.back();
    console.log("first Answer",this.selected);
    console.log("getAnswers", this.getAnswers);
    this.$emit("title", { title: this.title });
    // this.answers = [];
  },
  methods: {
    updateList: function (param) {
      if (param[0] === true) {
        this.answer = 0;
      }
      if (param[1] === true) {
        this.answer = 1;
      }
      if (param[2] === true) {
        this.answer = 2;
      }
      if (param[3] === true) {
        this.answer = 3;
      }
    },
    updateList2: function (param) {
      if (param[0] === true) {
        this.answer = 0;
      }
      if (param[1] === true) {
        this.answer = 1;
      }
    },
    updateValue: function (param) {
      this.answer = param;
    },
    back: function () {
      if (this.seen) {
        if (this.questionNum > 0) this.questionNum--;
        if (this.getAnswers[this.questionNum].answer_id === null) {
          this.selected = this.getAnswers[this.questionNum].tashrihi_answer;
        } else {
          this.selected = this.getAnswers[this.questionNum].answer_id;
        }
      } else {
        if (this.questionNum > 0) this.questionNum--;
        this.selected = this.answers[this.questionNum];
      }
    },
    next: function () {
      if (this.seen) {
        if (this.questionNum < this.questions.length - 1) {
          this.questionNum++;
          if (this.getAnswers[this.questionNum].answer_id === null) {
            this.selected = this.getAnswers[this.questionNum].tashrihi_answer;
          } else {
            this.selected = this.getAnswers[this.questionNum].answer_id;
          }
        } else {
          this.$router.replace("/questionnaire/complete");
        }
      } else {
        if (this.answer === "" || this.answer === undefined) {
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
          toast.error("لطفا سوال را بدون پاسخ نگذارید");
        } else {
          // this.answers.push({ id: this.questionNum, answer: this.answer });
          this.answers[this.questionNum] = this.answer;
          this.answer = "";
          // console.log("answers >>>>>>", this.answers);
          if (this.questionNum < this.questions.length - 1) {
            this.questionNum++;
            this.selected = this.answers[this.questionNum];
          } else {
            console.log("javabha >>>", this.answers);
            this.$router.replace("/questionnaire/complete");
          }
        }
      }
    },
  },
};
</script>