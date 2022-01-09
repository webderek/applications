<template>
  <div class="menu">
    <div class="menu" v-for="(item,index) of navigation" :key="index">
      <router-link class="menu-item" :to="{path: '/todo'}" :style="{'background-image': `url(${item.img})`}">
          <p class="menu-item-name">{{item.name}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    navigation: Array
  },
  created() {
    console.log( this.navigation[0].name)
  }
}
</script>
<style lang="scss" scoped>
.menu {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  &-item {
    text-decoration: none;
    color: indigo;
    border-radius: 40px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 60px 0;
    margin: 10px 0;
          &-name {
            background-color: rgba(79, 79, 79, 0.3);
            font-size: 32px;
            padding: 0 60px;
            margin: 0px;
            border-radius: 10px;
          }
   }
}
</style>
