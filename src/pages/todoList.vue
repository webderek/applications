<template>
  <div class="categories">
    <div class="categories-btn">
      <a class="categories-btn-add" @click="addCategory()">
      <components is="AddCategory" class="categories-btn-add--img"></components>
      <span class="categories-btn-add--text">Add Category</span>
    </a>
    </div>
    <Loader v-if="getLoading"></Loader>
    <Category v-for="category of getCategories" :key="category.id" :category="category"></Category>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Card from '../components/todo/card/card.vue'
import Category from '../components/todo/category/category.vue'
import AddCategory from '@/../static/img-partials/add-category.svg'
import {mapActions, mapGetters} from "vuex"
import test from "@/assets/data/test.json"
import Loader from '@/components/main/loader.vue'
export default {
  name:"TodoList",
  components: {Card, Category, AddCategory, Loader},
computed: {
    ...mapGetters(["getCategories", "getLoading"])
},
  data(){
    return {
      defaultCategory: { name: "default", title: "default",card:[]},
      test: test,
    }
  },
  beforeCreate() {
  },
  created() {
    this.$store.dispatch("setLoading", true)
  },
  async mounted() {
    await this.$store.dispatch("updateCategory");
    if (!this.$store.state.category.categories.length) {
      await this.$store.dispatch("saveCategory", this.defaultCategory)
    }
    this.$nextTick(() => this.$store.dispatch("setLoading", false))
  },
  methods: {
    ...mapActions(["saveCategory", "updateCategory", "setLoading"]),
    async addCategory() {
      await this.saveCategory({ name: "default", title: "default", card: []});
    }
  }
}
</script>

<style lang="scss" scoped>
.categories {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  &-btn {
    width: 100%;
    display: flex;
    justify-content: center;
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
  }
  &-btn {
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
}

</style>