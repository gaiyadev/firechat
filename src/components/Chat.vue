<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
          <v-card elevation="11" class="pt-10">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1 primary--text">
                  <h5 class="primary--text">{{ title }}</h5>
                </v-list-item-title>
                <v-divider class="primary"></v-divider>
                <v-list-item-subtitle>
                  <v-list two-line subheader>
                    <v-subheader inset>{{Date.now()}}</v-subheader>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title class="info--text">Jude</v-list-item-title>
                        <v-chip color="primary">hello</v-chip>
                        <v-list-item-subtitle>{{ Date.now() }}</v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action class="pt-5">
                        <v-list-item-content>
                          <v-list-item-title class="primary--text">Obed</v-list-item-title>
                          <v-chip color="success">hello</v-chip>
                          <v-list-item-subtitle>{{ Date.now() }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item-action>
                    </v-list-item>

                    <v-divider inset></v-divider>
                  </v-list>
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
  props: ["name"],
  components: {
    CreateChat
  },
  data: () => ({
    title: "Real-Time Chat App.",
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