<template>
  <v-toolbar dark color="teal lighten-3">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Torks Web</v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link to="/home">
      <v-btn flat>HOME</v-btn>
    </router-link>
    <router-link to="/item_list">
      <v-btn flat>Item List</v-btn>
    </router-link>
    <v-btn flat v-on:click="axiosLogout">logout</v-btn>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    logout: String
  },

  methods: {
    axiosLogout() {
      axios
        .post(this.logout)
        .then(function(response) {}.bind(this))

        .catch(
          function(error) {
            console.log(error);
            if (error.response) {
              if (error.response.status) {
                if (
                  error.response.status == 401 ||
                  error.response.status == 419
                ) {
                  var parser = new URL(this.logout);
                  location.href = parser.origin;
                }
              }
            }
          }.bind(this)
        );
    }
  }
};
</script>