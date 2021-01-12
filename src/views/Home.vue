<template>
  <div class="home">
    <div id="nav">
      <v-row align="center" justify="center">
        <v-btn class="mx-3" rounded large depressed link to="/login">
          Login
        </v-btn>
        <v-btn class="mx-3" rounded large depressed color="primary" link to="/register">
          Register
        </v-btn>
      </v-row>
    </div>

    <img alt="Vue logo" src="../assets/logo.png" class="mb-10">

    <v-row align="center" justify="space-around">
      <v-btn depressed @click="test()">Normal</v-btn>
      <v-btn depressed color="primary">Primary</v-btn>
      <v-btn depressed color="error">Error</v-btn>
      <v-btn depressed disabled>Disabled</v-btn>
    </v-row>

  </div>
</template>

<script>
  export default {
    name: 'Home',
    methods: {
      test() {
        console.log(this.$store.getters.isAuthenticated)
        // console.log(this.$store.getters.user)
      }
    }
  }
</script>