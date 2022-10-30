<script setup lang="ts">
import LinkItem from './LinkItem.vue'
</script>

<template>
  <LinkItem
    url="https://soundcloud.com/woutervernaillen/release-your-inner-dancer-ecstatic-dance"
    soundcloud="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1337357878&color=%23ff5500&inverse=false&auto_play=false&show_user=true"
  >
    <template #heading>
      Release Your Inner Dancer
    </template>
    <template #subheading>
      Ecstatic Dance dj-set recorded on 3 September 2022 in Haaltert
    </template>
  </LinkItem>
  <LinkItem url="https://harmonics.be">
    <template #heading>
      Harmonics.be
    </template>
    <template #subheading>
      Healing power of sound, music and dance
    </template>
    <p>ecstatic dance, immersive soundbaths, music production,...</p>
  </LinkItem>
  <LinkItem url="https://vernaillen.dev">
    <template #heading>
      Vernaillen.dev
    </template>
    <template #subheading>
      Senior Full Stack Developer
    </template>
    <p>
      a brand new website for my freelance consultancy services as a full stack
      java developer
    </p>
  </LinkItem>

  <LinkItem url="https://vue-audiomotion-analyzer.dev/">
    <template #heading>
      Vue AudioMotion Analyzer
    </template>
    <template #subheading>
      high-resolution real-time audio spectrum analyzer
    </template>
    <p>Vue plugin wrapping Henrique Vianna's audioMotion-analyzer</p>
  </LinkItem>

  <LinkItem
    url="https://www.youtube.com/watch?v=whKBW_hu4nE"
    youtube="https://www.youtube.com/embed/whKBW_hu4nE"
  >
    <template #heading>
      Meditative melody
    </template>
    <template #subheading>
      Live jam on the Subharmonicon
    </template>
  </LinkItem>
</template>
