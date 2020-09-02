<template>
    <div>
        <choice3 />
        <ProgressBar />
    </div>
</template>


<script>
import ProgressBar from "@/components/ProgressBar.vue";
import choice3 from "@/components/choice3.vue";
export default {
    name: "questions",
    components: {
        ProgressBar,
        choice3,
    }
}
</script>