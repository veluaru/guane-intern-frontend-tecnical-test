import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todosList: [],
    todo: null
  },
  mutations: {
    addTodo (state){
      state.todosList = [state.todo,...state.todosList]
    }
  },
  actions: {
    addTodoAction(context){
      context.commit('addTodo')
    }
  },
  modules: {
  },
  getters: {
    getTodos(state) {
      return state.todosList
    }
  }
})
