<script setup lang="ts">
import dayjs from 'dayjs'
import type { CommitResponse } from '~~/types/github'

const { data: commits } = useLazyAsyncData<CommitResponse[]>('commits', () => $fetch('https://api.github.com/repos/vernaillen/links.vernaillen.com/commits'))
</script>

<template>
  <p>
    <NuxtLink href="https://github.com/vernaillen/links.vernaillen.com" target="_blank">
      find the code on <Icon name="uil:github" /> github
    </NuxtLink>
    <span v-if="commits && commits[0]"><br>
      <NuxtLink :href="commits[0].html_url" target="_blank">last commit: {{ dayjs (commits[0].commit.committer.date).format("DD MMM YYYY") }}</NuxtLink>
      by <NuxtLink :href="commits[0].author.html_url" target="_blank">
        <Image
          v-if="commits[0].author.avatar_url"
          :width="13"
          :height="16"
          alt="Avatar of GitHub commit author"
          class="avatar-user inline-block"
          :src="commits[0].author.avatar_url"
        />
        {{ commits[0].author.login }}
      </NuxtLink>
    </span>
  </p>
</template>

<style scoped>
img.avatar-user {
    height: 16px;
    vertical-align: middle;
    padding-bottom: 3px;
    border-radius: 50% !important;
}
</style>
