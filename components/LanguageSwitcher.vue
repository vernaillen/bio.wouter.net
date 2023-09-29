<script setup lang="ts">
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div class="inline-flex relative">
    <UButton variant="ghost" size="xs" class="mx-1 border-none hover:border-none" :to="switchLocalePath('nl')" :class="locale === 'nl' ? '' : 'opacity-50'">
      Nederlands
      <template #trailing>
        <UIcon :name="'i-circle-flags-nl'" />
      </template>
    </UButton>
    <UButton variant="ghost" size="xs" class="mx-1" :to="switchLocalePath('en')" :class="locale === 'en' ? '' : 'opacity-50'">
      English
      <template #trailing>
          <UIcon :name="'i-circle-flags-en'" />
        </template>
    </UButton>
  </div>
</template>
