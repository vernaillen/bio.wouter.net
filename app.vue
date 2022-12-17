<script setup lang="ts">
if (process.client) {
  const hostname = window.location.hostname
  if (
    hostname !== 'links.wouter.net'
    && hostname !== 'localhost'
    && hostname !== '127.0.0.1'
    && hostname !== '10.0.2.17'
    && !hostname.includes('netlify.app')
  ) window.location.href = 'https://links.wouter.net'
}
</script>

<template>
  <HeaderComponent />
  <div class="main">
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
    <LinkItem v-for="link, index in useLinks()" :key="index" :link="link" :index="index.toString()" />
  </div>
  <FooterComponent />
</template>

<style>
#__nuxt {
  max-width: 620px;
  margin: 0 auto 30px auto;

  font-weight: normal;
}
.main {
  padding: 0 1rem;
  margin-top: 20px;
  line-height: 1.5;
  text-align: center;
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
</style>
