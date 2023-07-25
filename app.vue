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
  <div class="main container mt-5 text-center text-dark dark:text-gray-200">
    <div class="mt-8 mb-6">
      <SocialIcons />
    </div>
    <div class="mt-5 mb-1 text-md font-bold tracking-wide">
      Wouter Vernaillen
    </div>
    <p class="text-sm mb-2">
      ecstatic dance dj & trance dance facilitator<br>
      freelance fullstack java/js developer<br>
      ...forever learning...
    </p>
    <TheLinks />
  </div>
  <FooterComponent />
</template>

<style>
a,
.primary {
  text-decoration: none;
  color: hsla(53, 70.5%, 35.9%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    color: hsla(53, 70.5%, 35.9%, 0.8);
  }
}
</style>
