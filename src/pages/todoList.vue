<template>
  <div class="categories">
    <Category v-for="item of category" :key="item.id" :item="item"></Category>
    <a class="categories-add" @click="addCategory()">
      <components is="AddCategory" class="categories-add--img"></components>
      <span class="categories-add--text">Add Category</span>
    </a>
<!--    <div class="category">-->
<!--    <Card></Card>-->
<!--    </div>-->
<!--    <div class="category">-->
<!--      <Card></Card>-->
<!--    </div>-->
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Card from '../components/todo/card/card.vue'
import Category from '../components/todo/category/category.vue'
import AddCategory from '@/../static/img-partials/add-category.svg'
export default {
  name:"TodoList",
  components: {Card, Category, AddCategory},
  data(){
    return {category:[{id:1, name:"default", title: "default"}]}
  },
  created() {
    localStorage.getItem("categories") ? this.category = JSON.parse(localStorage.getItem("categories")) : false;
  },
  methods: {
    addCategory() {
      let lastId = this.category[this.category.length - 1].id+1
      this.category.push({id:lastId, name: "default", title: "default"})
      const parsed = JSON.stringify(this.category);
      localStorage.setItem('categories', parsed);
    }
  }
}
</script>

<style lang="scss" scoped>
.categories {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  &-add {
    display: flex;
    align-items: center;
    margin-left: 10px;
    padding: 10px;
    border-radius: 5px;
    &--text {
      padding-top: 1px;
      padding-left: 10px;
    }
  }
  &-add:hover {
    background-color: #091e4214;
    cursor: pointer;
    .categories-add--img {
      fill: #172b4d;
    }
    .categories-add--text {
      color: #091e42;
    }
  }
  &-add:active {
    background-color: #091e4221;
  }
}

</style>