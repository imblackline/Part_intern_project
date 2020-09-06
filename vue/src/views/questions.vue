<template>
  <div>
    <choice3 v-if="questionNum == 3" />
    <choice v-if="questionNum == 1" />
    <choice2 v-if="questionNum == 2" />
    <ProgressBar @next="next" @back="back" />
  </div>
</template>


<script>
import ProgressBar from "@/components/ProgressBar.vue";
import choice3 from "@/components/choice3.vue";
import choice2 from "@/components/choice2.vue";
import choice from "@/components/choice.vue";
export default {
  name: "questions",
  data: function () {
    return {
      questionNum: 1,
    };
  },
  components: {
    ProgressBar,
    choice3,
    choice2,
    choice,
  },
  methods: {
    back: function () {
      if (this.questionNum !== 1) this.questionNum--;
    },
    next: function () {
      if (this.questionNum !== 3) this.questionNum++;
      else this.$router.replace('/questionnaire/complete');
    },
  },
};
</script>