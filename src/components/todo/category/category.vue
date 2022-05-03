<template>
  <div class="category">
    <div class="category-content">
      <div class="category-content-main">
      <textarea @keydown.enter.prevent="focusOut($event)"
                @change="saveTitle()"
                rows="1"
                spellcheck="false"
                class="category-content-title"
                v-model="title" >
      </textarea>
      <p class="category-content-count" >{{getCardLength}} cards</p>
      </div>
      <Menu :category="category"></Menu>
    </div>
    <div class="category-cards">
      <transition-group name="list" tag="div">
      <Card class="category-cards-card" v-for="(item, index) of getCard" :category="category" :card="item" :key="index"></Card>
      </transition-group>
    </div>
      <div class="category-control">
      <a @click="addCard()" class="category-control-add" >
        <components is="AddCard" class="category-control-add--img"></components>
        <span class="category-control-add-text">Add a card</span>
      </a>
    </div>
  </div>
</template>

<script>
import AddCard from "@/../static/img-partials/add-card.svg"
import Menu from '@/components/todo/category/menu/menu.vue'
import Card from '@/components/todo/card/card.vue'
import {mapActions, mapGetters} from "vuex";
export default {
  name:"Category",
  components: {AddCard, Menu, Card},
  props: ["category"],
  computed: {
    ...mapGetters(["getCategories"]),
    getCard () {
      return this.category.card
    },
    getCardLength(){
      return this.category?.card?.length || 0
    }
  },
  data() {
    return {
      categories: {},
      title: "default",
      count: 0,
    }
  },

  async created() {
  },
  mounted() {
    if(this.category.title) {
      this.title = this.category.title
    }
  },
  methods: {
    ...mapActions(["saveCategory", "saveCard"]),
    focusOut(e) {
      e.target.blur()
    },
    deleteCategory(){

    },
    async addCard() {
      const currentData = {
        categoryId: this.category.id,
        card: {"title": "default", "id":0}
      }
      await this.$store.dispatch("saveCard", currentData)
    },
    saveTitle(){
      this.category.title = this.title
      this.$store.dispatch("saveCategory", this.category)
    }
  }
}
</script>

<style lang="scss" scoped>
//.category-cards-card {
//  transition: .3s ease-in;
//}
//  animation-false {
//  opacity: 1;
//    transform: translate(0,0);
//
//  }
//.animation-true {
//  transform: translate(200px,200px);
//  opacity: 0;
//}
.list-enter-active, .list-card-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translate(0, 100px);
}
.category {
  display: flex;
  flex-direction: column;
  background-color: #ebecf0;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
  margin:10px;
  text-align: left;
  padding: 10px;
  color: #5e6c84;
  box-sizing: border-box;
  &-content {
    display: flex;
    justify-content: space-between;
    padding: 0px 8px;
    margin-bottom: 20px;
    &-title {
      display:inline-block;
      vertical-align:middle;
      margin: 0px 5px 5px 0;
      border: none;
      resize: none;
      height: 20px;
      background-color: #ebecf0;
      line-height: 1.5;
      font-size: 14px;
      color: #172b4d;
      font-weight: 600;
    }
    &-count {
      margin: 0;
    }
  }
  &-control {
    &-add {
      display: flex;
      align-items: center;
      padding: 5px 8px;
      margin-top: 10px;
      border-radius: 5px;
      &--img {
        fill: #5e6c84;
      }
      &-text {
        padding-top: 3px;
        padding-left: 10px;
      }
    }
    &-add:hover {
      background-color: #091e4214;
      cursor: pointer;
      .category-control-add--img {
        fill: #172b4d;
      }
      .category-control-add-text {
        color: #091e42;
      }
    }
    &-add:active {
      background-color: #091e4221;
    }
  }
}
</style>