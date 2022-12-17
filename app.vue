<script setup lang="ts">
const colorMode = useColorMode()
const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

if (process.client) {
  const hostname = window.location.hostname
  if (
    hostname !== 'links.wouter.net'
    && hostname !== 'localhost'
    && hostname !== '127.0.0.1'
    && hostname !== '10.0.2.17'
    && !hostname.includes('netlify.app')
  ) window.location.href = 'https://links.wouter.net'

  if (window.matchMedia('(prefers-color-scheme: dark)').matches)
    colorMode.preference = 'dark'
}
</script>

<template>
  <header>
    <Icon name="line-md:light-dark-loop" size="1.5em" class="colorModeIcon" @click="toggleColorMode()" />
    <IconLogo class="logo" />

    <div class="wrapper">
      <h3 class="wouternet">
        wouter <span class="primary">on the</span> net
      </h3>
      <div class="socialIcons">
        <a
          v-for="social, index in useSocials()"
          :key="index"
          class="ud-text-body-color hover:ud-text-primary ud-mx-3"
          :href="social.url"
          :rel="social.name === 'Mastodon' ? 'rel' : 'noopener'"
          :title="social.name" :alt="social.name" :aria-label="social.name"
          target="_blank"
        >
          <Icon :name="social.icon" class="animated fadeIn" />
        </a>
      </div>
      <p>
        Wouter Vernaillen<br>
        ecstatic dance dj & trance dance facilitator<br>
        freelance fullstack java/js developer<br>
        ...forever learning...
      </p>
    </div>
  </header>
  <LinkItem v-for="link, index in useLinks()" :key="index" :link="link" :index="index.toString()" />
  <footer class="wrapper">
    <GitHub />
  </footer>
</template>

<style>
#__nuxt {
  max-width: 620px;
  margin: 0 auto 30px auto;
  padding: 0 1rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 1rem;
}

.colorModeIcon {
  position: absolute;
  top: 12px;
  right: 0;
  cursor: pointer;
}

.profileImage {
  border-radius: 25%;
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}

a,
.primary {
  text-decoration: none;
  color: hsla(53, 70.5%, 35.9%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    color: hsla(53, 70.5%, 35.9%, 0.8);
  }
}

.wrapper {
  text-align: center;
}

h1 {
  font-weight: 500;
  font-size: 2rem;
}

h3 {
  font-size: 1.2rem;
}

h4 {
  font-size: 1.1rem;
}

h3.wouternet {
  margin-bottom: 18px;
}

p {
  font-size: 0.8rem;
  padding: 10px;
}

.socialIcons {
  margin: 12px;
  text-align: center;
}
.socialIcons a {
  font-size: 1.5rem;
  margin: 6px;
}
footer {
  margin: 35px 10px;
}
footer p {
  font-size: 0.7rem;
}
</style>
