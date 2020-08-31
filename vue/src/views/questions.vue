<template>
    <div>
        <choice />
        <ProgressBar />
    </div>
</template>


<script>
import ProgressBar from "@/components/ProgressBar.vue";
import choice from "@/components/choice.vue";
export default {
    name: "questions",
    components: {
        ProgressBar,
        choice,
    }
}
</script>