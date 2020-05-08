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
                    <!-- <v-subheader inset>{{ Date.now() }}</v-subheader> -->
                    <v-list-item v-for="chat in messages" :key="chat.id">
                      <v-list-item-content v-chat-scroll="{always: false, smooth: true}">
                        <v-list-item-title class="info--text">{{ chat.name }}</v-list-item-title>
                        <v-chip color="primary">{{ chat.message }}</v-chip>
                        <v-list-item-subtitle>{{ chat.timestamp }}</v-list-item-subtitle>
                      </v-list-item-content>
                      <!-- <v-list-item-action class="pt-5">
                        <v-list-item-content>
                          <v-list-item-title class="primary--text">{{ $route.params.name }}</v-list-item-title>
                          <v-chip color="success">hello</v-chip>
                          <v-list-item-subtitle>{{ Date.now() }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item-action>-->
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
import * as firebase from "firebase";
import moment from "moment";

export default {
  // props: ["name"],
  components: {
    CreateChat
  },
  data() {
    return {
      messages: [],
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
    };
  },

  methods: {
    Messages() {
      let ref = firebase
        .firestore()
        .collection("messages")
        .orderBy("timestamp");
      ref.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type == "added") {
            let doc = change.doc;
            this.messages.push({
              id: doc.id,
              name: doc.data().name,
              message: doc.data().message,
              timestamp: moment(doc.data().timestamp).format("LTS")
            });
          }
        });
      });
    }
  },
  created() {
    this.Messages();
    console.log(this.messages);
  }
};
</script>