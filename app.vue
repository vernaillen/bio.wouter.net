<script setup lang="ts">
if (process.client) {
  const hostname = window.location.hostname
  if (
    hostname !== 'links.wouter.net'
    && hostname !== 'localhost'
    && hostname !== '127.0.0.1'
    && !hostname.includes('netlify.app')
  ) window.location.href = 'https://links.wouter.net'
}
</script>

<template>
  <header>
    <IconLogo class="logo" />

    <div class="wrapper">
      <h3 class="wouternet">
        wouter <span class="primary">on the</span> net
      </h3>
      <img
        src="./assets/wouter_profileImage.jpg"
        alt="Wouter Vernaillen Profile Image"
        class="profileImage"
      >
      <h4>Wouter Vernaillen</h4>
      <p>
        Sound alchemist, Ecstatic Dance DJ, Trance Dance facilitator<br>
        Freelance Java/JS Developer, Forever learning...
      </p>
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
    </div>
  </header>
  <div>
    <LinkItem v-for="link, index in useLinks()" :key="index" :link="link" />
  </div>
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
  margin-bottom: 30px;
}

.logo {
  display: block;
  margin: 0 auto 1.6rem;
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
  margin-bottom: 20px;
}

p {
  padding: 15px;
}
.socialIcons {
  margin: 10px;
  text-align: center;
}

a {
  font-size: 1.5rem;
  margin: 6px;
}
</style>
