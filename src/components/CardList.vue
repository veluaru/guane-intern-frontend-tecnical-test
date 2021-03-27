<template>
  <div>
    <b-card-group deck>
      <b-row class="marginGrid" v-bind:key="item.id" v-for="item in data">
        <b-col>
          <Card v-bind:item="item" />
        </b-col>
      </b-row>
    </b-card-group>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  name: "Navbar",
  components: {
    Card,
  },
  data() {
    return {
      data: [],
    };
  },
  beforeMount() {
    this.data = this.$store.getters.getTodos;
  },
};
</script>

<style lang="scss" scoped>
.marginGrid {
  margin: auto;
  margin-bottom: 2rem;
}
</style>





