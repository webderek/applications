<template>
  <div id="graphics">
    <Graph :optionsSize="optionsSize"></Graph>
  </div>
</template>

<script>
import Graph from "../components/graph"
export default {
  name:"Graphics",
  components: {Graph},
  data() {
    return {
    optionsSize: [
      {
        maxSize: 45,
      division: 5,
        height: 50
      }
          ]}
  }
}
</script>
