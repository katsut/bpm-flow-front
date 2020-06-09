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
import { createTodo } from '@/graphql/mutations'
import { listTodos } from '@/graphql/queries'

export default {
  name: 'App',
  created() {
    this.getTodos()
  },
  data() {
    return {
      name: '',
      description: ''
    }
  },
  methods: {
    async createTodo() {
      const { name, description } = this
      if (!name || !description) return
      const todo = { name, description }
      await API.graphql({
        query: createTodo,
        variables: { input: todo }
      })
      this.name = ''
      this.description = ''
    },
    async getTodos() {
      const todos = await API.graphql({
        query: listTodos
      })
      this.todos = todos.data.listTodos.items
    }
  }
}
</script>
