<template>
  <div class="wrap">
    <div class="card" >
      <div class="card-title">
        qwes
      </div>
      <div class="card-actions">
        <components is="Edit">
        </components>
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

<style lang="scss" scoped>
.wrap {
  width: 100%;
  max-width: 300px;
}
.card {
  box-sizing: border-box;
  background-color: white;
  text-align: left;
  //height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>