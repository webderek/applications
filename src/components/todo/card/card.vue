<template>
  <div class="wrap">
    <div class="card" >
      <div class="card-content">
        {{this.card.title}}
        <textarea class="card-content-title"
                  @keydown.enter.prevent="focusOut($event)"
                  @change="saveTitle()"
                  rows="2"
                  spellcheck="false"
                  v-model="title">
        </textarea>
        <div class="card-content-desc">
          Письмо - сделано уже ( поменять ссылки только надо после того как лп сделаю)

        </div>
      </div>
      <div class="card-actions">
        <Delete is="Delete" @click="deleteCard()"></Delete>
        <components is="Edit">
        </components>
      </div>
    </div>
  </div>
</template>

<script>
import Edit from "@/../static/img-partials/edit-card.svg"
import Delete from '@/../static/img-partials/delete.svg'
import {mapActions} from "vuex";
export default {
  name:"Card",
  props:["category", "card"],
  components:{
    Edit,
    Delete,
  },
  data() {
    return {
      title: "VPNU: Активности приуроченные выпуску VPNU iOS v9-ч.1"
    }
  },
  mounted() {
    if(this.card.title) {
      this.title = this.card.title
    }
  },
  beforeDestroy() {
    if(this.card.title) {
      this.title = this.card.title
    }
  },
  destroyed() {
    if(this.card.title) {
      this.title = this.card.title
    }
  },
  created() {
    if(this.card.title) {
      this.title = this.card.title
    }
  },
  methods: {
    ...mapActions(["saveCard", "deleteCard"]),
    focusOut(e) {
      e.target.blur()
    },
    async deleteCard(){
      const currentDataDelete = {
        categoryId: this.category.id,
        id: this.card.id
      }
      await this.$store.dispatch("deleteCard", currentDataDelete)
    },
    saveTitle(){
      const newData = {
        categoryId: this.category.id,
        card: this.card,
        newTitle: this.title
      }
      this.$store.dispatch("saveCard", newData)
    }
  }

}
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
}
.card {
  box-sizing: border-box;
  background-color: white;
  text-align: left;
  border-radius: 3px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 1px 0 #091e4240;
  &-content {
    padding-top: 10px;
    padding-left: 7px;
    padding-right: 7px;
    &-title {
      max-width: 257px;
      overflow: auto;
      width: 100%;
      border-left: 2.5px solid #fcba03;
      border-right: 2.5px solid #fcba03;
      border-radius: 5px;
      display: inline-block;
      margin: 0px 5px 5px 0;
      border-bottom: none;
      border-top: 0;
      resize: none;
      background-color: #ebecf0;
      line-height: 1.5;
      font-size: 14px;
      color: #172b4d;
      font-weight: 600;
    }
    &-title:focus-visible {
      border-left: 2.5px solid #ebecf0;
      border-right: 2.5px solid #ebecf0;
    }

  }
  &-actions {
    display: flex;
    justify-content: flex-start;
    margin-top:5px;
    border-radius: 5px;
    background-color: rgba(0,0,0,0.05);
    padding-left:3px;
    svg:first-child {
      width: 23px;
      height: 23px;
      margin: 5px;
      border-radius: 5px;
      path{
        fill: #5e6c84;
      }
      path:last-child{
        fill: white;
      }
    }
    svg:first-child:hover {
      path{
        fill: #e74c3c;
      }
      path:last-child{
        fill: white;
      }
    }
    ::v-deep svg:not(:first-child) {
      width: 23px;
      height: 23px;
      border: 1px solid;
      margin: 5px;
      fill: #5e6c84;
      border-radius: 5px;
      z-index: 1;
    }
    svg:hover {
      cursor: pointer;
      fill: #172b4d;
      background-color: #091e4214;
    }
  }
}
</style>