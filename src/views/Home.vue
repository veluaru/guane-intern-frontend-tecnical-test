<template>
  <div class="home">
    <h1>TODO-LIST guane interns</h1>
    <b-button class="marginB" @click="createTodo">New Task</b-button>
    <CardList/>
  </div>
</template>

<script>
import CardList from '../components/CardList';
import json from '../json/defaultData'

export default {
  name: 'Home',
  components: {
    CardList
  },
  methods: {
    createTodo(){
      this.$router.push({ name: "CreateCard"});
    }
  },
  beforeCreate(){
   if(this.$store.getters.getTodos.length==0){
     json.data.forEach(element => {
      this.$store.state.todo = element
      this.$store.dispatch('addTodoAction')    
     });

   } 
  }
}
</script>

<style lang="scss" scoped>

h1 {
  margin: 2rem;
  font-family: 'Trebuchet MS', sans-serif;
}

.marginB{
  margin-bottom:2rem
}

</style>
