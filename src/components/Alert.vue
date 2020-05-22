<template>
  <v-alert v-model="alert" border="left" dismissible @input="omClose" type="error">{{ text }}</v-alert>
</template>
<script>
//import func from "../../vue-temp/vue-editor-bridge";
export default {
  props: ["text"],
  data() {
    return {};
  },
  methods: {
    omClose() {
      this.$emit("dismissed");
    }
  }
};
</script>
