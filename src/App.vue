<template>
  <div>
    <h1 class="text-3xl font-bold">To Do List</h1>
    <h3 class="text-xl font-bold">{{ complateAll }}</h3>
  </div>
  <!-- show items -->
  <ItemList :Items="DataItems" @changeItem="ComplatedItems"></ItemList>
</template>

<script setup lang="ts">
// import data
import{ DataItems} from './models/data/data'
// import item list
import ItemList from "./components/ItemList.vue";
//import reactive array
import { computed } from 'vue';
//fn ComplateItems
const ComplatedItems = (id : number) => {
  alert('Id item ' + id)
}
//watch data when change
const complateAll = computed(() => {
  let all = DataItems.length;
  let countComplate = 0

  DataItems.forEach( element => {
    if (element.complate) {
      countComplate++
    }
  })
  return countComplate == all ? 'All todo is complate' : 'No'
})
</script>
