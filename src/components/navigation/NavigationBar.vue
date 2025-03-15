<template>
  <header class="pointer-events-none fixed top-0 right-0 left-0 z-50 flex flex-none flex-col">
    <div class="top-0 z-10 h-16 pt-6">
      <div class="w-full sm:px-8">
        <div class="mx-auto w-full max-w-7xl lg:px-8">
          <div class="relative px-4 sm:px-8 lg:px-12">
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
              <div class="relative flex md:gap-4">
                <div class="flex flex-1" />
                <div class="flex flex-1 justify-end md:justify-center">
                  <!-- Navigation Menu -->
                  <NavigationMenu />
                </div>
                <div>
                  <nav class="pointer-events-auto hidden md:block">
                    <ul
                      class="flex rounded-full bg-stone-800/70 px-3 text-sm font-medium text-stone-200 shadow-lg ring-1 shadow-stone-800/5 ring-white/10 backdrop-blur-sm"
                    >
                      <li v-for="(link, index) in navLinks" :key="index">
                        <RouterLink class="nav-bar-link" :to="link.path">
                          {{ link.name }}
                        </RouterLink>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="justify-end md:flex md:flex-1" />
                <div class="md:flex md:flex-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import router from '@/router'
import NavigationMenu from './NavigationMenu.vue'

// Navigation links array for easier maintenance
const navLinks = router.getRoutes().map((route) => ({
  name: route.meta.name,
  path: route.path,
}))
</script>

<style scoped>
@reference "@/assets/main.css";

.nav-bar-link {
  @apply hover:text-primary relative block px-3 py-2 transition select-none;
}

.nav-bar-link.router-link-active {
  @apply text-primary;
}
</style>
