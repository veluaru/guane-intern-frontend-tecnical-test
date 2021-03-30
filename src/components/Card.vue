<template>
  <b-card
    :bg-variant="cardColor"
    :title="item.title"
    :img-src="item.image"
    img-top
    :class="hover"
    img-height="280"
    @mouseover="hover = 'cardHover'"
    @mouseleave="hover = 'cardSize'"
  >
    <b-card-sub-title class="mb-2">{{ item.date }}</b-card-sub-title>
    <b-card-text style="font-family: 'Trebuchet MS', sans-serif;">
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
      hover: "cardSize"
    };
  },
  methods: {},
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
  font-family: 'Trebuchet MS', sans-serif;
}
.cardHover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  max-width: 17rem;
  min-width: 17rem;
  margin: auto;
  font-family: 'Trebuchet MS', sans-serif;
}
</style>
