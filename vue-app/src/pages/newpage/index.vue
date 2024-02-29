<template>
  <div>
    <el-tabs v-model="activeTab" @tab-click="handleTabClick">
      <el-tab-pane label="CompOne" name="compOne">
        <template v-if="activeTab === 'compOne'">
          <comp-one></comp-one>
        </template>
      </el-tab-pane>
      <el-tab-pane label="CompTwo" name="compTwo">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { ref } from 'vue';
import CompOne from "./CompOne.vue";

export default {
  setup() {
    const activeTab = ref('compOne');

    const handleTabClick = (tab) => {
      activeTab.value = tab.name;
    };

    return {
      activeTab,
      handleTabClick,
    };
  },
};
</script>

<style scoped>
</style>
