<script setup lang="ts">
import type { PropType } from 'vue'
import { nextTick, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useLinkItemState } from '~~/stores/linkItemState'
import { type Link } from '~~/types/link'
const props = defineProps({
  link: {
    type: Object as PropType<Link>,
    required: true,
  },
})
const linkItemState = useLinkItemState()
const { isAllCollapsed } = storeToRefs(linkItemState)

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

function scrollToItem(el: MouseEvent) {
  if (el.screenY > window.innerHeight) {
    const to = el.screenY
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
}

const openUrl = () => {
  window.open(props.link.url, '_blank')
}
const expanded = ref(false)
const toggle = async (el: MouseEvent) => {
  linkItemState.collapseAll()
  if (!expanded.value) {
    await nextTick()
    expanded.value = !expanded.value
    linkItemState.expandItem()
    scrollToItem(el)
  }
}
watch(isAllCollapsed, (newVal) => {
  if (newVal)
    expanded.value = false
})
</script>

<template>
  <div class="itemWrapper">
    <Icon v-if="!expanded" name="uil:angle-right" size="2em" class="icon" @click="toggle" />
    <Icon v-if="expanded" name="uil:angle-down" size="2em" class="icon" @click="toggle" />
    <div class="item" @click="toggle">
      <div class="details">
        <a href="#">
          {{ link.title }}
        </a>
        <br>
        <span class="sub">{{ link.subTitle }}</span><br>
      </div>
    </div>
    <div v-if="expanded" class="itemExpanded animated fadeIn">
      <p v-if="link.content">
        {{ link.content }}
      </p>
      <div v-if="link.soundcloud" class="player">
        <iframe
          width="100%"
          height="166"
          :src="link.soundcloud"
          title="SoundCloud"
          frameborder="0"
        />
      </div>
      <div v-if="link.youtube" class="player">
        <iframe
          width="100%"
          height="315"
          :src="link.youtube"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <button @click="openUrl">
        Open link
      </button>
    </div>
  </div>
</template>

<style scoped>
.itemWrapper {
  position: relative;
  overflow: hidden;
  margin-top: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: 0.375rem;
}
.itemWrapper svg.svg-inline--fa {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
  cursor: pointer;
}

.itemWrapper .item {
  display: flex;
  background-color: var(--color-background);
  border-radius: 8px;
  padding: 10px;

  margin: 0;
  max-width: 100%;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  cursor: pointer;
}
.itemWrapper .item:hover {
  -moz-transform: scale(1.03);
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
}
.itemWrapper .itemExpanded {
  text-align: center;
  background-color: var(--color-background-transparent);
}
.itemWrapper .itemExpanded button {
  background-color: hsla(53, 70.5%, 35.9%, 1);
  color: var(--color-text-button);
  cursor: pointer;
  margin-bottom: 10px;
  padding: 10px 15px;
  font-weight: 600;
  border: 1px solid var(--color-border);
  border-radius: 0.2rem;
}

.details {
  flex: 1;
  text-align: center;
}

.icon {
  position: absolute;
  top: 10px;
  left: 10px;
  color: var(--color-text);
  z-index: 100;
  cursor: pointer;
}

.details a {
  font-size: 1.1rem;
  font-weight: 500;
}
.details .sub {
  font-size: 0.9rem;
  color: var(--color-heading);
}
</style>

<style>
.itemWrapper p {
  padding: 20px;
}
</style>
