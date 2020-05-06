<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <h2 class="primary--text">Chat Username</h2>
        <v-form
          @submit.prevent="onLogin"
          ref="form"
          v-model="valid"
          lazy-validation
          class="mt-7 mb-7"
        >
          <v-text-field
            v-model="name"
            outlined
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
            Sign in
            <span style="display: none" class="custom-loader">
              <v-icon light>cached</v-icon>
            </span>
          </v-btn>
        </v-form>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    show1: false,
    show2: false,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length >= 8) || "Name must be less than 8 characters"
    ]
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
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
