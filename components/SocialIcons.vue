<template>
  <div class="socialIcons">
    <NuxtLink
      v-for="social, index in useSocials()"
      :key="index"
      :href="social.url.href"
      :title="social.name"
      :alt="social.name"
      :aria-label="social.name"
      rel="me"
      class="hover:text-primary mx-2"
      target="_blank"
    >
      <UButton color="primary" variant="soft" :icon="social.icon" size="xs" />
    </NuxtLink>
  </div>
</template>
