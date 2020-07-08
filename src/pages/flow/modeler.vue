<template>
  <div class="container">
    <h1 class="title">Flow Editor</h1>

    <div class="message intro">
      <div class="note">
        Drop BPMN diagram from your desktop or
        <a id="js-create-diagram" href>create a new diagram</a> to get started.
      </div>
    </div>

    <div class="message error">
      <div class="note">
        <p>Ooops, we could not display the BPMN 2.0 diagram.</p>

        <div class="details">
          <span>cause of the problem</span>
          <pre></pre>
        </div>
      </div>
    </div>

    <div v-bpmn="data" class="canvas" id="js-canvas"></div>

    <ul class="buttons">
      <li>
        download
      </li>
      <li>
        <a id="js-download-diagram" href title="download BPMN diagram">
          BPMN diagram
        </a>
      </li>
      <li>
        <a id="js-download-svg" href title="download as SVG image">
          SVG image
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import BpmnModeler from 'bpmn-js/lib/Modeler'

export default {
  middleware: 'authenticated',
  directives: {
    bpmn: {
      inserted(el, binding) {
        const viewer = new BpmnModeler({
          container: el
        })
        viewer.importXML(binding.value)
      }
    }
  },
  async asyncData({ $axios }) {
    const diagramUrl =
      'https://cdn.staticaly.com/gh/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn'
    return await $axios.get(diagramUrl)
  },
  async openDiagram() {
    await console.log(`openDiagram`)
  }
}
</script>

<style>
.canvas {
  height: 1000px;
}
</style>
