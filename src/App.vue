<template>
  <a-layout class="full-h">
    <a-layout-sider
        :trigger="null"
        collapsible
        :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
        width="300"
    >
      <catalogs-list/>
    </a-layout-sider>
    <a-layout-content style="background-color: white; margin-left: 300px">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts">
export default {
  name: "App"
}
</script>

<script lang="ts" setup>
import CatalogsList from "@/components/CatalogsList.vue";
// import CTabs from "@/components/Tabs.vue";

</script>

<style>
#app {
  height: 100vh;
}
.full-h {
  height: 100%;
}
</style>