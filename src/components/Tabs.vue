<template>
  <a-tabs
      v-show="tabs.length > 0"
      hide-add v-model:activeKey="activeTabPath"
      type="editable-card"
      @edit="handleTabEdit"
  >
    <a-tab-pane
        v-for="tab in tabs"
        :key="tab.path"
        :tab="tab.path"
    >
      <router-view v-if="activeTabPath === tab.path" />
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts">
export default {
  name: "CTabs"
}
</script>

<script lang="ts" setup>
import { onMounted } from "vue";
import useTabsStore from "@/stores/tabsStore";
import { storeToRefs } from "pinia";

const store = useTabsStore();

const {
  tabs,activeTabPath
} = storeToRefs(store);

onMounted(async () => {
  store.loadState()
});

function handleTabEdit(path, method) {
  if(method === 'remove') {
    store.deleteTab(path);
  }
}
</script>

<style scoped>

</style>