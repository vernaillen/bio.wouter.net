<template>
  <footer>
    <GitHub />
    <p class="text-body-color text-base text-center">
      &copy; {{ useCurrentYear() }} <NuxtLink href="https://vernaillen.dev" target="_blank">
        Wouter Vernaillen
      </NuxtLink>
    </p>
  </footer>
</template>

<style scoped>
footer {
    margin: 35px 10px;
    text-align: center;
}
footer p {
    font-size: 0.7rem;
}
</style>
