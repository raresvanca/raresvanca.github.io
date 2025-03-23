<template>
  <section class="w-full overflow-clip overflow-y-clip">
    <div class="relative h-fit min-h-screen w-full">
      <div
        aria-hidden="true"
        class="absolute top-1/2 right-0 left-0 -z-10 h-[120rem] blur-[100px] contrast-125 saturate-150 max-lg:top-0 max-lg:w-[300vw] max-lg:-translate-x-1/3 lg:bottom-0 lg:h-[90vw] lg:-translate-y-1/6 lg:-scale-100 lg:-rotate-45 min-[120rem]:h-[70vw] min-[120rem]:translate-y-1/8"
      >
        <ColorBlob />
      </div>
      <!-- Bento like grid container -->
      <div
        class="top-0 right-0 bottom-0 left-0 mx-auto flex max-w-2xl flex-col justify-center px-6 py-24 lg:absolute lg:max-w-7xl"
      >
        <!-- Grid -->
        <div class="text-onNeutral/80 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <!-- Tehnical skills card -->
          <div class="relative">
            <div class="base-grid-container-background lg:rounded-ss-4xl!" />
            <div class="relative flex h-full flex-col">
              <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <RouterLink to="/skills" class="base-grid-container-title">
                  <span>Tehnical Skills</span>
                  <i class="icon-chevron-right" />
                </RouterLink>
                <ul class="base-grid-container-content">
                  <li>Flutter</li>
                  <li>Web Development</li>
                  <li>C/C++</li>
                  <li>Git & GitHub</li>
                  <li>
                    <RouterLink to="/skills">See more<i class="icon-chevron-right" /></RouterLink>
                  </li>
                </ul>
              </div>
            </div>
            <div class="base-grid-container-shadow lg:rounded-ss-4xl!" />
          </div>
          <!-- Education card -->
          <div class="relative max-lg:row-start-1">
            <div class="base-grid-container-background max-lg:rounded-t-4xl! lg:rounded-se-4xl!" />
            <div class="relative flex h-full flex-col">
              <div class="px-8 pt-8 sm:px-10 sm:pt-10">
                <p class="base-grid-container-title">Education</p>
                <ul class="base-grid-container-content">
                  <li>
                    Faculty of Cybernetics, Statistics and Economic Informatics, Bucharest, Romania
                    - 2024 - 2027 - Bachelor's Degree in Computer Science
                  </li>
                  <li>
                    Alexandru Ioan Cuza Highschool, Bucharest, Romania - 2020 - 2024 - Mathematics
                    and Informatics
                  </li>
                </ul>
              </div>
            </div>
            <div class="base-grid-container-shadow max-lg:rounded-t-4xl! lg:rounded-se-4xl!" />
          </div>
          <!-- Soft skills card -->
          <div class="relative max-lg:row-start-3">
            <div class="base-grid-container-background lg:rounded-es-4xl!" />
            <div class="relative flex h-full flex-col">
              <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p class="base-grid-container-title">Soft Skills</p>
                <ul class="base-grid-container-content">
                  <li>Communication</li>
                  <li>Teamwork</li>
                  <li>Problem-solving</li>
                  <li>Time Management</li>
                </ul>
              </div>
            </div>
            <div class="base-grid-container-shadow lg:rounded-es-4xl!" />
          </div>
          <!-- Language card -->
          <div class="relative">
            <div class="base-grid-container-background lg:rounded-ee-4xl!" />
            <div class="relative flex h-full flex-col">
              <div class="px-8 pt-8 sm:px-10 sm:pt-10">
                <p class="base-grid-container-title">Language</p>
                <ul class="base-grid-container-content">
                  <li>Romanian - Native</li>
                  <li>English - Full Professional Proficiency</li>
                </ul>
              </div>
            </div>
            <div class="base-grid-container-shadow lg:rounded-ee-4xl!" />
          </div>
          <!-- Projects card -->
          <div class="relative lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div class="base-grid-container-background max-lg:rounded-b-4xl!" />
            <div class="relative flex h-full flex-col">
              <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <RouterLink to="/projects" class="base-grid-container-title">
                  <span>Projects</span>
                  <i class="icon-chevron-right" />
                </RouterLink>
                <ul class="base-grid-container-content base-grid-container-content-projects">
                  <li>
                    <h3>Flutter Packages</h3>
                    <p>Flutter, Dart, Git</p>
                  </li>
                  <li>
                    <h3>Polybius</h3>
                    <p>Rust, HTML, CSS, Tailwind</p>
                  </li>
                  <li>
                    <h3>2-5-perceivers.github.io</h3>
                    <p>Vue, HTML, TypeScript</p>
                  </li>
                  <li>
                    <h3>Betalk</h3>
                    <p>Kotlin, Rust, Python, Flutter</p>
                  </li>
                  <li>
                    <h3>Warpinator Android</h3>
                    <p>Android, Kotlin, Java</p>
                  </li>
                  <li>
                    <h3>Rust Hangman</h3>
                    <p>Rust, RayLib</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="base-grid-container-shadow max-lg:rounded-b-4xl!" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ColorBlob from '@/components/ColorBlob.vue'
</script>

<style scoped>
@reference "@/assets/main.css";

.base-grid-container-background {
  @apply absolute inset-px rounded-lg bg-stone-800/50 backdrop-blur-2xl;
}

.base-grid-container-shadow {
  @apply ring-primary/20 pointer-events-none absolute inset-px rounded-lg shadow-md ring-1;
}

.base-grid-container-title {
  @apply font-title text-onNeutral mt-2 text-2xl tracking-tight max-lg:text-center;
}

a.base-grid-container-title {
  @apply block hover:underline;
}

.base-grid-container-content {
  @apply mt-2 mb-4 list-disc text-sm/6;
}

.base-grid-container-content > li {
  @apply py-2;
}

.base-grid-container-content-projects {
  @apply mt-6! list-none!;
}

.base-grid-container-content-projects > li {
  @apply bg-primary/5 -mx-4 my-4 box-content w-full rounded-md px-4;
}

.base-grid-container-content-projects > li:last-child {
  @apply max-lg:mb-6 max-lg:rounded-b-2xl max-sm:-mb-2 max-sm:rounded-b-3xl;
}

.base-grid-container-content-projects > li > h3 {
  @apply font-title text-primary text-lg;
}

.base-grid-container-content-projects > li > p {
  @apply italic;
}
/* Possible scroll snap design
section {
  scroll-snap-align: center;
} */
</style>
