<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <v-card elevation="11" class="pt-10">
          <h2 class="primary--text">{{ title }}</h2>
          <v-form
            class="mt-10 mb-6 pr-8 pl-8 pb-8 pt-4"
            @submit.prevent="onStartChat"
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="name"
              outlined
              append-icon="person"
              error-count="4"
              shaped
              :counter="10"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>
            <v-btn
              x-large
              type="submit"
              block
              :disabled="!valid"
              color="primary"
              class="mr-4"
              @click="validate"
            >
              Start Chat
              <span style="display: none" class="custom-loader">
                <v-icon light>cached</v-icon>
              </span>
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: "Chat Username",
    valid: true,
    show1: false,
    show2: false,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length >= 4) || "Name must be less than 4 characters",
      v => /(?=.*[A-Z])/.test(v) || "Must have one uppercase character"
    ]
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    onStartChat() {
      if (this.name) {
        this.$router.push({
          name: "Chat",
          path: "/chat",
          params: { name: this.name }
        });
      }
    }
  }
};
</script>

<style scoped>
.custom-loader {
  /* animation: loader 1s infinite; */
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
