<script setup lang="ts">
import dayjs from 'dayjs'
import type { CommitResponse } from '~~/types/github'

const { data: commits } = useLazyAsyncData<CommitResponse[]>('commits', () => $fetch('https://api.github.com/repos/vernaillen/links.vernaillen.com/commits'))
</script>

<template>
  <p>
    <a href="https://github.com/vernaillen/links.vernaillen.com" target="_blank">find the code on <Icon name="uil:github" /> github</a>
    <span v-if="commits && commits[0]"><br>
      <a :href="commits[0].html_url" target="_blank">last commit: {{ dayjs (commits[0].commit.committer.date).format("DD MMM YYYY") }}</a>
      by <a :href="commits[0].author.html_url" target="_blank">
        <img v-if="commits[0].author.avatar_url" alt="Avatar of GitHub commit author" class="avatar-user inline-block" :src="commits[0].author.avatar_url">
        {{ commits[0].author.login }}
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
