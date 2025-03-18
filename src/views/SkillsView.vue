<template>
  <div class="mx-auto mt-32 mb-24 max-w-2xl px-6 sm:mt-44 sm:px-8 lg:max-w-7xl lg:px-12">
    <header class="max-w-2xl">
      <h1 class="font-display text-onNeutral/90 text-4xl font-light sm:text-6xl">
        The skills I possess
      </h1>
      <p class="text-onNeutral/80 mt-6 text-base">
        Presented below is an extensive compilation of my skills, offering detailed information with
        a single click. This collection underscores my expertise in a diverse array of technologies,
        frameworks, platforms and languages.
      </p>
    </header>
    <!-- TODO: build a filtering system -->
    <main>
      <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <SkillCard v-for="skill in skills" :key="skill.name" :skill="skill" />
      </div>
    </main>
  </div>
  <NavigationFooter />
</template>

<script setup lang="ts">
import SkillCard from '@/components/cards/SkillCard.vue'
import NavigationFooter from '@/components/navigation/NavigationFooter.vue'
import {
  language_skills,
  framework_skills,
  platforms_skills,
  technologies_skills,
} from '@/models/skill.ts'

const skills = [
  ...language_skills,
  ...framework_skills,
  ...platforms_skills,
  ...technologies_skills,
]
</script>

<style scoped></style>
