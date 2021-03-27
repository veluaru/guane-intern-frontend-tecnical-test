import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {
      "todo1": {
        "image": "https://images.dog.ceo/breeds/chow/n02112137_9708.jpg",
        "title": "Title 1",
        "date": "404",
        "description": "Description 1"
      },
      "todo2": {
        "image": "https://images.dog.ceo/breeds/chow/n02112137_9708.jpg",
        "title": "Title 2",
        "date": "404",
        "description": "Description 2"
      },
      "todo3": {
        "image": "https://images.dog.ceo/breeds/chow/n02112137_9708.jpg",
        "title": "Title 3",
        "date": "404",
        "description": "Description 3"
      },
      "todo4": {
        "image": "https://images.dog.ceo/breeds/chow/n02112137_9708.jpg",
        "title": "Title 4",
        "date": "404",
        "description": "Description 4"
      },
      "todo5": {
        "image": "https://images.dog.ceo/breeds/chow/n02112137_9708.jpg",
        "title": "Title 5",
        "date": "404",
        "description": "Description 5"
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getTodos(state) {
      return state.data
    }
  }
})
