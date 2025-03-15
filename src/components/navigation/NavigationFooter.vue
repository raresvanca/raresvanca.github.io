<template>
  <footer class="border-primary border-t">
    <div
      class="text-onNeutral/70 mx-auto max-w-7xl px-6 py-12 text-sm md:flex md:items-center md:justify-between lg:px-8"
    >
      <div class="order-2 flex justify-center">
        <a
          href="https://instagram.com/raresvanca"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-onNeutral"
        >
          <i class="icon-instagram text-lg" title="Instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/raresvanca"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-onNeutral"
        >
          <i class="icon-linkedin text-lg" title="LinkedIn" />
        </a>
        <a
          href="https://github.com/raresvanca"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-onNeutral"
        >
          <i class="icon-github text-lg" title="GitHub" />
        </a>
      </div>
      <div class="mt-8 md:order-1 md:mt-0">
        <p class="text-center leading-5" title="All rights reserved to Rareș Andrei Vanca">
          © {{ new Date().getFullYear() }} Rareș Andrei Vanca | Under GNU AGPLv3
        </p>
      </div>
    </div>
  </footer>
</template>
