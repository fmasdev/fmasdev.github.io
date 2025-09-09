<template>
  <div>skills and feedbacks</div>


</template>

<script setup lang="ts">
import {toRefs} from "vue";
import {useContentLoader} from "@composables/useContentLoader.js";

const { content: skills } = toRefs(useContentLoader('skills'))
const { content: feedbacks } = toRefs(useContentLoader('feedbacks'))
console.log(skills)
console.log(feedbacks)

</script>
