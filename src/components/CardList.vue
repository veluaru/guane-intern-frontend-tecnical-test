<template>
  <div class="marginSides">
    <b-card-group>
      <b-row class="marginGrid" v-bind:key="item.id" v-for="item in data" >
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
    this.data = this.$store.getters.getTodos.sort(function (a, b) {
      let dateA = Date.parse(a.date);
      let dateB = Date.parse(b.date);
      let dates = dateB - dateA;
      let isImportant = b.important - a.important;
      return dates + isImportant;
    });
    this.data = this.$store.getters.getTodos.sort(function (a, b) {
      return b.important - a.important;
    });
  },
};
</script>

<style lang="scss" scoped>
.marginGrid {
  margin: auto;
  margin-bottom: 2rem;
}
.marginSides {
  margin-left: 3rem;
  margin-right: 3rem;
}
</style>





