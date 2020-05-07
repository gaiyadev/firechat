<template>
  <v-alert border="left" dismissible @input="omClose" type="error">{{ text }}</v-alert>
</template>
<script>
export default {
  props: ["text"],
  methods: {
    omClose() {
      this.$emit("dismissed");
    }
  }
};
</script>
