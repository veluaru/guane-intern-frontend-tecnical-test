<template>
  <div class="home">
    <h1>TODO-LIST guane interns</h1>
    <b-button class="marginB" @click="createTodo">New Task</b-button>
    <CardList/>
  </div>
</template>

<script>
import CardList from '../components/CardList';

export default {
  name: 'Home',
  components: {
    CardList
  },
  methods: {
    createTodo(){
      this.$router.push({ name: "CreateCard"});
    }
  }
}
</script>

<style lang="scss" scoped>

h1 {
  margin: 3rem;
}

.marginB{
  margin-bottom:2rem
}

</style>
