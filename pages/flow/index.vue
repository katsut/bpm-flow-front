<template>
  <div class="container">
    <h1 class="title">Flow Editor</h1>

    <div v-bpmn="data" class="canvas"></div>
  </div>
</template>

<script>
import BpmnJS from 'bpmn-js'

export default {
  middleware: 'authenticated',
  directives: {
    bpmn: {
      inserted(el, binding) {
        const viewer = new BpmnJS({
          container: el
        })
        viewer.importXML(binding.value)
      }
    }
  },
  async asyncData({ $axios }) {
    const diagramUrl =
      'https://cdn.staticaly.com/gh/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn'
    const data = await $axios.get(diagramUrl)
    return data
  }
}
</script>

<style>
.canvas {
  height: 1000px;
}
</style>
