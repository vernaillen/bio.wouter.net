<script setup lang="ts">
function easeInOutQuad(
  currentTime: number,
  start: number,
  change: number,
  duration: number,
) {
  currentTime /= duration / 2
  if (currentTime < 1)
    return (change / 2) * currentTime * currentTime + start
  currentTime--
  return (-change / 2) * (currentTime * (currentTime - 2) - 1) + start
}

function scrollToTop(event: Event) {
  event.preventDefault()
  const to = 0
  const duration = 500
  const element = document.documentElement
  const start = element.scrollTop
  const change = to - start
  const increment = 20
  let currentTime = 0

  const animateScroll = () => {
    currentTime += increment

    const val = easeInOutQuad(currentTime, start, change, duration)

    element.scrollTop = val

    if (currentTime < duration)
      setTimeout(animateScroll, increment)
  }
  animateScroll()
}

onMounted(() => {
  if (process.client) {
    window.onscroll = function () {
      const headerElement = document.querySelector('header') as HTMLElement
      if (headerElement) {
        if (window.scrollY > 100)
          headerElement.classList.add('sticky')
        else
          headerElement.classList.remove('sticky')

        // show or hide the back-top-top button
        const backToTop = document.querySelector('.back-to-top') as HTMLElement
        if (
          document.body.scrollTop > 50
                || document.documentElement.scrollTop > 50
        )
          backToTop.style.display = 'flex'
        else
          backToTop.style.display = 'none'
      }
    }
  }
})
</script>

<template>
  <footer>
    <GitHub />
    <p class="text-body-color text-base text-center">
      &copy; {{ useCurrentYear() }} <NuxtLink href="https://vernaillen.dev" target="_blank">
        Wouter Vernaillen
      </NuxtLink>
    </p>
    <NuxtLink
      href="#__nuxt"
      class="back-to-top hidden items-center justify-center bg-primary text-white w-10 h-10 rounded-md fixed bottom-8 right-8 left-auto z-[999] hover:shadow-signUp hover:bg-opacity-80 shadow-md animate__animated animate__slideInUp"
      @click="scrollToTop($event)"
    >
      <span class="w-3 h-3 border-t border-l border-white rotate-45 mt-[6px]" />
    </NuxtLink>
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
