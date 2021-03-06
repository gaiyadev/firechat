<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute temporary elevation="9">
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>FireChat</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in menuItems" :key="item.title" link router :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="userIsAuthenticated" @click="logout">
          <v-list-item-icon>
            <v-icon>exit_to_app</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark elevation="9">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>

      <div class="d-flex align-center">
        <h2>
          <router-link style="text-decoration:none;" class="white--text" id="log" to="/">FireChat</router-link>
        </h2>
      </div>
      <v-spacer></v-spacer>
      <v-btn to="/register" text class="hidden-xs-only" v-if="!userIsAuthenticated">
        <span class="mr-2">Register</span>
        <v-icon>supervisor_account</v-icon>
      </v-btn>
      <v-btn text to="/login" class="hidden-xs-only" v-if="!userIsAuthenticated">
        <span class="mr-2">Login</span>
        <v-icon>perm_identity</v-icon>
      </v-btn>
      <v-btn text to="/chat" class="hidden-xs-only" v-if="userIsAuthenticated">
        <span class="mr-2">Chat</span>
        <v-icon>chat_bubble_outline</v-icon>
      </v-btn>
      <v-btn text class="hidden-xs-only" v-if="userIsAuthenticated" @click="logout">
        <span class="mr-2">Logout</span>
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <!-- <HelloWorld /> -->
      <vue-page-transition name="fade-in-right">
        <router-view></router-view>
      </vue-page-transition>
    </v-content>
    <v-footer color="primary" padless>
      <v-row justify="center" no-gutters>
        <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">{{ link }}</v-btn>
        <v-col class="primary lighten-1 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>VueJS FireChat</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},

  data: () => ({
    drawer: false,
    links: ["Proudly powered by Vuetify + firebase"]
  }),
  computed: {
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
    menuItems() {
      let items = [
        {
          title: "Home",
          icon: "dashboard",
          link: "/"
        },
        {
          title: "Login",
          icon: "perm_identity",
          link: "/login"
        },
        {
          title: "Register",
          icon: "supervisor_account",
          link: "/register"
        }
      ];
      if (this.userIsAuthenticated) {
        items = [
          { title: "Home", icon: "dashboard", link: "/" },
          { title: "Chat", icon: "chat_bubble_outline", link: "/chat" }
        ];
      }
      return items;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logoutUser");
      this.$router.push("/");
      this.$toast.success("Logout successfully");
    }
  }
};
</script>
