<script setup lang="ts">
const colorMode = useColorMode()
const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

if (process.client && window.matchMedia('(prefers-color-scheme: dark)').matches)
  colorMode.preference = 'dark'
</script>

<template>
  <header>
    <IconLogo class="logo" />
    <h3 class="wouternet">
      wouter <span class="primary">on the</span> net
    </h3>
    <Icon name="line-md:light-dark-loop" size="1.5em" class="colorModeIcon" @click="toggleColorMode()" />
  </header>
</template>

<style scoped>
header {
    margin-top: 0;
    text-align: center;
}

header.sticky {
    position: fixed;
    top: 0;
    z-index: 9995;
    width: 100%;
    --tw-bg-opacity: .25;
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

.logo {
    display: block;
    margin: 0 auto 10px;
}
h3.wouternet {
    font-weight: 500;
    margin-bottom: 14px;
}

.colorModeIcon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}
</style>
