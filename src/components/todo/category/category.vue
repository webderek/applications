<template>
  <div class="category">
    <div class="category-content">
      <textarea @keydown.enter.prevent="focusOut($event)"
                @change="saveTitle()"
                rows="1"
                spellcheck="false"
                class="category-content-title"
                v-model="title" >
      </textarea>
      <p class="category-content-count">{{count}} cards</p>
    </div>
    <div class="category-control">
      <a @click="count += 1" class="category-control-add">
        <components is="AddCard" class="category-control-add--img"></components>
        <span class="category-control-add-text">Add a card</span>
      </a>
  </div>
  </div>
</template>

<script>
import AddCard from "@/../static/img-partials/add-card.svg"
export default {
  name:"Category",
  components: {AddCard},
  props: ["item"],
  data() {
    return {
      categories: {},
      test:  [{id:1},{id:2}],
      title: "default",
      count: 0,
      id: []
    }
    },
  created() {
  },
  mounted() {
    //this.categories[this.item.id - 1].title ? this.title = this.categories[this.item.id - 1].title : this.title
    const updateTitle = JSON.parse(localStorage.getItem("categories"))
    //console.log(updateTitle)
    updateTitle[this.item.id - 1].title ? this.title = updateTitle[this.item.id - 1].title : this.title
    //console.log(this.categories, localStorage.getItem("categories"))
  },
  methods: {
    focusOut(e) {
      e.target.blur()
    },
    saveTitle(){
      const i = JSON.parse(localStorage.getItem("categories"))
      i[this.item.id - 1].title = this.title;
      const parse = JSON.stringify(i)
      localStorage.setItem("categories", parse)
      this.categories = i
      //console.log(i)
      console.log("Before",this.test)
      this.test[this.item.id - 1].id = this.title;
      console.log("After",this.test)
      // this.categories[this.item.id -1].title = this.title;
      // console.log( this.categories[0].title)
      // const parsed = JSON.stringify(this.categories)
      // localStorage.setItem("categories", parsed)
      // console.log(this.categories)
    }
  }
}
</script>

<style lang="scss" scoped>
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
  &-content {
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