<template>
  <header>
    <v-toolbar dark :color="color.base">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Torks Web</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field clearable name="memo" label="memo" id="memo"></v-text-field>
      <router-link to="/">
        <v-btn :color="color.icon" depressed>
          <v-icon>fas fa-home</v-icon>
          <span>HOME</span>
        </v-btn>
      </router-link>
      <v-btn :color="color.icon" @click="axiosLogout()" depressed>
        <v-icon>fas fa-sign-out-alt</v-icon>
        <span>LOG OUT</span>
      </v-btn>
      <v-btn :color="color.icon" @click="axiosLogin()" depressed>
        <v-icon>fas fa-smile</v-icon>
        <span id="username">{{ userinfo.name }}</span>
      </v-btn>
    </v-toolbar>
  </header>
</template>

<script>
export default {
  props: ["logout"],
  data: function() {
    return {
      userinfo: { name: "loading" },
      color: {
        base: "teal lighten-3",
        icon: "teal lighten-3"
      }
    };
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
      window.location.href = "/login";
    },
    axiosLogin() {
      this.axiosLogout();
    }
  },
  created: function() {
    axios.get("/userinfo").then(response => {
      if (response.data === "GUEST") {
        this.userinfo.name = "GUEST";
      } else {
        this.userinfo = response.data;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>

<style lang="scss" scoped>
.v-icon {
  margin-right: 10px;
}
</style>
