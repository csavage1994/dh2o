<template>
  <div class="header">
    <h1 class="title">Chicago Crime Reports</h1>
  </div>
</template>

<script>
export default {
  name: 'siteHeader',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  width: 100vw;
  height: 60px;
  background: blue;
}
.title {
  line-height: 60px;
  color: white;
  margin-left: 3vw;
  display: inline-block;
}
</style>
