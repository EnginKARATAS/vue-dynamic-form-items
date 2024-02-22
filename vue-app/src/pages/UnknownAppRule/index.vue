<template>
  <div>
    <h1>Requirement Source Collection Rule Configration</h1>
    <SourceConfigItem :values="$attrs.values"/>
  </div>
</template>

<script setup>
import { onMounted, useAttrs } from "vue";
import SourceConfigItem from "./SourceConfigItem.vue";
onMounted(() => {
  const attrs = useAttrs();
  console.log(attrs);
});
</script>

<style></style>
