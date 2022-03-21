<template>
  <div class="main">
<Menu :navigation="navigation" />
  </div>
</template>

<script>
import Menu from "@/components/menu";
export default {
  components: {Menu},
  data() {
    return {
      navigation: [{
        nameTitle: 'Todo List',
        img: 'https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/3b/cb/44/3bcb4475-113b-8a2b-c470-b0638460fb58/source/512x512bb.jpg',
        path: 'todo',
        name: 'todo'
      },
        {
          nameTitle: 'Graphics',
          img: 'https://canvasjs.com/wp-content/uploads/images/gallery/javascript-charts/overview/javascript-charts-graphs-index-data-label.png',
          path: 'graphics',
          name: 'graphics'
        },
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
