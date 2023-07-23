<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <header class="mt-0">
    <div class="container mt-0 text-center relative">
      <IconLogo class="block mt-0 mb-5 mx-auto" />
      <h3 class="mb-5 font-semibold tracking-wide text-dark dark:text-light text-3xl">
        wouter <span class="primary font-semibold">on the</span> net
      </h3>
      <UIcon
        v-show="colorMode.value === 'dark'"
        name="i-material-symbols-dark-mode"
        class="absolute top-4 right-4 cursor-pointer text-primary-500 opacity-70 hover:opacity-100 w-5 h-5"
        @click="colorMode.preference = 'light'"
      />
      <UIcon
        v-show="colorMode.value === 'light'"
        name="i-material-symbols-light-mode"
        class="absolute top-4 right-4 cursor-pointer text-primary-500 opacity-70 hover:opacity-100 w-5 h-5"
        @click="colorMode.preference = 'dark'"
      />
    </div>
  </header>
</template>

<style scoped>
header.sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9995;
    width: 100%;
    --tw-bg-opacity: .2;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(.4, 0, .2, 1);
    transition-duration: .15s;

    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    box-shadow: inset 0 -1px #0000001a;
}
.dark-mode header.sticky {
    background-color: rgb(156 142 27 / var(--tw-bg-opacity));
}
</style>
