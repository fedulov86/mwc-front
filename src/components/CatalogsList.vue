<template>
  <a-menu  mode="vertical" theme="dark">
    <a-menu-item
        v-for="catalog in catalogs"
        :key="catalog.name"
    >
        <template #icon>
            <TableOutlined />
        </template>
          <router-link
              class="nav-link mb-sm-3 mb-md-0"
              :to="`/${catalog.name}/view`"
              active-class="active"
              exact
          >{{ catalog.name }}</router-link>

    </a-menu-item>
  </a-menu>
</template>

<script lang="ts">
export default {
  name: "catalogs-list"
}
</script>
<script lang="ts" setup>
import { onMounted } from "vue";
import { message } from 'ant-design-vue';
import { ContainerOutlined, FileAddOutlined, TableOutlined } from '@ant-design/icons-vue';
import useCatalogsStore from "@/stores/catalogsStore";
import { storeToRefs } from "pinia";
import Tab from "@/models/Tab";
import Catalog from "@/models/Catalog";

const store = useCatalogsStore();
const { catalogs } = storeToRefs(store);

// const handleSelectMenuItem = (catalog: Catalog) => {
//   const tab = new Tab(
//       `/${catalog.name}`,
//       'TableOutlined',
//       catalog.name,
//       'catalog-view'
//   );
//   store.activateTab(tab)
// }

onMounted(async () => {
    const messageKey = 'catalog';
    message.loading({ content: 'Loading catalogs...', key: messageKey });
    try {
        await store.loadCatalogs();
        // store.loadAllOptions();
        message.success({ content: 'Catalogs loaded', key: messageKey, duration: 2 });
    } catch (e) {
       message.error({ content: e.toString(), key: messageKey, duration: 2 })
    }
});


</script>