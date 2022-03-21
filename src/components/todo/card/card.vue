<template>
  <div class="wrap">
    <div class="card" >
      <div class="card-title">
        qwes
      </div>
      <div class="card-actions">
        <Edit />
      </div>
    </div>
  </div>
</template>

<script>
import Edit from "@/assets/edit.svg"
export default {
  name:"Card",
  components:{
    Edit,
  },

}
</script>

<style lang="scss">
.wrap {
  width: 100%;
  max-width: 300px;
  background-color: grey;
  background-image: url("/src/assets/edit.svg?data");
}
.card {
  box-sizing: border-box;
  background-color: white;
  text-align: left;
  background-image: url("/static/img-partials/header.jpeg");
  background-color: #cccccc;
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>