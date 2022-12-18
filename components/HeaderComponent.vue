<script setup lang="ts">
const colorMode = useColorMode()
const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
const iconClass = (color: string) => {
  if (colorMode.value === color)
    return 'opacity-50 hover:opacity-100'
  return 'opacity-0 hover:opacity-0'
}
</script>

<template>
  <header class="mt-0 text-center">
    <IconLogo class="block mt-0 mb-5 mx-auto" />
    <h3 class="mb-5 font-medium text-xl">
      wouter <span class="primary font-medium">on the</span> net
    </h3>
    <ClientOnly>
      <Icon
        v-for="color of ['light', 'dark']"
        :key="color"
        :class="iconClass(color)"
        :name="`material-symbols:${color}-mode`" size="1.5em"
        class="absolute top-4 right-4 cursor-pointer hover:text-primary"
        @click="toggleColorMode"
      />
    </ClientOnly>
  </header>
</template>

<style scoped>
header.sticky {
    position: fixed;
    top: 0;
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
