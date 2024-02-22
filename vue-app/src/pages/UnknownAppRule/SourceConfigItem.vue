<template>
  <div>
    <el-row>
      <el-col :span="4">
        <h3>Requirement Source{{$attrs.values.configrationQuantityCollecting}}</h3>
      </el-col>
      <el-col :span="4">
        <h3>Collection Priority</h3>
      </el-col>
      <el-col :span="4">
        <h3>Rule Name</h3>
      </el-col>
      <el-col :span="4">
        <h3>Sort</h3>
      </el-col>
      <el-col :span="4">
        <h3>❌</h3>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { onMounted, useAttrs } from "vue";
onMounted(() => {
  const attrs = useAttrs().values;
  console.log("🚀 ~ onMounted ~ attrs:", attrs)
});
</script>
