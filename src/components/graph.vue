<template>
    <div class="wrap">
      <div class="items">
        <hr class="as" v-for="n in getCountLines" :key="n" :style="{bottom: optionsSize[0].height * n+ 'px'}">
        <div class="test"></div>
        <div class="test"></div>
        <div class="test"></div>
        <div class="test"></div>
        <div class="test"></div>
          <span class="size-el" v-for="n in getCountLines" :key="n" :style="{bottom: optionsSize[0].height * n + 10+ 'px'}">{{n * optionsSize[0].division}}</span>
      </div>
      <span class="year-el" v-for="n in 5" :key="n" :style="{left: 80 * n  +  25 + 'px'}">{{n * 5}}</span>
    </div>
</template>

<script>
export default {
props:["optionsSize"],
  created() {
  },
  computed: {
    getCountLines() {
      return this.optionsSize[0].maxSize / this.optionsSize[0].division
    },
  }
}
</script>

<style lang="scss" scoped>
.size-el {
  display: inline-block;
  position: absolute;
  height: 0px;
  bottom: 60px;
  left: -25px;
}
.year-el {
  display: inline-block;
  position: absolute;
  bottom: -30px;
}
.wrapper {
  display: flex;
  align-items: flex-end;
}
.wrap {
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  position: relative;
}
.items {
  position: relative;
  background-color: white;
  display: flex;
  align-items: flex-end;
  height: 570px;
}
.as {
  position: absolute;
  width: 100%;
  bottom: 10px;
  margin: 0;
  left: 0;
  border: 1px black dashed;
  z-index: 0;
}


.test {
  width: 100%;
  max-width: 50px;
  height: 20%;
  background-color: #2c3e50;
  transition: 0.5s ease-out;
  transform-origin: bottom;
  margin-left: 60px;
  z-index: 1;
}

.test:hover {
  transform: scaleY(2);
}

</style>