<template>
  <div class="mb-12 p-6 rounded-2xl shadow-md bg-white border border-gray-200">
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
      <div>
        <TitleComponent
          :title="feedBack.title"
          level="h3"
        />
        <p class="text-sm text-gray-600">
          {{ dateHelper.dateStringFormatToString(feedBack.date) }}
        </p>
      </div>
      <div>

        <p class="text-sm text-primary">
          {{ feedBack.author }}
        </p>
        <p class="py-0.5 rounded-full text-xs font-medium bg-primaryLight text-gray-600">
          {{ feedBack.job }}
        </p>
      </div>
    </div>

    <TextMarkdownComponent
      :text="feedBack.content"
    />

  </div>
</template>

<script setup lang="ts">

import type {FeedbackContentType} from "@types/content/FeedbackType.js";
import TextMarkdownComponent from "@components/DesignSystem/Atoms/TextMarkdownComponent.vue";
import TitleComponent from "@components/DesignSystem/Atoms/TitleComponent.vue";
import {dateHelper} from "../../../helpers/dateHelper.js";

defineProps<{
  feedBack: FeedbackContentType
}>()
</script>
