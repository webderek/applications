<template>
  <div class="menu">
    <MenuSvg class="menu-svg"  @click.prevent="visible =! visible"></MenuSvg>
    <div class="menu-block" v-if="visible">
      <div v-for="menuItem of menuItems" :key="menuItem.name" @click="deleteCategory(menuItem.name)" class="menu-block-item">
        <a class="menu-block-item-event">
          <components :is="menuItem.name"></components>
          <p class="menu-block-item-event-name">{{menuItem.name}}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions} from "vuex";
import MenuSvg from "@/../static/img-partials/menu.svg"
import jsonMenu from "@/assets/data/menu.json"
import Delete from '@/../static/img-partials/delete.svg'
export default {
  name:"Menu",
  components: {MenuSvg, Delete},
  props: ["category"],
  data(){
    return {
      menuItems: jsonMenu.submenu[0].list,
      visible: false,
    }
  },
  created() {
  },
  methods:{
    ...mapActions(["deleteCategory"]),
    async deleteCategory(component){
      if (component === "Delete"){
        await this.$store.dispatch("deleteCategory", this.category)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  &-block {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    top: 20px;
    border-radius: 5px;
    z-index: 2;
    box-shadow: 0 4px 16px rgb(26 94 204 / 8%);
    margin: 12px auto;
    background-image: url(https://mydiveline.com/new/wp-content/uploads/2016/09/photo-placeholder-4.jpg);
    background-size: 100% 100%;
    &-item {
      &-event {
        width: 138px;
        display: flex;
        align-items: center;
        margin-bottom: 4px;
        padding: 6px 10px;
        color: #8ea1b3;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.2;
        text-decoration: none;
        cursor: pointer;
        transition: .3s ease-in-out;
        transition-property: border,color;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        width: 148px;
        min-width: 138px;
        max-height: 40px;
        background-color: #091e4214;
        border-radius: 5px;
        svg {
          path{
            fill: #5e6c84;
          }
          path:last-child{
            fill: white;
          }
        }
        &-name {
          color: #172b4d;
          padding-left: 10px;
        }
      }
    }
    &-item:hover{
      svg {
        path{
          fill: #e74c3c;
        }
        path:last-child{
          fill: white;
        }
      }
      .menu-block-item-event{
        opacity: 0.7;
      }
    }
  }
  &-svg {
    width: 30px;
    height: 30px;
    fill: #5e6c84;
    border-radius:5px;
    z-index: 1;
  }
  &-svg:hover {
    cursor: pointer;
    fill: #172b4d;
    background-color: #091e4214;
  }
}
</style>