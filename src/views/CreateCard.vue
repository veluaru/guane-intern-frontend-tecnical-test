<template>
  <div>
    <h1>Create TODO</h1>
    <div class="bordeExterno">
      <b-col>
        <b-row>
          <b-img class="imageSize" :src="image" fluid></b-img>
        </b-row>
        <b-row>
          <p>Task title</p>
          <b-input-group class="centerContent">
            <b-form-input v-model="title"></b-form-input>
          </b-input-group>
        </b-row>
        <b-row>
          <p>Task date</p>
          <b-form-datepicker
            id="example-datepicker"
            v-model="date"
            class="centerContent"
          ></b-form-datepicker
        ></b-row>
        <b-row>
          <p>Task description</p>
          <b-form-textarea
            id="textarea"
            v-model="description"
            placeholder="Enter description..."
            class="centerContent"
          ></b-form-textarea>
        </b-row>
        <b-row>
          <b-form-checkbox
            id="checkbox-1"
            v-model="important"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not-accepted"
            class="centerContent"
          >
            Important task
          </b-form-checkbox>
        </b-row>
        <b-row>
          <b-button class="centerContent" @click="submit">Create</b-button>
        </b-row>
      </b-col>
    </div>
    <b-button class="centerContent" @click="home">Home</b-button>
  </div>
</template>

<script>
import imageServices from "../services/imageServices";

export default {
  name: "CreateCard",
  data() {
    return {
      title: "",
      date: "",
      description: "",
      important: "",
      image: "",
    };
  },
  methods: {
    submit() {
        let data =     {  
            title: this.title,
            date: this.date,
            description: this.description,
            important: this.important=="accepted",
            image: this.image
        }
        this.$store.state.todo = data
        this.$store.dispatch('addTodoAction')    
    },
    home(){
        this.$router.push({ name: "Home"})
    },
  },
  async beforeMount() {
    this.image = await imageServices.getImage();
  },
};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 2rem;
  margin-top: 2rem;
}

p {
  margin: auto;
}

.centerContent {
  max-width: 70%;
  margin: auto;
  margin-bottom: 2rem;
}
.bordeExterno {
  border-style: solid;
  border-width: thin;
  max-width: 70rem;
  margin: auto;
  padding: 2rem;
  margin-bottom: 5rem;
}
.imageSize {
  margin: auto;
  margin-bottom: 2rem;
  max-width: 50%;
  max-height: 60%;
}
</style>
