<template>
  <div
    class="relative flex flex-col rounded-xl bg-stone-800 p-6 ring ring-stone-700 duration-150"
    :class="{
      'cursor-pointer': hasContent,
      'hover:bg-stone-700': hasContent,
      'hover:ring-stone-600': hasContent,
    }"
    @click="toggleOpen"
  >
    <div class="flex flex-row items-center gap-4">
      <img :src="iconUrl" alt="Skill icon" class="h-8 w-8" />
      <h2 class="text-onNeutral font-title flex-grow text-xl">{{ props.skill.name }}</h2>
    </div>
    <div class="flex h-0 flex-row justify-center overflow-visible" v-if="hasContent">
      <div class="mt-2 h-4 w-4"><ExpandIcon /></div>
    </div>
    <Transition
      enter-active-class="ease-out"
      leave-active-class="ease-in"
      enter-from-class="opacity-0 scale-95"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-show="isOpen"
        class="ring-primary/50 absolute top-[calc(100%-1rem)] right-0 left-0 z-10 flex flex-col gap-2 overflow-clip rounded-xl rounded-b-2xl bg-stone-800 p-4 ring duration-150"
      >
        <h2 class="text-onNeutral font-title flex-grow text-xl">{{ props.skill.name }}</h2>
        <div v-if="mastered">
          <h3>Mastered</h3>
          <ul class="text-onNeutral/70 list-inside list-disc">
            <li v-for="mastered in props.skill.mastered_subskills" :key="mastered">
              {{ mastered }}
            </li>
          </ul>
        </div>
        <div v-if="learning">
          <h3>Learning</h3>
          <ul class="text-onNeutral/70 list-inside list-disc">
            <li v-for="learning in props.skill.learning_subskills" :key="learning">
              {{ learning }}
            </li>
          </ul>
        </div>
        <div v-if="projects">
          <h3>Projects</h3>
          <ul class="text-onNeutral/70 list-inside list-disc">
            <li v-for="projects in props.skill.projects" :key="projects">
              {{ projects }}
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { type Skill } from '@/models/skill.ts'
import { getIcon } from '@/utils/iconLoader'
import { computed, ref } from 'vue'
import { ExpandIcon } from '@/components/icons'

const props = defineProps<{
  skill: Skill
}>()

const iconUrl = computed(() => {
  // Get the filename of the icon from glob
  return getIcon(props.skill.icon)
})

const mastered = computed(
  () => props.skill.mastered_subskills != undefined && props.skill.mastered_subskills.length > 0,
)
const learning = computed(
  () => props.skill.learning_subskills != undefined && props.skill.learning_subskills.length > 0,
)
const projects = computed(
  () => props.skill.projects != undefined && props.skill.projects.length > 0,
)

const hasContent = computed(() => mastered.value || learning.value || projects.value)

// State for open or closed menu
const isOpen = ref(false)

function toggleOpen() {
  if (!hasContent.value) return
  isOpen.value = !isOpen.value
}
</script>

<style scoped></style>
