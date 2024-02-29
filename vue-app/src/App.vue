<template>
  <newwapge></newwapge>
  <!-- <div>
    <div class="manage">
      <input type="text" v-model="textInput" />
      <el-button @click="addNewItem(textInput)">Add</el-button>
    </div>
    <ul>
      <li v-for="(item, index) in items" index="index">
        <div class="item">
          {{ index }}, {{ item.value }}
          <el-button class="del" @click="deleteItem(item)">❌</el-button>
        </div>
      </li>
    </ul>
  </div> -->
</template>
<script setup>
import newwapge from "./pages/newpage/index.vue"
import dataApi from "./utils/mock_service";
import { ref } from "vue";
let items = ref([{ value: "cat" }, { value: "dog" }, { value: "elephant" }]);
let addNewItem = (textInput) => {
  items.value.push({ value: textInput });
};
let deleteItem = (deleteIndex) => {
  const index = items.value.findIndex((val) => val.value === deleteIndex.value);
  console.table(items.value)
  console.log("🚀 ~ deleteItem ~ index:", index)
  console.table(items.value)
  items.value = items.value.splice(index, 1)
};
</script>
<style>
.del {
  justify-content: flex-end;
}
.item {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #856c8d;
  padding: 10px;
  width: 300px;
  margin: -10px 0 0 -20px;
}
.manage {
  padding: 20px;
  width: 300px;
}
li {
  list-style-type: none;
  padding: 0px;
}
</style>
