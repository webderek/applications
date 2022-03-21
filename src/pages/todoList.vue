<template>
  <div>
    <Card></Card>
  </div>
</template>

<script>
import Card from '../components/todo/card/card.vue'
export default {
  name:"TodoList",
  components: {Card},
  data(){
    return {test:"test"}
  },
  mounted() {
    console.log(this.test)
  }
}
</script>