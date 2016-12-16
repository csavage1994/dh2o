<template>
  <div id="app">
    <siteHeader></siteHeader>
    <contentSection></contentSection>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader';
import ContentSection from './components/ContentSection';

export default {
  name: 'app',
  components: {
    SiteHeader,
    ContentSection,
  },
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  color: #2c3e50;
}
body, h1, div, span {
  margin: 0;
}
h1 {
  font-size: 1.5em;
}
</style>
