<template>
  <div id="App">
    <h1>Todo App</h1>
    <input v-model="name" type="text" placeholder="Todo name" />
    <input v-model="description" type="text" placeholder="Todo description" />
    <button @click="createTodo">Create Todo</button>
    <div v-for="item in todos" :key="item.id">
      <h3>{{ item.name }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
import { API } from 'aws-amplify'
import { onCreateTodo } from '@/graphql/subscriptions'

export default {
  // other functions and properties
  created() {
    this.getTodos()
    this.subscribe()
  },
  methods: {
    // other methods
    subscribe() {
      API.graphql({ query: onCreateTodo }).subscribe({
        next: (eventData) => {
          const todo = eventData.value.data.onCreateTodo
          if (this.todos.some((item) => item.name === todo.name)) return // remove duplications
          this.todos = [...this.todos, todo]
        }
      })
    }
  }
}
</script>
