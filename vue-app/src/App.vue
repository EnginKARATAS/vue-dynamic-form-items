<template>
  <div>
    <UnknownAppRule :values="resp" />
    <el-button>Default</el-button>
    <el-button @click="currentComponent = 'UnknownAppCollectionList'"
      >UnknownAppCollectionList</el-button
    >
    <el-button @click="currentComponent = 'UnknownAppRule'"
      >UnknownAppRule</el-button
    >
    <component :is="tabs[currentTab]"></component>
  </div>
</template>
<script setup>
import UnknownAppCollectionList from "./pages/UnknownAppCollectionList/index.vue";
import UnknownAppRule from "./pages/UnknownAppRule/index.vue";
import { computed, ref } from "vue";
const currentComponent = ref("UnknownAppCollectionList");
const tabs = {
  UnknownAppRule,
  UnknownAppCollectionList,
};
const resp = {
  sourceConfig: [
    {
      sourceConfigId: 1, //Manual import risk
      collectionPriority: 2,
      sourceConfigRule: [
        {
          ruleNameId: "1//Ranking of Installed Units",
          isSort: true,
          limitRange: "text",
        },
        {
          ruleNameId: "2//Avarage Daily Usage Duration",
          isSort: true,
          limitRange: "text",
        },
      ],
    },
    {
      sourceConfigId: 2, //Comprehensive Judgement
      collectionPriority: 2,
      sourceConfigRule: [
        {
          ruleNameId: "3//Daily Install Quantity",
          isSort: true,
          limitRange: "text",
        },
      ],
    },
  ],
  configrationQuantityCollecting: 1000,
  taskDuration: 15,
  configrationQuantityPriority: {
    sourceConfig: {
      sourceConfigId: 2,
      requirementSource: ["Collection List", 456, "Ranking of Installed Units"],
      collectionPriority: [789, 101, "Rule Name"],
      sourceConfigRule: {
        sourceConfigRuleId: 202,
        ruleName: ["Sort", 303, "Limit Range"],
      },
    },
  },
  sliderPriority: {
    sliderPriorityId: 303,
    priority: [101, 202, "Daily install quantity"],
  },
  sourceConfigRuleId: 404,
  ruleName: ["System Rules", 505, "Average daily usage duration"],
  sort: true,
  limitRange: {
    limitRangeStart: "300 seconds",
    limitRangeEnd: "600 seconds",
  },
};
</script>
