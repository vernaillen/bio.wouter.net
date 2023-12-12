<script setup lang="ts">
const { t } = useI18n()
if (process.client) {
  const hostname = window.location.hostname
  if (
    hostname !== 'bio.wouter.net' &&
    hostname !== 'localhost' &&
    hostname !== '127.0.0.1' &&
    !hostname.startsWith('10.0.2.') &&
    !hostname.includes('netlify.app')
  ) { window.location.href = 'https://bio.wouter.net' }
}
</script>

<template>
  <UHeader title=" " class="border-b-0">
    <template #top>
    </template>
    <template #center>
      <IconLogo class="absolute mx-auto top-0 left-0 right-0"/>
    </template>
    <template #right>
      <UColorModeButton class="text-primary-500 hover:text-primary-500 opacity-80 hover:opacity-100" />
      <UButton icon="i-simple-icons-github" to="https://github.com/vernaillen/bio.wouter.net" 
        class="text-primary-500 hover:text-primary-500 opacity-80 hover:opacity-100"
        target="_blank" color="gray" variant="ghost" />
    </template>
  </UHeader>

  <main>
    <NuxtPage />
  </main>

  <UFooter>
    <template #top>
      <LanguageSwitcher class="flex w-full justify-center"/>
    </template>
    <template #center>
      <div class="prose dark:prose-invert items-center text-center mx-auto">
        <div class="text-sm">
          &copy; <nuxt-time :datetime="new Date()" year="numeric" />
          <NuxtLink href="https://vernaillen.dev" target="_blank">
            Wouter Vernaillen
          </NuxtLink>
          /
          <NuxtLink href="https://harmonics.be" target="_blank">
            Harmonics BV
          </NuxtLink>
        </div>
        <div class="text-xs pt-3">
          <GitHub />
        </div>
      </div>
    </template>
  </UFooter>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>
