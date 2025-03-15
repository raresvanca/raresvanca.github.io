<template>
  <section class="mx-auto w-full max-w-7xl">
    <div class="relative min-h-screen w-full overflow-clip overflow-y-visible 2xl:overflow-visible">
      <div
        aria-hidden="true"
        class="absolute top-1/2 -right-96 -z-10 w-4xl -translate-y-2/3 blur-[100px] contrast-125 saturate-150 md:w-6xl lg:-right-24 xl:-right-12 2xl:-right-32"
      >
        <ColorBlob />
      </div>
      <div
        class="mx-auto flex min-h-[inherit] w-min max-w-full flex-col items-start justify-center px-16 md:mx-0 md:w-full 2xl:px-0"
      >
        <h2 class="text-onNeutral/50 font-title xs:text-xl text-lg font-light lg:text-2xl">
          <!-- Make bullet unselectable so that selecting and copying gives only my name -->
          Rares Andrei<span class="select-none"> •</span> Vanca
        </h2>
        <h1
          class="font-display xs:text-6xl text-onNeutral/80 pt-2 pb-4 text-5xl font-extralight sm:pt-4 sm:pb-8 sm:text-7xl lg:text-8xl"
        >
          <!-- Make the break not selectable so that selecting and copying gives only one line -->
          Programmer, Designer&nbsp;&amp; <br class="select-none" />
          Photographer
        </h1>
        <!-- The height is set to 0 on bigger devices so that the main title is verticaly aligned -->
        <p class="text-onNeutral/60 max-w-80 overflow-visible text-justify sm:h-0 md:max-w-md">
          I'm a full-stack developer, designer and photographer based in Bucharest, Romania. I'm
          passionate about creating simple, safe and functional code. With a separate passion for
          photography and design.
        </p>
      </div>
      <div
        class="xs:pb-8 absolute right-0 bottom-0 left-0 flex justify-center px-8 pb-2 md:left-auto md:flex-col-reverse"
      >
        <a
          href="https://instagram.com/raresvanca"
          target="_blank"
          rel="noopener noreferrer"
          class="icon-instagram icon"
          title="Open Instagram profile"
        />
        <a
          href="https://www.linkedin.com/in/raresvanca"
          target="_blank"
          rel="noopener noreferrer"
          class="icon-linkedin icon"
          title="Open LinkedIn profile"
        />
        <a
          href="https://github.com/rares45"
          target="_blank"
          rel="noopener noreferrer"
          class="icon-github icon"
          title="Open GitHub profile"
        />
        <a
          href="https://www.instagram.com/viridian.leak/"
          target="_blank"
          rel="noopener noreferrer"
          class="icon-camera icon"
          title="Open photography Instagram account"
        />
        <a
          href="https://github.com/2-5-perceivers"
          target="_blank"
          rel="noopener noreferrer"
          class="icon-code icon"
          title="Open 2.5 Perceivers GitHub page"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ColorBlob from '@/components/ColorBlob.vue'
</script>

<style scoped>
@reference "@/assets/main.css";

.icon {
  @apply text-onNeutral/80 hover:bg-secondary/10 content-center rounded-full p-2 text-xl;
}
</style>
