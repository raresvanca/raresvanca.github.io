<template>
  <div class="pointer-events-auto md:hidden">
    <!-- Menu button -->
    <button
      class="group flex items-center rounded-full bg-stone-800/70 px-4 py-2 text-sm font-medium text-stone-200 shadow-lg ring-1 ring-white/10 backdrop-blur-sm hover:ring-white/20"
      type="button"
      :aria-expanded="isOpen"
      @click="toggleMenu"
    >
      <span>Menu</span>
      <ExpandIcon />
    </button>
    <!-- Blured backdrop -->

    <Transition
      enter-active-class=" ease-out"
      leave-active-class="ease-in"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        class="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs duration-150"
        v-show="isOpen"
        aria-hidden="true"
      />
    </Transition>
    <!-- Navigation Menu -->
    <Transition
      enter-active-class="ease-out"
      leave-active-class="ease-in"
      enter-from-class="opacity-0 scale-95"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        class="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-stone-900 p-8 ring-1 ring-stone-800 duration-150"
        tabindex="-1"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        v-show="isOpen"
      >
        <div class="flex flex-row-reverse items-center justify-between">
          <!-- Close button -->
          <button
            aria-label="Close menu"
            class="-m-1 rounded-full p-1 hover:bg-stone-100/10"
            type="button"
            @click="toggleMenu"
          >
            <CloseIcon />
          </button>
          <h2 class="text-sm font-medium text-stone-400 select-none">Navigation</h2>
        </div>
        <nav class="mt-6">
          <ul class="-my-2 divide-y divide-stone-100/5 text-base text-stone-300">
            <li v-for="(link, index) in navLinks" :key="index">
              <RouterLink class="nav-menu-link" :to="link.path" @click="isOpen = false">
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { ExpandIcon, CloseIcon } from '@/components/icons'
import router from '@/router/index.ts'

// State for open or closed menu
const isOpen = ref(false)
// Toggle menu
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

// Navigation links array for easier maintenance
const navLinks = router.getRoutes().map((route) => ({
  name: route.meta.name,
  path: route.path,
}))
</script>

<style scoped>
@reference "@/assets/main.css";

.nav-menu-link {
  @apply hover:text-primary block py-2 select-none;
}
</style>
