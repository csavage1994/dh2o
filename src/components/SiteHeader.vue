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
  height: 50px;
  border-bottom: 1px solid #ccc;
  background-color: #f5f5f5;
  background: linear-gradient(#fff, #e3e3e3);
}
h1 {
  font-size: 1.3em;
}
.title {
  line-height: 50px;
  color: black;
  margin-left: 3vw;
  display: inline-block;
}
</style>
