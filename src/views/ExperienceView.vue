<template>
  <div class="mx-auto mt-32 mb-24 max-w-2xl px-6 sm:mt-44 sm:px-8 lg:max-w-7xl lg:px-12">
    <header class="max-w-2xl">
      <h1 class="font-display text-onNeutral/90 text-4xl font-light sm:text-6xl">My experience</h1>
      <p class="text-onNeutral/80 mt-6 text-base">
        While my official timeline begins in 2025, my practical experience extends back much
        further. I began coding at 11 and took on freelance work, developing core technical and
        problem-solving skills long before my first professional role.
      </p>
    </header>
    <main class="mt-12 flex flex-col gap-4">
      <ExperienceCard
        v-for="(exp, index) in experiences"
        :key="index"
        :index="index"
        :title="exp.title"
        :description="exp.description"
        :company="exp.company"
        :period="exp.period"
      />
    </main>
  </div>
  <NavigationFooter />
</template>

<script setup lang="ts">
import NavigationFooter from '@/components/navigation/NavigationFooter.vue'
import ExperienceCard from '@/components/cards/ExperienceCard.vue'

class Experience {
  constructor(
    public title: string,
    public description: string,
    public company: string,
    public period: string
  ) {}
}

const experiences: Experience[] = [
  new Experience(
    'Full Stack Software Engineer',
    'Engineered end-to-end data-analysis and AI solutions that convert raw data into actionable insights for internal teams and clients, overseeing database integrity, secure access controls, real-time data flows, automated deployment pipelines, and delivering robust analytics modules.',
    'EUMatrix • Remote (Belgium)',
    'Sep 2025-Present'
  ),
  new Experience(
    'Data Engineer Intern',
    'Developed foundational data engineering skills through practical application on data-related tasks. Applied learned concepts to real-world challenges, which included the development of basic data pipelines to process and structure information. This role provided valuable insight into the principles of data handling and workflow automation.',
    'EUMatrix • Remote (Belgium)',
    'Jun 2025-Sep 2025'
  )
]
</script>

<style scoped></style>
