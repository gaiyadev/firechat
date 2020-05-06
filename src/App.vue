<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute temporary>
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
        <v-list-item v-for="item in items" :key="item.title" link router :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>

      <div class="d-flex align-center">
        <h2>
          <router-link style="text-decoration:none;" class="white--text" id="log" to="/">FireChat</router-link>
        </h2>
      </div>
      <v-spacer></v-spacer>
      <v-btn to="/register" text class="hidden-xs-only">
        <span class="mr-2">Register</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn text to="/login" class="hidden-xs-only">
        <span class="mr-2">Login</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <!-- <HelloWorld /> -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    // HelloWorld
  },

  data: () => ({
    drawer: false,
    items: [
      { title: "Home", icon: "dashboard", link: "/" },
      { title: "Login", icon: "question_answer", link: "/login" },
      { title: "Register", icon: "question_answer", link: "/register" }
    ]
    //
  })
};
</script>
