<script setup lang="ts">
import dayjs from 'dayjs'
import type { CommitResponse } from '@/types/github'

const { data: commits } = useLazyAsyncData<CommitResponse[]>('commits', () => $fetch('https://api.github.com/repos/vernaillen/bio.wouter.net/commits'))
</script>

<template>
  <p>
    <NuxtLink href="https://github.com/vernaillen/bio.wouter.net" target="_blank">
      find the code on <UIcon name="i-uil-github" class="-mb-[1px] w-3 h-3" />
    </NuxtLink>
    <span v-if="commits && commits[0]"><br>
      <NuxtLink :href="commits[0].html_url" target="_blank">
        last commit: {{ dayjs (commits[0].commit.committer.date).format("DD MMM YYYY") }}
      </NuxtLink>
      by
      <NuxtLink :href="commits[0].author.html_url" target="_blank" class="hover:opacity-70">
        {{ commits[0].author.login }}
      </NuxtLink>
    </span>
  </p>
</template>
