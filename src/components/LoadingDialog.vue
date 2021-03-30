<template>
  <b-card class="cardSize">
    <b-card-sub-title class="mb-2">Loading</b-card-sub-title>
    <rotate-loader :loading="loading" :color="color" :size="size"></rotate-loader>
  </b-card>
</template>

<script>
export default {
  name: "LoadingDialog",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.cardSize {
  max-width: 20rem;
  max-height: 15rem;
  margin: auto;
}
</style>
