<template>
  <div class="flex flex-col gap-4 lg:flex-row" :class="colorClass">
    <div
      class="flex-1 rounded-3xl bg-gradient-to-l from-current to-transparent p-[1.5px]"
      :class="{ 'lg:order-last': reversed, 'lg:!bg-gradient-to-r': reversed }"
    >
      <div
        class="from-neutral to-card-color flex h-full flex-col justify-center rounded-[22px] bg-gradient-to-r from-40% p-8"
        :class="{ 'lg:!bg-gradient-to-l': reversed }"
      >
        <div>
          <p class="text-sm text-gray-300">{{ period }}</p>
          <h3 class="position-title my-2 text-3xl font-semibold">{{ title }}</h3>
          <p class="text-gray-200">{{ company }}</p>
        </div>
      </div>
    </div>
    <div
      class="flex-1 rounded-3xl bg-gradient-to-r from-current to-transparent p-[1.5px]"
      :class="{ 'lg:!bg-gradient-to-l': reversed }"
    >
      <div class="bg-neutral h-full rounded-[22px] p-8">
        <p class="leading-relaxed whitespace-break-spaces text-neutral-300">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  index: number
  title: string
  description: string
  company: string
  period: string
}>()

const colorClass = computed(() => {
  switch (props.index % 3) {
    case 0:
      return 'text-primary'
    case 1:
      return 'text-secondary'
    case 2:
      return 'text-tertiary'
    default:
      return ''
  }
})

const reversed = computed(() => props.index % 2 === 1)
const description = computed(() => props.description.replace(/\\n/g, '\n'))
</script>

<style scoped>
.to-card-color {
  --tw-gradient-to: color-mix(in oklab, currentcolor 40%, var(--color-neutral));
}

.position-title {
  color: color-mix(in oklab, currentcolor 60%, var(--color-onNeutral));
  text-shadow: 0 0 30px black;
}
</style>
