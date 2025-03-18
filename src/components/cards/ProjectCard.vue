<template>
  <div class="flex flex-col rounded-xl bg-stone-800 p-6 ring ring-stone-700">
    <h2 class="text-onNeutral font-title text-xl">{{ props.project.title }}</h2>
    <p class="text-onNeutral/80 mt-2 text-sm">{{ props.project.description }}</p>
    <div class="flex-grow" aria-hidden="true" />
    <div class="mt-4 flex flex-wrap gap-1">
      <div class="bg-primary/10 rounded-md px-2 py-1.5" v-for="skill in skills" :key="skill">
        {{ skill }}
      </div>
    </div>
    <div class="mt-4 flex flex-row flex-wrap gap-2 border-t border-stone-700 pt-4" v-if="links">
      <a
        :href="viewMoreLink"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary ring-primary/80 hover:ring-primary hover:bg-primary/10 block rounded-4xl px-3 py-1 ring"
        v-if="viewMoreLink"
      >
        View more
      </a>
      <a
        :href="codeLink"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary ring-primary/80 hover:ring-primary hover:bg-primary/10 block rounded-4xl px-3 py-1 ring"
        v-if="codeLink"
      >
        See code
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Project } from '@/models/project.ts'
import { computed } from 'vue'

const props = defineProps<{
  project: Project
}>()

const skills = computed(() => props.project.skills)

const links = computed(
  () => props.project.linkCode != undefined || props.project.linkMore != undefined,
)
const viewMoreLink = computed(() => props.project.linkMore)
const codeLink = computed(() => props.project.linkCode)
</script>

<style scoped></style>
