<template>
  <div class="mx-auto mt-32 mb-24 max-w-2xl px-6 sm:mt-44 sm:px-8 lg:max-w-7xl lg:px-12">
    <header class="max-w-2xl">
      <h1 class="font-display text-onNeutral/90 text-4xl font-light sm:text-6xl">
        The projects I've worked on
      </h1>
      <p class="text-onNeutral/80 mt-6 text-base">
        Below are some of the projects I've contributed to over the years that I can share publicly.
        Many of them are open-source, and you can explore the code on GitHub.
      </p>
    </header>
    <!-- TODO: build a filtering system -->
    <main>
      <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
      </div>
    </main>
  </div>
  <NavigationFooter />
</template>

<script setup lang="ts">
import ProjectCard from '@/components/cards/ProjectCard.vue'
import NavigationFooter from '@/components/navigation/NavigationFooter.vue'
import { projects } from '@/models/project.ts'
</script>

<style scoped></style>
