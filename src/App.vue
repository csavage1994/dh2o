<template>
  <div id="app">
    <siteHeader></siteHeader>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader';

export default {
  name: 'app',
  components: {
    SiteHeader
  }
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
