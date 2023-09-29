<script setup lang="ts">
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
  <HeaderComponent />
  <NuxtPage />
  <FooterComponent />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.25s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>