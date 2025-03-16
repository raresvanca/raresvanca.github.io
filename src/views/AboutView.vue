<template>
  <main class="flex-auto">
    <div class="mt-16 mb-32 sm:mt-32 sm:px-8">
      <div class="mx-auto w-full max-w-7xl lg:px-8">
        <div class="relative px-8 sm:px-12 lg:px-12">
          <div class="mx-auto max-w-2xl lg:max-w-5xl">
            <div
              class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12"
            >
              <div class="lg:pl-20">
                <div class="max-w-xs px-2.5 max-lg:mx-auto lg:max-w-none">
                  <img
                    alt="Headshot of Rareș Vanca"
                    loading="lazy"
                    width="800"
                    height="800"
                    decoding="async"
                    class="ring-primary shadow-primary/10 aspect-square rotate-3 rounded-2xl bg-stone-800 shadow-xl ring"
                    sizes="(min-width: 1024px) 32rem, 20rem"
                    srcset="
                      @/assets/images/portrait_half.webp  600w,
                      @/assets/images/portrait.webp      1200w
                    "
                    src="@/assets/images/portrait.webp"
                  />
                </div>
              </div>
              <div class="lg:order-first lg:row-span-2">
                <h1
                  class="font-display text-onNeutral/90 text-4xl font-light tracking-tight sm:text-6xl"
                >
                  Rocking to new tehnologies
                </h1>
                <div class="text-onNeutral/80 mt-6 space-y-6 text-justify text-base">
                  <p>
                    My programming journey began at age 11 with Scratch and Python. While these were
                    engaging introductions, I soon sought more structured and complex challenges,
                    leading me to C++. This language marked a pivotal moment in my understanding of
                    software development, sparking a deep interest in the fundamentals of how
                    software operates.
                  </p>
                  <p>
                    I rember when I got my first Raspberry Pi. It was my way to dive deeper into
                    Linux, automation, and scripting, learning to write programs that controlled
                    hardware and automated tasks. I used it to develop small games in Python for me
                    and my sister. This experience cemented my passion for programming, not just as
                    a way to write code, but as a means to create comprehensive solutions.
                  </p>
                  <p>
                    As I continued to develop my skills, I naturally gravitated toward creating
                    software that was both efficient and well-structured. Whether I'm building
                    full-stack applications, real-time systems, or embedded projects, I always
                    prioritize clarity, performance, and a deep understanding of how every component
                    fits together.
                  </p>
                  <p>
                    Open-source development has been a significant part of my journey. My initial
                    contribution was modest—adding the Romanian translated badge to the Canonical
                    Snap Store Badges repository—but it was meaningful as I was distributing my
                    first game as a Snap package on Linux.
                  </p>
                  <p>
                    This small step led to larger contributions, and soon after, I published my
                    first public repository, godot-toasts, which still has users today. And today, I
                    am the maintainer of a few open-source projects in my organization,
                    2.5&nbsp;Perceivers.
                  </p>
                  <p>
                    In addition to my enthusiasm for programming, I have a strong passion for design
                    and photography. I enjoy creating aesthetically pleasing works and continuously
                    seek new avenues to express my creativity. Whether it is designing an
                    application or website, or capturing photographs of the world around me, I
                    strive for minimalistic and elegant solutions.
                  </p>
                </div>
              </div>
              <div class="lg:pl-20">
                <h2 class="font-title text-onNeutral/90 text-center text-xl max-lg:hidden">
                  Rareș Andrei Vanca
                </h2>
                <ul class="socials-list" role="list">
                  <li>
                    <a
                      href="https://instagram.com/raresvanca"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="icon-instagram" />
                      <span>Follow on Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/raresvanca"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="icon-linkedin" />
                      <span>Follow on LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/raresvanca"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="icon-github" />
                      <span>Follow on GitHub</span>
                    </a>
                  </li>

                  <li class="border-secondary border-t pt-4">
                    <a
                      href="mailto:raresvanca+p@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="icon-email" />
                      <span>raresvanca@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <NavigationFooter />
</template>

<script setup lang="ts">
import NavigationFooter from '@/components/navigation/NavigationFooter.vue'
</script>

<style scoped>
@reference "@/assets/main.css";

.socials-list {
  @apply text-onNeutral/70;
}

.socials-list > li {
  @apply hover:text-primary mt-4 flex;
}

.socials-list > li > a {
  @apply flex text-sm transition;
}

.socials-list > li > a i {
  @apply text-lg;
}

.socials-list > li > a span {
  @apply my-auto ml-4;
}
</style>
