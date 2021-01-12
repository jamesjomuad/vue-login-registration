<template>
  <v-app>
    <v-main>
      <div class="container-fluid">
        <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  watch: {
    '$route' (to) {
      document.title = (to.meta.title) || 'Basic Authentication'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
