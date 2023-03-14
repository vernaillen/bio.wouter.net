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
  index: {
    type: String,
    required: true,
  },
})
const linkItemState = useLinkItemState()
const { isAllCollapsed } = storeToRefs(linkItemState)
const itemWrapper = ref<HTMLElement>()
/*
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

function scrollToItem(el: HTMLElement) {
  const itemBottom = el.offsetTop + el.offsetHeight

  if (itemBottom > window.innerHeight) {
    const duration = 500
    const element = document.documentElement
    const start = element.scrollTop
    const change = itemBottom - window.innerHeight
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
*/
const openUrl = () => {
  window.open(props.link.url, '_blank')
}
const expanded = ref(false)
const toggle = async () => {
  linkItemState.collapseAll()
  if (!expanded.value) {
    await nextTick()
    expanded.value = !expanded.value
    linkItemState.expandItem()
    /* await nextTick()
    if (itemWrapper.value)
      scrollToItem(itemWrapper.value) */
  }
}
watch(isAllCollapsed, (newVal) => {
  if (newVal)
    expanded.value = false
})
onMounted(() => {
  if (props.link.expand) {
    expanded.value = true
    linkItemState.expandItem()
  }
})
</script>

<template>
  <div :id="`item${index}`" ref="itemWrapper" class="itemWrapper">
    <Icon
      name="uil:angle-right"
      size="1.6em"
      :class="expanded ? 'icon-expanded' : ''"
      @click="toggle"
    />
    <div class="item" @click="toggle">
      <div class="details">
        <a href="#">
          {{ link.title }}
        </a>
        <br>
        <span class="sub">{{ link.subTitle }}</span><br>
      </div>
    </div>
  </div>
  <div v-if="expanded" class="itemExpandedWrapper">
    <div class="itemExpanded animate__animated animate__slideInDown animate__faster">
      <p v-if="link.content">
        {{ link.content }}
      </p>
      <NuxtImg
        v-if="link.image"
        :src="link.image"
        width="586" height="200"
        class="cursor-pointer"
        :alt="link.title"
        @click="openUrl"
      />
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
      <button class="my-1 py-1 px-3 text-white bg-primary rounded-sm" @click="openUrl">
        Open link
      </button>
    </div>
  </div>
</template>

<style scoped>
.itemWrapper {
  position: relative;
  overflow: hidden;
  margin-top: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  z-index: 100;
}
.dark-mode .itemWrapper {
  border: 1px solid var(--dark-color-border);
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
.dark-mode .itemWrapper .item {
  background-color: var(--dark-color-background);
}
.itemWrapper .item:hover {
  -moz-transform: scale(1.03);
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
}
.itemExpandedWrapper {
  overflow: hidden;
}
.itemExpandedWrapper .itemExpanded {
  z-index: 90;
  overflow: hidden;
  text-align: center;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background-color: var(--color-background-transparent);
}
.dark-mode .itemExpandedWrapper .itemExpanded {
  background-color: var(--dark-color-background-transparent);
}
.dark-mode .itemExpandedWrapper .itemExpanded button {
  color: var(--dark-color-text-button);
  border: 1px solid var(--dark-color-border);
}

.details {
  flex: 1;
  text-align: center;
}

.icon {
  position: absolute;
  top: 8px;
  left: 6px;
  color: var(--color-text);
  z-index: 100;
  cursor: pointer;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.dark-mode .icon {
  color: var(--dark-color-text);
}
.icon.icon-expanded {
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
}

.details a {
  font-size: 1rem;
  font-weight: 500;
}
.details .sub {
  font-size: 0.8rem;
  color: var(--color-heading);
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.dark-mode .details .sub {
  color: var(--dark-color-heading);
}
</style>

<style>
.itemWrapper p {
  padding: 20px;
}
</style>
