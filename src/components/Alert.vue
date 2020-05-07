<template>
  <v-alert border="left" v-model="alert" dismissible @input="omClose" type="error">{{ text }}</v-alert>
</template>
<script>
export default {
  alert: false,
  props: ["text"],
  methods: {
    omClose() {
      this.$emit("dismissed");
    }
  }
};
</script>
