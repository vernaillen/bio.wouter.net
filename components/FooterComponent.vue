<template>
  <footer class="prose dark:prose-invert max-w-full text-center">
    <div class="pt-16 text-sm">
      &copy; <nuxt-time :datetime="new Date()" year="numeric" />
      <NuxtLink href="https://vernaillen.dev" target="_blank">
        Wouter Vernaillen
      </NuxtLink>
      /
      <NuxtLink href="https://harmonics.be" target="_blank">
        Harmonics BV
      </NuxtLink>
    </div>
    <div class="text-[10px]">
      <GitHub />
    </div>
  </footer>
</template>
