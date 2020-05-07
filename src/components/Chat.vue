<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
          <v-card elevation="11" class="pt-10">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1 primary--text">
                  <h5 class="primary--text">Real-Time Chat App.</h5>
                </v-list-item-title>
                <v-divider class="primary"></v-divider>
                <v-list-item-subtitle>
                  <v-chip class="ma-2" color="green" text-color="white">Secondary</v-chip>
                  <div>
                    <v-chip class="ma-7 float-md-right pr-9" color="primary">Primary</v-chip>
                  </div>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions elevation="11">
              <CreateChat></CreateChat>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>
    </v-container>
  </v-form>
</template>


<script>
import CreateChat from "../components/CreateChat";

export default {
  components: {
    CreateChat
  },
  data: () => ({
    password: "Password",
    show: false,
    message: "",
    marker: true,
    iconIndex: 0,
    icons: [
      "mdi-emoticon",
      "mdi-emoticon-cool",
      "mdi-emoticon-dead",
      "mdi-emoticon-excited",
      "mdi-emoticon-happy",
      "mdi-emoticon-neutral",
      "mdi-emoticon-sad",
      "mdi-emoticon-tongue"
    ]
  })
};
</script>