<template>
  <div>My List</div>
  <!--show items-->
  <ul v-for="data in Items" :key="data.id">
    <li>
      {{ data.name }}
      <input
        type="checkbox"
        v-model="data.complate"
        @click="complatedItems(data.id)"
      />
    </li>
  </ul>
</template>
<script setup lang="ts">
//import type interface items
import type { ItemsInterface } from "../models/items/items.interface";
// define props
defineProps<{ Items: ItemsInterface[] }>();
//emit FN
const emit = defineEmits<{ (e: "changeItem", id: number): any }>();
//complate function items
const complatedItems = (id : number) => {
  emit("changeItem", id);
};
</script>
