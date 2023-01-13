<script setup lang="ts">
import dayjs from 'dayjs'
import type { CommitResponse } from '~~/types/github'

const { data: commits } = await useLazyFetch<CommitResponse[]>('https://api.github.com/repos/vernaillen/links.wouter.net/commits')
const lastCommit = ref()
if (commits.value && commits.value[0])
  lastCommit.value = commits.value[0]
</script>

<template>
  <p>
    <a href="https://github.com/vernaillen/links.wouter.net" target="_blank">find the code on <Icon name="uil:github" /> github</a>
    <span v-if="lastCommit"><br>
      <a :href="lastCommit.html_url" target="_blank">last commit: {{ dayjs(lastCommit.commit.committer.date).format("DD MMM YYYY") }}</a>
      by <a :href="lastCommit.author.html_url" target="_blank">
        <img v-if="lastCommit.author.avatar_url" alt="Avatar of GitHub commit author" class="avatar-user inline-block" :src="lastCommit.author.avatar_url">
        {{ lastCommit.author.login }}
      </a>
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
