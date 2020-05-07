<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
          <v-card elevation="11" class="pt-10">
            <v-chip class="ma-2" color="green" text-color="white">Secondary</v-chip>
            <v-chip class="ma-7 float-md-right pr-9" color="primary">Primary</v-chip>

            <v-form class="mt-10 mb-6 pr-8 pl-8 pb-8 pt-4">
              <v-text-field
                v-model="message"
                :append-outer-icon="message ? 'mdi-send' : 'mdi-microphone'"
                :prepend-icon="icon"
                filled
                clear-icon="mdi-close-circle"
                clearable
                shaped
                outlined
                label="Message"
                type="text"
                @click:append="toggleMarker"
                @click:append-outer="sendMessage"
                @click:prepend="changeIcon"
                @click:clear="clearMessage"
              ></v-text-field>
            </v-form>
          </v-card>
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>
    </v-container>
  </v-form>
</template>


<script>
export default {
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
  }),

  computed: {
    icon() {
      return this.icons[this.iconIndex];
    }
  },

  methods: {
    toggleMarker() {
      this.marker = !this.marker;
    },
    sendMessage() {
      this.resetIcon();
      this.clearMessage();
    },
    clearMessage() {
      this.message = "";
    },
    resetIcon() {
      this.iconIndex = 0;
    },
    changeIcon() {
      this.iconIndex === this.icons.length - 1
        ? (this.iconIndex = 0)
        : this.iconIndex++;
    }
  }
};
</script>