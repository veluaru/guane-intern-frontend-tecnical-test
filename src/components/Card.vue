<template>
  <b-card
    :bg-variant="cardColor"
    :title="item.title"
    :img-src="item.image"
    img-top
    class="cardSize"
    img-height="280"
    >
    <b-card-sub-title class="mb-2">{{ item.date }}</b-card-sub-title>
    <b-card-text>
      {{ item.description }}
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "Card",
  props: ["item"],
  data() {
    return {
      cardColor: "light",

    };
  },
  methods: {

  },
  mounted() {
    if (this.item.important) {
      this.cardColor = "warning";
    }
  },
};
</script>

<style lang="scss">
.cardSize {
  max-width: 17rem;
  min-width: 17rem;
  margin: auto;
}
</style>
