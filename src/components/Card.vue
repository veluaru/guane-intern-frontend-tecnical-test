<template>
    <b-card :title="item.title" :img-src="item.image" img-alt="Image" img-top class="cardSize">
        <b-card-sub-title class="mb-2">{{item.date}}</b-card-sub-title>
        <b-card-text>
        {{item.description}}
        </b-card-text>
    </b-card>
</template>

<script>

export default {
  name: "Card",
  props: ["item"],
};
</script>

<style lang="scss">

.cardSize {
    max-width: 17rem;
    margin:auto
}

</style>
