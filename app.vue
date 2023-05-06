<script setup lang="ts">
if (process.client) {
  const hostname = window.location.hostname
  if (
    hostname !== 'links.vernaillen.com' &&
    hostname !== 'localhost' &&
    hostname !== '127.0.0.1' &&
    !hostname.startsWith('10.0.2.') &&
    !hostname.includes('netlify.app')
  ) { window.location.href = 'https://links.vernaillen.com' }
}
</script>

<template>
  <HeaderComponent />
  <div class="main container max-w-[620px] mt-5 text-center">
    <div class="socialIcons mt-8 mb-6">
      <NuxtLink
        v-for="social, index in useSocials()"
        :key="index"
        :href="social.url.href"
        :title="social.name"
        :alt="social.name"
        :aria-label="social.name"
        rel="me"
        class="text-body-color hover:text-primary mx-2"
        target="_blank"
      >
        <Icon :name="social.icon" size="1.5rem" class="animated fadeIn" />
      </NuxtLink>
    </div>
    <p>
      Wouter Vernaillen<br>
      ecstatic dance dj & trance dance facilitator<br>
      freelance fullstack java/js developer<br>
      ...forever learning...
    </p>
    <LinkItem v-for="link, index in useLinks()" :key="index" :link="link" :index="index.toString()" />
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
