<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-form @submit.prevent="onChat" class="mt-10 mb-6 pr-8 pl-8 pb-8 pt-4">
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      password: "Password",
      show: false,
      message: "",
      name: this.$route.params.name,
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
      if (this.message) {
        this.$store.dispatch("startChat", {
          name: this.name,
          message: this.message,
          timestamp: this.timestamp
        });
      }
      this.resetIcon();
      this.clearMessage();
      // 09079451911.
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