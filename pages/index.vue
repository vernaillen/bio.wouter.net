<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="main container mt-5 text-center text-dark dark:text-gray-200">
    <div class="mt-8 mb-6">
      <SocialIcons />
    </div>
    <div class="my-5 mb-2 text-primary-500">
      {{ t('title') }}
    </div>
    <p class="text-sm mb-2 prose dark:prose-invert">
      {{ t('description1') }}<br>
      {{ t('description2') }}<br>
      {{ t('description3') }}<br>
      {{ t('description4') }}
    </p>
    <TheLinks />
  </div>
</template>
