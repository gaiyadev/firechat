<template>
  <v-container>
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <v-card elevation="7">
          <v-toolbar flat color="primary" dark>
            <v-toolbar-title>User Authentication</v-toolbar-title>
          </v-toolbar>
          <v-tabs vertical>
            <v-tab>
              <v-icon left>mdi-account</v-icon>Login
            </v-tab>
            <v-tab>
              <v-icon left>mdi-lock</v-icon>Register
            </v-tab>
            <v-tab>
              <v-icon left>mdi-access-point</v-icon>Option 3
            </v-tab>
            <v-tab-item>
              <v-card flat>
                <Login></Login>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <Register></Register>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.</p>

                  <p
                    class="mb-0"
                  >Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.</p>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </v-container>
</template>
<script>
import Login from "../components/Login";
import Register from "../components/Register";

export default {
  components: {
    Login,
    Register
  },
  data() {
    return {};
  }
};
</script>